import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { canonicalFor } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services", priority: 0.95, changeFrequency: "monthly" },
    { path: "/academics", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.85, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.95, changeFrequency: "yearly" },
    { path: "/legal/medical-disclaimer", priority: 0.3, changeFrequency: "yearly" },
    { path: "/legal/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/legal/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  const posts = getAllPosts().map((post) => ({
    url: canonicalFor(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map((p) => ({
      url: canonicalFor(p.path),
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...posts,
  ];
}
