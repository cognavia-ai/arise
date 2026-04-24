import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft, Calendar, Clock, User } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

// Map blog slugs to their images
const blogImages: Record<string, string> = {
  "diabetic-foot-care-guide": "/v1/images/blog/diabetic-foot-care.jpg",
  "diabetes-reversal-lifestyle": "/v1/images/blog/diabetes-reversal.jpg",
  "understanding-hba1c": "/v1/images/blog/hba1c.jpg",
  "obesity-prevalence-college-students": "/v1/images/blog/obesity-students.jpg",
  "musculoskeletal-disorders-bus-drivers": "/v1/images/blog/back-pain.jpg",
  "cardiovascular-risk-young-adults": "/v1/images/blog/heart-health.jpg",
  "nutrigenomics-future-nutrition": "/v1/images/blog/nutrigenomics.jpg",
  "covid19-impact-adolescent-health": "/v1/images/blog/adolescent-health.jpg",
  "hepatitis-b-awareness-study": "/v1/images/blog/hepatitis-vaccine.jpg",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | Arise Medical Centre" };
  }

  return {
    title: `${post.title} | Arise Medical Centre`,
    description: post.excerpt,
    keywords: [post.category, "arise health", "Dr Prem Lal", "diabetes"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      siteName: "Arise Medical Centre",
      locale: "en_IN",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const imageSrc = blogImages[post.slug] || post.image;

  // Convert markdown-style content to simple HTML paragraphs
  const contentHtml = post.content
    .split("\n\n")
    .filter((block) => block.trim())
    .map((block) => {
      const trimmed = block.trim();
      if (trimmed.startsWith("## ")) {
        return `<h2>${trimmed.slice(3)}</h2>`;
      }
      if (trimmed.startsWith("### ")) {
        return `<h3>${trimmed.slice(4)}</h3>`;
      }
      // Handle markdown links [text](url)
      const withLinks = trimmed.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="text-healing-teal hover:underline">$1</a>'
      );
      // Handle bold **text**
      const withBold = withLinks.replace(
        /\*\*([^*]+)\*\*/g,
        "<strong>$1</strong>"
      );
      // Handle italic *text*
      const withItalic = withBold.replace(
        /\*([^*]+)\*/g,
        "<em>$1</em>"
      );
      // Handle horizontal rules
      if (trimmed === "---") {
        return '<hr class="my-8 border-gray-200" />';
      }
      return `<p>${withItalic}</p>`;
    })
    .join("\n");

  return (
    <>
      {/* Hero with featured image */}
      <section className="relative">
        {/* Image background */}
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full overflow-hidden">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-healing-teal/30 to-deep-teal/60" />
          )}
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
        </div>

        {/* Text content positioned over the image */}
        <div className="absolute inset-0 flex items-end">
          <Container className="pb-10 lg:pb-14">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1 text-sm mb-4" style={{ color: "#94A3B8" }}>
              <Link href="/" className="hover:text-healing-teal transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-healing-teal transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="line-clamp-1" style={{ color: "#E2E8F0" }}>{post.title}</span>
            </nav>

            {/* Category badge */}
            <span
              className="inline-block bg-healing-teal text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{ color: "#FFFFFF" }}
            >
              {post.category}
            </span>

            {/* Title */}
            <h1
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl leading-tight"
              style={{ color: "#FFFFFF" }}
            >
              {post.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-sm" style={{ color: "#CBD5E1" }}>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>{formattedDate}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
            </div>
          </Container>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <Container>
          <article
            className="max-w-3xl mx-auto prose-article"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Back to Blog */}
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-healing-teal font-medium hover:text-deep-teal transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
