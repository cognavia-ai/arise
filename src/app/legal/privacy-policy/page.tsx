import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { CLINIC_INFO } from "@/lib/constants";
import { canonicalFor } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Privacy Policy | Arise Medical Centre",
  description:
    "Privacy policy for Arise Medical Centre. Learn how we collect, use, and protect your personal data in compliance with the DPDP Act 2023.",
  alternates: { canonical: canonicalFor("/legal/privacy-policy") },
};

export default function PrivacyPolicyPage() {
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
            <span className="text-white font-medium">Privacy Policy</span>
          </nav>

          <h1 className="font-serif text-h1 text-white leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl leading-relaxed">
            Your privacy matters to us. Learn how we handle your personal data.
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-4xl">
          <div className="prose prose-lg prose-slate max-w-none space-y-10">
            {/* Introduction */}
            <div>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                {CLINIC_INFO.name} (&quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;) is committed to protecting the privacy and
                security of your personal data. This Privacy Policy explains how
                we collect, use, store, and protect your information when you
                visit our website or use our services, in compliance with the{" "}
                <strong>
                  Digital Personal Data Protection Act, 2023 (DPDP Act)
                </strong>{" "}
                of India.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                1. Information We Collect
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                We collect personal information that you voluntarily provide
                when using our appointment booking form or contacting us. This
                includes:
              </p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    <strong>Full Name</strong> -- to identify and address you
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    <strong>Phone Number</strong> -- to confirm appointments and
                    communicate with you
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    <strong>Email Address</strong> -- to send appointment
                    confirmations and updates
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    <strong>Health Reason / Concern</strong> -- to help our
                    medical team prepare for your visit
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-body-lg text-slate-600 leading-relaxed">
                We do not collect sensitive personal data such as financial
                information, biometric data, or government-issued identification
                numbers through this website.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                The personal data we collect is used exclusively for the
                following purposes:
              </p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    <strong>Appointment Scheduling:</strong> To process, confirm,
                    and manage your appointment requests
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    <strong>Communication:</strong> To contact you regarding your
                    appointments, follow-ups, or respond to your enquiries
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    <strong>Healthcare Preparation:</strong> To help our medical
                    team understand your health concern before your visit
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-body-lg text-slate-600 leading-relaxed">
                We do not use your personal data for marketing, advertising, or
                any purpose unrelated to your healthcare.
              </p>
            </div>

            {/* Data Storage & Security */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                3. Data Storage & Security
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                We take the security of your personal data seriously and
                implement appropriate technical and organisational measures to
                protect it:
              </p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    All data transmitted through our website is encrypted using
                    industry-standard SSL/TLS protocols
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    Personal data is stored securely and access is restricted to
                    authorised personnel only
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    Your personal information is{" "}
                    <strong>not shared with, sold to, or rented to</strong> any
                    third parties for commercial purposes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    Data is retained only for as long as necessary to fulfil the
                    purposes outlined in this policy
                  </span>
                </li>
              </ul>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                4. Your Rights Under the DPDP Act 2023
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                Under the Digital Personal Data Protection Act, 2023, you have
                the following rights as a Data Principal:
              </p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    <strong>Right to Access:</strong> You may request information
                    about the personal data we hold about you
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    <strong>Right to Correction:</strong> You may request
                    correction of inaccurate or incomplete personal data
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    <strong>Right to Erasure:</strong> You may request deletion
                    of your personal data, subject to applicable legal
                    obligations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-healing-teal font-bold mt-1">--</span>
                  <span>
                    <strong>Right to Grievance Redressal:</strong> You may raise
                    concerns regarding the processing of your personal data
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-body-lg text-slate-600 leading-relaxed">
                To exercise any of these rights, please contact us using the
                details provided at the end of this policy.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                5. Cookies
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                Our website may use essential cookies to ensure proper
                functionality and improve your browsing experience. These
                cookies do not collect personal information and are not used for
                tracking or advertising purposes. By using our website, you
                consent to the use of essential cookies.
              </p>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                6. Third-Party Services
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                Our website embeds a Google Maps widget to help you locate our
                clinic. When you view this embedded map, Google may collect
                certain data in accordance with its own privacy policy. We
                recommend reviewing{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-healing-teal hover:underline"
                >
                  Google&apos;s Privacy Policy
                </a>{" "}
                for more information on how they handle your data.
              </p>
            </div>

            {/* Contact for Data Queries */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                7. Contact for Data Queries
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or how we handle your personal data, please
                contact us:
              </p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li>
                  <strong>Data Fiduciary:</strong> {CLINIC_INFO.name}
                </li>
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

            {/* Changes to This Policy */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                8. Changes to This Policy
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for legal, operational, or
                regulatory reasons. Any changes will be posted on this page with
                an updated &quot;Last updated&quot; date. We encourage you to
                review this policy periodically.
              </p>
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
