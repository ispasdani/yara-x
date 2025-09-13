"use client";

import { useLanguageData } from "@/hooks/useLanguageData";
import type { LanguageData } from "@/types/languageDataTypes";

const clientLogos = [
  "Baker McKenzie",
  "Clifford Chance",
  "Latham & Watkins",
  "Skadden",
  "White & Case",
  "Freshfields",
];

const DEFAULT_CLIENT_LOGOS: LanguageData["public"]["clientLogos"] = {
  clientLogosTitle: {
    title: "Trusted by top law firms, companies, and users worldwide",
  },
};

export default function ClientLogos() {
  const { langData } = useLanguageData();
  const t = langData?.public.clientLogos ?? DEFAULT_CLIENT_LOGOS;

  return (
    <section
      className="py-16 w-full border-t"
      style={{
        backgroundColor: "var(--background)",
        borderColor: "var(--border)",
      }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <p
            className="text-sm tracking-wider uppercase font-medium"
            style={{ color: "var(--muted-foreground)" }}
          >
            {t.clientLogosTitle.title}
          </p>
        </div>

        {/* Marquee wrapper */}
        <div className="relative group overflow-hidden">
          {/* Edge fades */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r to-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--background), transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l to-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to left, var(--background), transparent)",
            }}
          />

          {/* Track: duplicate the items once so the loop is seamless */}
          <div
            className="marquee flex w-max gap-8 items-center"
            style={{ animationDuration: "28s" }}
          >
            {[...clientLogos, ...clientLogos].map((client, idx) => (
              <div key={idx} className="shrink-0">
                <div
                  className="h-12 px-5 flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                  }}
                >
                  <span
                    className="font-medium text-sm tracking-wide whitespace-nowrap hover:text-foreground transition-colors"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Minimal CSS for the infinite marquee + pause on hover */}
      <style>{`
        .marquee { animation: marquee linear infinite; }
        .group:hover .marquee { animation-play-state: paused; }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none; }
        }
      `}</style>
    </section>
  );
}
