import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Phone, MessageCircle } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { CLINIC_INFO } from "@/lib/constants";
import { canonicalFor } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/seo/structuredData";
import JsonLd from "@/components/seo/JsonLd";

import DoctorProfile from "@/components/about/DoctorProfile";
import CareerTimeline from "@/components/about/CareerTimeline";
import ClinicStory from "@/components/about/ClinicStory";
import TeamSection from "@/components/about/TeamSection";
import Infrastructure from "@/components/about/Infrastructure";
import Certificates from "@/components/about/Certificates";

const aboutUrl = canonicalFor("/about");

export const metadata: Metadata = {
  title: "About Dr. K S Premlal & Our Team | Arise Medical Centre",
  description:
    "Dr. K S Premlal — CCEBDM, CMC-accredited, WHO-certified — brings expertise in diabetes reversal and wound care, in practice since 2009. Meet the team behind 10,000+ successful patient outcomes in Thrissur, Kerala.",
  keywords: [
    "Dr K S Premlal",
    "Arise Medical Centre",
    "about arise",
    "diabetologist thrissur",
    "family doctor thrissur kerala",
    "diabetes specialist kerala",
    "TMC 85605",
    "best diabetologist thrissur",
  ],
  alternates: { canonical: aboutUrl },
  openGraph: {
    title: "About Dr. K S Premlal & Our Team | Arise Medical Centre",
    description:
      "Evidence-based diabetic care, diabetes reversal, and limb-saving wound care since 2009. Meet the team that 10,000+ patients trust in Thrissur, Kerala.",
    locale: "en_IN",
    type: "website",
    siteName: "Arise Medical Centre",
    url: aboutUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dr. K S Premlal & Our Team | Arise Medical Centre",
    description:
      "Evidence-based diabetic care, diabetes reversal, and limb-saving wound care since 2009.",
  },
};

const aboutBreadcrumbs = breadcrumbSchema([
  { name: "Home", url: canonicalFor("/") },
  { name: "About", url: aboutUrl },
]);

export default function AboutPage() {
  return (
    <>
      <JsonLd id="ld-about-breadcrumb" data={aboutBreadcrumbs} />
      {/* Hero Banner */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1E293B 0%, #0F766E 50%, #0D9488 100%)",
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
              <span className="font-medium" style={{ color: "#FFFFFF" }}>About</span>
            </nav>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6" style={{ color: "#FFFFFF" }}>
              About Us
            </h1>

            <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
              Helping patients reverse diabetes, save limbs, and reclaim
              their health since 2009 — one evidence-based treatment plan at a time.
            </p>
          </div>
        </Container>
      </section>

      <DoctorProfile />
      <CareerTimeline />
      <ClinicStory />
      <TeamSection />
      <Infrastructure />
      <Certificates />

      {/* CTA Section */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0D9488 0%, #0891B2 100%)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full border border-white/5 animate-[pulse_4s_ease-in-out_infinite]" />
          <div className="absolute w-72 h-72 rounded-full border border-white/10 animate-[pulse_4s_ease-in-out_infinite_0.5s]" />
          <div className="absolute w-48 h-48 rounded-full border border-white/15 animate-[pulse_4s_ease-in-out_infinite_1s]" />
        </div>

        <Container className="relative z-10 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight" style={{ color: "#FFFFFF" }}>
            Ready to Take Control of
            <br />Your Health?
          </h2>
          <p className="mt-4 text-lg max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
            Speak with Dr. Premlal about diabetes reversal, wound care, or any
            health concern. Walk-ins welcome, Mon&ndash;Sat.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-healing-teal font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book Appointment
            </Link>

            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/15 font-semibold text-base border border-white/30 hover:bg-white/25 transition-all duration-300"
              style={{ color: "#FFFFFF" }}
            >
              <Phone className="w-4 h-4" />
              {CLINIC_INFO.phone}
            </a>

            <a
              href={CLINIC_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-whatsapp font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ color: "#FFFFFF" }}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
