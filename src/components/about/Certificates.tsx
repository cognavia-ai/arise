"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren from "@/components/animation/StaggerChildren";

const CERTIFICATES = [
  {
    title: "MBBS Degree",
    issuer: "Pondicherry University",
    year: "2008",
    image: "/v1/images/certificates/mbbs-degree.jpg",
  },
  {
    title: "MD (Community Medicine) — First Class",
    issuer: "Meenakshi Academy of Higher Education, Chennai",
    year: "2014",
    image: "/v1/images/certificates/md-certificate.jpg",
  },
  {
    title: "CCEBDM — Evidence Based Diabetes Management",
    issuer: "PHFI & Dr. Mohan's Diabetes Education Academy",
    year: "2022",
    image: "/v1/images/certificates/ccebdm.jpg",
  },
  {
    title: "Kerala State Medical Registration",
    issuer: "Council of Modern Medicine, Kerala",
    year: "2023",
    image: "/v1/images/certificates/kerala-registration.jpg",
  },
  {
    title: "ICMR Cancer Screening Workshop",
    issuer: "ICMR-NICPR & National Health Mission",
    year: "2022",
    image: "/v1/images/certificates/icmr-cancer-screening.jpg",
  },
  {
    title: "NICPR Cancer Screening Training",
    issuer: "ICMR-National Institute of Cancer Prevention & Research",
    year: "2021–2022",
    image: "/v1/images/certificates/nicpr-cancer-training.jpg",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATES[number] | null>(null);

  return (
    <section className="py-16 md:py-24 bg-cloud">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Certifications & Credentials"
          />
        </ScrollReveal>

        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          staggerDelay={0.12}
        >
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.title}
              className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300 flex items-center justify-center">
                  <span
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 rounded-full bg-white/90 text-sm font-medium"
                    style={{ color: "#0F766E" }}
                  >
                    View Certificate
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3
                  className="font-semibold text-sm leading-snug mb-1"
                  style={{ color: "#1E293B" }}
                >
                  {cert.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>
                  {cert.issuer}
                </p>
                <span className="inline-block mt-2 text-xs font-medium text-healing-teal">
                  {cert.year}
                </span>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </Container>

      {/* Full-screen modal overlay */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.80)" }}
          onClick={() => setSelectedCert(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            onClick={() => setSelectedCert(null)}
            aria-label="Close certificate view"
          >
            <X className="w-6 h-6" style={{ color: "#FFFFFF" }} />
          </button>

          {/* Certificate image */}
          <div
            className="relative w-full max-w-4xl max-h-[85vh] aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedCert.image}
              alt={selectedCert.title}
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 1024px) 95vw, 900px"
            />
          </div>

          {/* Caption */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-semibold text-sm" style={{ color: "#FFFFFF" }}>
              {selectedCert.title}
            </p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.7)" }}>
              {selectedCert.issuer} &middot; {selectedCert.year}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
