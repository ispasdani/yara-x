// app/sitemap.ts
import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";
const NOW = new Date();

// Toggle this to true if you actually have localized URLs like /en, /ro
const I18N_ENABLED = false as const;
const LANGS = ["en", "ro"] as const;

type Route = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap["0"]["changeFrequency"];
  priority: number;
  images?: string[];
};

const routes: Route[] = [
  { path: "/", changeFrequency: "daily", priority: 1.0, images: [`${SITE_URL}/og-image.png`] },
  { path: "/prices", changeFrequency: "weekly", priority: 0.8 },
  { path: "/products", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about", changeFrequency: "yearly", priority: 0.5 },
  // add more marketing pages here
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => {
    const baseEntry: MetadataRoute.Sitemap[0] = {
      url: `${SITE_URL}${r.path}`,
      lastModified: NOW,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
      images: r.images,
    };

    // If you have locale-prefixed routes (/en, /ro), include hreflang alternates
    if (I18N_ENABLED) {
      const languages = Object.fromEntries(
        LANGS.map((l) => [
          l,
          `${SITE_URL}/${l}${r.path === "/" ? "" : r.path}`,
        ])
      );
      return { ...baseEntry, alternates: { languages } };
    }

    return baseEntry;
  });
}
