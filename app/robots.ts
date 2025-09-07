// app/robots.ts
import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";
const IS_PROD = process.env.NODE_ENV === "production";

export default function robots(): MetadataRoute.Robots {
  // Block everything on non-prod (staging/preview)
  if (!IS_PROD) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          // auth & private
          "/sign-in",
          "/sign-up",
          "/dashboard",
          "/account",
          "/settings",
          // API & internals
          "/api/",
          "/trpc/",
          "/_next/",   // Next internals
          "/static/",  // if you have one
          // common sensitive query params (optional)
          "/*?*token=*",
          "/*?*session=*",
        ],
      },

      // OPTIONAL: block AI crawlers (uncomment if desired)
      // { userAgent: "GPTBot", disallow: "/" },
      // { userAgent: "CCBot", disallow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
