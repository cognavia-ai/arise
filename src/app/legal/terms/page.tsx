import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { CLINIC_INFO } from "@/lib/constants";
import { canonicalFor } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Terms & Conditions | Arise Medical Centre",
  description:
    "Terms and conditions for using the Arise Medical Centre website. Read about our policies on appointments, intellectual property, and liability.",
  alternates: { canonical: canonicalFor("/legal/terms") },
};

export default function TermsPage() {
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
            <span className="text-white font-medium">Terms & Conditions</span>
          </nav>

          <h1 className="font-serif text-h1 text-white leading-tight">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl leading-relaxed">
            Please review the terms governing your use of our website.
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-4xl">
          <div className="prose prose-lg prose-slate max-w-none space-y-10">
            {/* Acceptance of Terms */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                By accessing and using the {CLINIC_INFO.name} website, you
                acknowledge that you have read, understood, and agree to be
                bound by these Terms & Conditions. If you do not agree with any
                part of these terms, please refrain from using this website.
              </p>
            </div>

            {/* Use of Website */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                2. Use of Website
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                This website is intended to provide general information about{" "}
                {CLINIC_INFO.name}, its services, medical team, and healthcare
                offerings. The content is provided for informational purposes
                only and should not be construed as medical advice. You agree to
                use this website only for lawful purposes and in a manner that
                does not infringe upon the rights of others.
              </p>
            </div>

            {/* Appointment Booking */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                3. Appointment Booking
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                The appointment booking feature on this website allows you to
                submit a request for an appointment. Please note:
              </p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    Submitting a booking request does not guarantee a confirmed
                    appointment
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    All appointments are subject to availability and
                    confirmation by our team
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    We reserve the right to reschedule or cancel appointments
                    due to unforeseen circumstances
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    You will receive a confirmation via phone or email once your
                    appointment is confirmed
                  </span>
                </li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                All content on this website, including but not limited to text,
                graphics, logos, images, design elements, and software, is the
                property of {CLINIC_INFO.name} or its content providers and is
                protected by Indian and international copyright, trademark, and
                other intellectual property laws. You may not reproduce,
                distribute, modify, or create derivative works from any content
                on this website without prior written consent.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                5. Limitation of Liability
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                To the fullest extent permitted by law, {CLINIC_INFO.name} and
                its directors, employees, and affiliates shall not be liable for
                any direct, indirect, incidental, special, consequential, or
                punitive damages arising from:
              </p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>Your use of, or inability to use, this website</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    Any errors, omissions, or inaccuracies in the content
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    Unauthorised access to or alteration of your data
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    Any reliance placed on the information provided on this
                    website
                  </span>
                </li>
              </ul>
            </div>

            {/* Medical Services */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                6. Medical Services
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                All medical services provided by {CLINIC_INFO.name} are subject
                to an in-person consultation with our qualified healthcare
                professionals. Information about our services, treatments, and
                specialisations on this website is for general awareness only.
                Actual diagnosis, treatment plans, and medical advice will be
                provided only after a thorough clinical examination at our
                facility. Treatment outcomes may vary based on individual patient
                conditions.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                7. Governing Law & Jurisdiction
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                These Terms & Conditions are governed by and construed in
                accordance with the laws of India. Any disputes arising out of
                or relating to the use of this website shall be subject to the
                exclusive jurisdiction of the courts in Thrissur, Kerala, India.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                8. Contact
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                If you have any questions or concerns about these Terms &
                Conditions, please contact us:
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
