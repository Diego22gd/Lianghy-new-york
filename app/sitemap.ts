import type { MetadataRoute } from "next";
import { portfolioModules } from "./portfolio/portfolio-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lianghy.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sobre-mi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const portfolioRoutes: MetadataRoute.Sitemap = portfolioModules.map((module) => ({
    url: `${baseUrl}/portfolio/${module.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...portfolioRoutes];
}
