import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import AcademicOverview from "@/components/academics/AcademicOverview";
import ResearchPapers from "@/components/academics/ResearchPapers";
import CoursesCatalog from "@/components/academics/CoursesCatalog";
import EnrollmentCTA from "@/components/academics/EnrollmentCTA";
import { canonicalFor } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/seo/structuredData";
import JsonLd from "@/components/seo/JsonLd";

const academicsUrl = canonicalFor("/academics");

export const metadata: Metadata = {
  title: "Academics | Arise Medical Centre",
  description:
    "Explore academic programmes, research contributions, and training courses by Dr. K S Premlal — Associate Professor at Malabar Medical College with 22+ research citations.",
  keywords: [
    "Dr Premlal research",
    "diabetes research India",
    "medical education Kerala",
    "academic medical centre Thrissur",
    "PGDFM training Kerala",
  ],
  alternates: { canonical: academicsUrl },
  openGraph: {
    title: "Academics | Arise Medical Centre",
    description:
      "Academic programmes and training courses in diabetic care, palliative medicine, and cancer screening by Dr. K S Premlal.",
    type: "website",
    locale: "en_IN",
    siteName: "Arise Medical Centre",
    url: academicsUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Academics | Arise Medical Centre",
    description:
      "Academic programmes and training courses by Dr. K S Premlal.",
  },
};

const academicsBreadcrumbs = breadcrumbSchema([
  { name: "Home", url: canonicalFor("/") },
  { name: "Academics", url: academicsUrl },
]);

export default function AcademicsPage() {
  return (
    <>
      <JsonLd id="ld-academics-breadcrumb" data={academicsBreadcrumbs} />
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
              <span className="font-medium" style={{ color: "#FFFFFF" }}>Academics</span>
            </nav>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6" style={{ color: "#FFFFFF" }}>
              Academics
            </h1>

            <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
              Training the next generation of healthcare professionals through
              research-driven education and clinical excellence.
            </p>
          </div>
        </Container>
      </section>

      <AcademicOverview />
      <ResearchPapers />
      <CoursesCatalog />
      <EnrollmentCTA />
    </>
  );
}
