import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/site";

const routes = [
  "/",
  "/company",
  "/tours",
  "/tours/dmz-tour",
  "/tours/seoul-city-tour",
  "/tours/airport-transfer",
  "/tours/private-tour",
  "/tours/corporate-events",
  "/tours/guide-service",
  "/blog",
  "/blog/airport-pickup",
  "/blog/seoul-city-tour",
  "/blog/dmz-tour",
  "/contact",
  "/privacy"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8
  }));
}
