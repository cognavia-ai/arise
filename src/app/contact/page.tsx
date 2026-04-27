import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CLINIC_INFO } from "@/lib/constants";
import AppointmentForm from "@/components/contact/AppointmentForm";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ClinicMap from "@/components/contact/ClinicMap";
import { canonicalFor } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/seo/structuredData";
import JsonLd from "@/components/seo/JsonLd";

const contactUrl = canonicalFor("/contact");

export const metadata: Metadata = {
  title: "Contact Us | Arise Medical Centre",
  description:
    "Book an appointment at Arise Medical Centre, Thrissur. Call +91 85920 20242 or fill our online form. Mon-Sat 7AM-7PM.",
  keywords: [
    "contact arise medical centre",
    "book appointment Dr Premlal",
    "Thrissur clinic contact",
    "Villadom clinic phone",
    "WhatsApp doctor Thrissur",
  ],
  alternates: { canonical: contactUrl },
  openGraph: {
    title: "Contact Us | Arise Medical Centre",
    description:
      "Book an appointment with Dr. K S Premlal at Arise Medical Centre, Villadom, Thrissur. Walk-ins welcome.",
    type: "website",
    locale: "en_IN",
    siteName: "Arise Medical Centre",
    url: contactUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Arise Medical Centre",
    description:
      "Book an appointment with Dr. K S Premlal. Call +91 85920 20242 or visit Villadom, Thrissur.",
  },
};

const contactBreadcrumbs = breadcrumbSchema([
  { name: "Home", url: canonicalFor("/") },
  { name: "Contact", url: contactUrl },
]);

export default function ContactPage() {
  return (
    <>
      <JsonLd id="ld-contact-breadcrumb" data={contactBreadcrumbs} />
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
              <span className="font-medium" style={{ color: "#FFFFFF" }}>Contact</span>
            </nav>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6" style={{ color: "#FFFFFF" }}>
              Contact Us
            </h1>

            <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
              Book an appointment or reach out to us with any questions. We are
              here to help you on your journey to better health.
            </p>
          </div>
        </Container>
      </section>

      {/* Form + Info Cards */}
      <section className="py-16 md:py-24 bg-cloud">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <AppointmentForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfoCards />
            </div>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="py-12 md:py-16">
        <Container>
          <ClinicMap />
          <div className="mt-6 flex items-start gap-2 text-slate justify-center">
            <MapPin className="w-5 h-5 text-healing-teal flex-shrink-0 mt-0.5" />
            <p className="text-sm">{CLINIC_INFO.address}</p>
          </div>
        </Container>
      </section>
    </>
  );
}
