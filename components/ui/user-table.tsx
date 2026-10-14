/**
 * A table of people (or suppliers), each with a face.
 *
 * Every blobatar is one static `<img>` with a data URI, so rows stay cheap and
 * nothing animates while you scroll past. The face is the one column that is
 * different for every row without being text, which makes a row findable again
 * at a glance.
 */
"use client";

import { Blobatar } from "@blobatar/react";
import type { BlobatarOptions } from "blobatar";
import { cn } from "@/lib/utils";

export type User = {
  /** The seed. Stable ids beat display names, so a face survives a rename. */
  id: string;
  name: string;
  email: string;
  role: string;
  /** Free text, styled as a pill. */
  status?: string;
  /** Pill colour: lime for good news, pink for a risk, plain otherwise. */
  statusTone?: "good" | "risk" | "neutral";
  /** Already formatted. */
  lastSeen?: string;
  /** Lifts the row out, e.g. the recommended pick. */
  highlight?: boolean;
};

export type UserTableProps = {
  users: User[];
  /** Read by screen readers ahead of the table, and never shown. */
  caption?: string;
  /** Column titles, in order: person, role, status, last seen. */
  headers?: [string, string, string, string];
  blobatar?: BlobatarOptions;
  className?: string;
};

const cell = "px-4 py-3.5 align-middle sm:px-5";

const tones = {
  good: "border-lime bg-lime text-ink-2",
  risk: "border-pink/40 bg-pink/10 text-pink",
  neutral: "border-line-dark text-body-dark",
};

export function UserTable({
  users,
  caption = "Users",
  headers = ["User", "Role", "Status", "Last seen"],
  blobatar,
  className,
}: UserTableProps) {
  return (
    // The wrapper scrolls, not the table, so the rounded border survives on phones
    <div
      className={cn(
        "w-full overflow-x-auto rounded-3xl border border-line-dark bg-card-dark text-paper",
        className,
      )}
    >
      <table className="w-full min-w-[34rem] border-collapse text-left text-sm sm:text-[15px]">
        <caption className="sr-only">{caption}</caption>

        <thead>
          <tr className="border-b border-line-dark text-body-dark">
            <th scope="col" className={cn(cell, "font-semibold")}>{headers[0]}</th>
            <th scope="col" className={cn(cell, "font-semibold")}>{headers[1]}</th>
            <th scope="col" className={cn(cell, "font-semibold")}>{headers[2]}</th>
            <th scope="col" className={cn(cell, "text-right font-semibold")}>{headers[3]}</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className={cn(
                "border-b border-line-dark transition-colors duration-150 last:border-0",
                user.highlight ? "bg-ink-2 shadow-[inset_4px_0_0_0_#C6FF3D]" : "hover:bg-ink-2",
              )}
            >
              <td className={cell}>
                <div className="flex items-center gap-3">
                  {/* Squircle backdrop gives every face the same box, so names line up */}
                  <Blobatar
                    name={user.id}
                    background="squircle"
                    {...blobatar}
                    alt=""
                    className="size-9 shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="truncate font-semibold">{user.name}</div>
                    <div className="truncate text-xs text-body-dark">{user.email}</div>
                  </div>
                </div>
              </td>

              <td className={cn(cell, "font-bold", user.highlight ? "text-lime" : "text-paper")}>{user.role}</td>

              <td className={cell}>
                {user.status ? (
                  <span
                    className={cn(
                      "inline-flex items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold",
                      tones[user.statusTone ?? "neutral"],
                    )}
                  >
                    {user.status}
                  </span>
                ) : null}
              </td>

              <td className={cn(cell, "text-right font-mono text-xs text-body-dark")}>{user.lastSeen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
