"use client";

import { useLanguageData } from "@/hooks/useLanguageData";

const clientLogos = [
  "Baker McKenzie",
  "Clifford Chance",
  "Latham & Watkins",
  "Skadden",
  "White & Case",
  "Freshfields",
];

export default function ClientLogos() {
  const { langData } = useLanguageData();

  return (
    <section className="py-16 w-full bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 tracking-wider uppercase font-medium">
            {langData?.public.clientLogos.clientLogosTitle.title}
          </p>
        </div>

        {/* Marquee wrapper */}
        <div className="relative group overflow-hidden">
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent" />

          {/* Track: duplicate the items once so the loop is seamless */}
          <div
            className="marquee flex w-max gap-8 items-center"
            style={{ animationDuration: "28s" }}
          >
            {[...clientLogos, ...clientLogos].map((client, idx) => (
              <div key={idx} className="shrink-0">
                <div className="h-12 px-5 flex items-center justify-center rounded-xl bg-white">
                  <span className="text-gray-600 font-medium text-sm tracking-wide whitespace-nowrap hover:text-gray-900 transition-colors">
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
