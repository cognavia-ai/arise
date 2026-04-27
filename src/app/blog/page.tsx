import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import BlogListingClient from "@/components/blog/BlogListingClient";
import { canonicalFor } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/seo/structuredData";
import JsonLd from "@/components/seo/JsonLd";

const blogUrl = canonicalFor("/blog");

export const metadata: Metadata = {
  title: "Blog & Resources | Arise Medical Centre",
  description:
    "Expert health articles on diabetes management, diabetic foot care, preventive health, cancer screening, and lifestyle tips from Dr. K S Premlal.",
  keywords: [
    "diabetes blog",
    "diabetic foot care tips",
    "diabetes reversal",
    "HbA1c guide",
    "health blog thrissur",
    "Dr Premlal articles",
  ],
  alternates: { canonical: blogUrl },
  openGraph: {
    title: "Blog & Resources | Arise Medical Centre",
    description:
      "Expert health articles on diabetes management, foot care, preventive health, and lifestyle tips from Dr. K S Premlal at Arise Medical Centre, Thrissur.",
    locale: "en_IN",
    type: "website",
    siteName: "Arise Medical Centre",
    url: blogUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Resources | Arise Medical Centre",
    description:
      "Expert health articles from Dr. K S Premlal at Arise Medical Centre.",
  },
};

const blogBreadcrumbs = breadcrumbSchema([
  { name: "Home", url: canonicalFor("/") },
  { name: "Blog", url: blogUrl },
]);

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      <JsonLd id="ld-blog-breadcrumb" data={blogBreadcrumbs} />
      {/* Hero Banner */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1E293B 0%, #0F766E 50%, #0D9488 100%)",
        }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3" />

        <Container className="relative z-10">
          <div className="flex flex-col items-center text-center">
            <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
              <Link href="/" className="transition-colors duration-200" style={{ color: "rgba(255,255,255,0.7)" }}>
                Home
              </Link>
              <ChevronRight className="w-4 h-4" style={{ color: "rgba(255,255,255,0.5)" }} />
              <span className="font-medium" style={{ color: "#FFFFFF" }}>Blog</span>
            </nav>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6" style={{ color: "#FFFFFF" }}>
              Blog & Resources
            </h1>

            <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
              Expert insights on diabetes management, preventive health, and
              evidence-based wellness from Dr. K S Premlal and the Arise team.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Listing */}
      <section className="py-16 bg-cloud">
        <Container>
          <BlogListingClient posts={posts} categories={categories} />
        </Container>
      </section>
    </>
  );
}
