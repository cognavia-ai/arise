"use client";

import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/types/blog";

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

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const imageSrc = blogImages[post.slug];

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full grid grid-rows-[auto_1fr]">
        {/* Image area — fixed aspect ratio */}
        <div className="relative overflow-hidden aspect-[16/10]">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-healing-teal/20 to-deep-teal/40 group-hover:scale-105 transition-transform duration-500" />
          )}
          <span
            className="absolute top-3 left-3 bg-healing-teal text-xs font-semibold px-3 py-1 rounded-full z-10"
            style={{ color: "#FFFFFF" }}
          >
            {post.category}
          </span>
        </div>

        {/* Content — grid rows for consistent alignment */}
        <div className="p-5 grid grid-rows-[auto_auto_1fr_auto] gap-2">
          {/* Title — clamped to 2 lines */}
          <h3
            className="font-serif text-lg font-bold group-hover:text-healing-teal transition-colors duration-300 line-clamp-2"
            style={{ color: "#1E293B" }}
          >
            {post.title}
          </h3>

          {/* Excerpt — clamped to 2 lines */}
          <p
            className="text-sm line-clamp-2"
            style={{ color: "#64748B" }}
          >
            {post.excerpt}
          </p>

          {/* Spacer */}
          <div />

          {/* Footer — always at bottom */}
          <div
            className="flex items-center justify-between text-xs border-t border-gray-100 pt-3"
            style={{ color: "#64748B" }}
          >
            <time dateTime={post.date}>{formattedDate}</time>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
