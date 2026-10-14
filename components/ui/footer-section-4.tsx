"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { SocialCloud } from "@/components/ui/footer-section-4-utils/social-cloud";
import ShinyButton from "@/components/ui/shiny-button";
import { Wordmark } from "@/components/mockups";

const FOOTER_TITLE = "Hisaab, ab AI se.";

export default function Footer4() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "How it works", href: "#how" },
        { label: "Features", href: "#features" },
        { label: "Plans", href: "#plans" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Works on",
      links: [
        { label: "WhatsApp" },
        { label: "Web" },
        { label: "Android" },
        { label: "iPhone" },
      ],
    },
    {
      title: "Made for",
      links: [
        { label: "Businesses" },
        { label: "Individuals" },
        { label: "Accountants" },
        { label: "Urdu ya English" },
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-ink py-12 px-4">
      <motion.div
        className="container mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row gap-4 h-full">
          {/* Lime card */}
          <motion.div
            className="relative w-full md:w-1/3 min-h-[300px] md:min-h-[520px] overflow-hidden rounded-2xl bg-lime flex flex-col justify-between p-8 md:p-10"
            variants={itemVariants}
          >
            {/* SVG Noise Overlay */}
            <svg
              className="absolute inset-0 w-full h-full opacity-25 pointer-events-none mix-blend-multiply z-0"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <filter id="noiseFilter2">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.65"
                  numOctaves="4"
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter2)" />
            </svg>

            {/* Top Logo */}
            <div className="relative z-10">
              <a href="#top" aria-label="Hisaab Desk home">
                <Wordmark dark={false} className="text-3xl" />
              </a>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 space-y-6 text-ink-2">
              <div>
                <h3 className="font-display text-3xl font-extrabold leading-tight tracking-tight">
                  {FOOTER_TITLE}
                </h3>
                <p className="mt-1 font-medium text-ink-2/75">Aap ka AI munshi.</p>
              </div>
              <SocialCloud className="gap-2" />
              <p className="text-xs text-ink-2/60">
                &copy; {new Date().getFullYear()} Hisaab Desk. Made in Pakistan.
              </p>
            </div>
          </motion.div>

          {/* Dark card */}
          <motion.div
            className="w-full md:w-2/3 rounded-2xl bg-ink border border-paper/20 p-8 md:p-12 flex flex-col justify-between min-h-[420px] md:min-h-[520px]"
            variants={itemVariants}
          >
            {/* Top Categories Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
              {footerLinks.map((section) => (
                <div key={section.title} className="flex flex-col space-y-6">
                  <h4 className="eyebrow text-lime">{section.title}</h4>
                  <ul className="flex flex-col space-y-3 text-body-dark font-medium">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        {"href" in link ? (
                          <a href={link.href} className="hover:text-paper transition-colors">
                            {link.label}
                          </a>
                        ) : (
                          link.label
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom Waitlist */}
            <div className="space-y-4 mt-12 md:mt-0">
              <h4 className="font-display text-2xl font-extrabold text-paper">
                Founding 100 mein aao.
              </h4>
              <p className="max-w-md text-body-dark">
                Yearly plan par 40% off, jab tak aap saath hain. Launch par 14 din Business free.
              </p>
              <ShinyButton
                href="/waitlist"
                label="Join the waitlist"
                className="inline-flex"
                style={{ padding: "0.75rem 1.75rem", fontSize: "1rem", lineHeight: "1.5rem", fontWeight: 600 }}
                fillColor="#14141A"
                labelColor="#F6F6EE"
                accentColor="#C6FF3D"
                accentSoftColor="#E2FF9E"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
