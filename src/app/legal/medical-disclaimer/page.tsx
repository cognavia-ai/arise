import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { CLINIC_INFO } from "@/lib/constants";
import { canonicalFor } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Medical Disclaimer | Arise Medical Centre",
  description:
    "Medical disclaimer for Arise Medical Centre website. Information provided is for general awareness and is not a substitute for professional medical advice.",
  alternates: { canonical: canonicalFor("/legal/medical-disclaimer") },
};

export default function MedicalDisclaimerPage() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28"
        style={{
          background:
            "linear-gradient(135deg, #1E293B 0%, #0F766E 50%, #0D9488 100%)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-healing-teal/10 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1 text-sm text-white/60 mb-6"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Medical Disclaimer</span>
          </nav>

          <h1 className="font-serif text-h1 text-white leading-tight">
            Medical Disclaimer
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl leading-relaxed">
            Please read this disclaimer carefully before using our website.
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-4xl">
          <div className="prose prose-lg prose-slate max-w-none space-y-10">
            {/* Informational Purposes Only */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                Informational Purposes Only
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                The content provided on the {CLINIC_INFO.name} website,
                including text, graphics, images, and other materials, is for
                general informational and educational purposes only. It is not
                intended to be a substitute for professional medical advice,
                diagnosis, or treatment. Always seek the advice of a qualified
                healthcare provider with any questions you may have regarding a
                medical condition or treatment.
              </p>
            </div>

            {/* Not a Substitute for Professional Medical Advice */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                Not a Substitute for Professional Medical Advice
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                The information on this website should not be used as a
                substitute for the medical care and advice of your physician or
                other healthcare professional. Never disregard professional
                medical advice or delay seeking it because of something you have
                read on this website. If you think you may have a medical
                emergency, call your doctor or emergency services immediately.
              </p>
            </div>

            {/* No Doctor-Patient Relationship */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                No Doctor-Patient Relationship
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                Use of this website, including submitting an appointment request
                or contacting us through any form, does not create a
                doctor-patient relationship between you and{" "}
                {CLINIC_INFO.name} or any of its physicians. A doctor-patient
                relationship is only established after an in-person consultation
                at our clinic.
              </p>
            </div>

            {/* Emergency Situations */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                Emergency Situations
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                This website is not designed to address medical emergencies. If
                you are experiencing a medical emergency, please:
              </p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    Call <strong>112</strong> (India Emergency Number)
                    immediately
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    Visit the nearest hospital emergency department
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    Do not rely on this website for emergency medical guidance
                  </span>
                </li>
              </ul>
            </div>

            {/* Individual Results May Vary */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                Individual Results May Vary
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                Any health information, testimonials, or case studies presented
                on this website are based on individual experiences and do not
                guarantee similar results for every patient. Treatment outcomes
                depend on various factors including, but not limited to, the
                patient&apos;s medical history, current health condition,
                adherence to the treatment plan, and individual biological
                response.
              </p>
            </div>

            {/* External Links */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                External Links Disclaimer
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                This website may contain links to external websites that are not
                operated or controlled by {CLINIC_INFO.name}. We do not endorse,
                guarantee, or assume responsibility for the accuracy, relevance,
                or completeness of any information on external websites. Visiting
                external links is at your own risk.
              </p>
            </div>

            {/* IT Act 2000 Compliance */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                IT Act 2000 Compliance
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                This website is operated in compliance with the Information
                Technology Act, 2000 (India) and its subsequent amendments. We
                take reasonable measures to ensure the security and integrity of
                the information presented on this platform.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                Contact Us
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                If you have any questions about this medical disclaimer, please
                contact us:
              </p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="text-healing-teal hover:underline"
                  >
                    {CLINIC_INFO.email}
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a
                    href={`tel:${CLINIC_INFO.phone.replace(/\s/g, "")}`}
                    className="text-healing-teal hover:underline"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </li>
                <li>
                  <strong>Address:</strong> {CLINIC_INFO.address}
                </li>
              </ul>
            </div>

            {/* Last Updated */}
            <div className="pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-400">
                Last updated: 27 March 2026
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
