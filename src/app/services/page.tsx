import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import ServiceHero from "@/components/services/ServiceHero";
import DiabeticCare from "@/components/services/DiabeticCare";
import WoundCare from "@/components/services/WoundCare";
import PreventiveHealth from "@/components/services/PreventiveHealth";
import CancerScreening from "@/components/services/CancerScreening";
import PalliativeCare from "@/components/services/PalliativeCare";
import Counselling from "@/components/services/Counselling";
import TeleConsultation from "@/components/services/TeleConsultation";
import { canonicalFor } from "@/lib/metadata";
import {
  breadcrumbSchema,
  servicesItemListSchema,
} from "@/lib/seo/structuredData";
import JsonLd from "@/components/seo/JsonLd";

const url = canonicalFor("/services");

export const metadata: Metadata = {
  title: "Services — Diabetes Reversal, Wound Care & More | Arise Medical Centre",
  description:
    "Diabetes reversal with proven HbA1c results. CMC-accredited wound care without amputation. ICMR-certified cancer screening. WHO-certified palliative care. All under one roof in Thrissur, Kerala.",
  keywords: [
    "diabetes reversal program Thrissur",
    "diabetic wound care Kerala",
    "diabetic foot care without amputation",
    "cancer screening Thrissur",
    "palliative care Kerala",
    "preventive health checkup Thrissur",
    "tele consultation doctor Kerala",
    "best diabetologist Thrissur",
    "HbA1c reduction program India",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Services — Diabetes Reversal, Wound Care & More | Arise Medical Centre",
    description:
      "Proven diabetes reversal. Limb-saving wound care. ICMR-certified cancer screening. 7 specialised services by Dr. K S Premlal in Thrissur.",
    type: "website",
    url,
    locale: "en_IN",
    siteName: "Arise Medical Centre",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Diabetes Reversal, Wound Care & More | Arise Medical Centre",
    description:
      "Proven diabetes reversal. Limb-saving wound care. ICMR-certified cancer screening. 7 specialised services by Dr. K S Premlal in Thrissur.",
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: canonicalFor("/") },
  { name: "Services", url },
]);

export default function ServicesPage() {
  return (
    <main>
      <JsonLd id="ld-services-list" data={servicesItemListSchema()} />
      <JsonLd id="ld-services-breadcrumb" data={breadcrumbs} />
      {/* Hero */}
      <ServiceHero />

      {/* Service Sections - alternating white/cloud backgrounds */}
      <div className="bg-white">
        <DiabeticCare />
      </div>

      <div className="bg-cloud">
        <WoundCare />
      </div>

      <div className="bg-white">
        <PreventiveHealth />
      </div>

      <div className="bg-cloud">
        <CancerScreening />
      </div>

      <div className="bg-white">
        <PalliativeCare />
      </div>

      <div className="bg-cloud">
        <Counselling />
      </div>

      <div className="bg-white">
        <TeleConsultation />
      </div>

      {/* CTA Banner */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0D9488 0%, #0891B2 100%)",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3" />

        <Container className="relative z-10 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6">
            <h2
              className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight"
              style={{ color: "#FFFFFF" }}
            >
              Don&apos;t Wait for Symptoms to Worsen
            </h2>
            <p
              className="text-lg md:text-xl max-w-2xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              Whether it&apos;s uncontrolled blood sugar, a wound that won&apos;t
              heal, or a health concern you&apos;ve been putting off — the sooner
              you act, the better the outcome. Talk to Dr. Premlal today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white font-semibold text-lg transition-all duration-200 hover:bg-white/90 hover:shadow-lg active:scale-95"
                style={{ color: "#0D9488" }}
              >
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+918592020242"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-white font-semibold text-lg transition-all duration-200 hover:bg-white/10 active:scale-95"
                style={{ color: "#FFFFFF" }}
              >
                Call +91 85920 20242
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
