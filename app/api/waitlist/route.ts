import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Where signups go:
// - WAITLIST_WEBHOOK_URL set  -> POST the entry as JSON (Google Apps Script / Sheet, Zapier, Make, n8n...)
// - otherwise (local dev)     -> append to data/waitlist.json
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const str = (v: unknown, max = 120) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const email = str(body.email, 120).toLowerCase();
  const source = str(body.source, 40);

  if (!EMAIL.test(email)) return NextResponse.json({ error: "Sahi email likhein." }, { status: 400 });

  const entry = { email, source, createdAt: new Date().toISOString() };

  const webhook = process.env.WAITLIST_WEBHOOK_URL;
  try {
    if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      });
      if (!res.ok) throw new Error(`webhook ${res.status}`);
    } else {
      const dir = path.join(process.cwd(), "data");
      const file = path.join(dir, "waitlist.json");
      await fs.mkdir(dir, { recursive: true });
      const list: { email?: string }[] = JSON.parse(await fs.readFile(file, "utf8").catch(() => "[]"));
      if (!list.some((e) => e.email === entry.email)) list.push(entry);
      await fs.writeFile(file, JSON.stringify(list, null, 2));
    }
  } catch (err) {
    console.error("waitlist save failed", err);
    return NextResponse.json({ error: "Abhi save nahi ho saka. Thori dair baad try karein." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
