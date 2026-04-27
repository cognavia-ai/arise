"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import ScrollReveal from "@/components/animation/ScrollReveal";
import CounterAnimation from "@/components/animation/CounterAnimation";
import { DOCTOR_INFO } from "@/lib/constants";

const keyQualifications = ["MBBS", "MD", "CCEBDM", "PGDFM", "CMC-accredited"];

export default function DoctorBrief() {
  return (
    <section className="section-padding bg-cloud">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Doctor Image */}
          <ScrollReveal animation="slideLeft">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl relative">
                <Image
                  src="/v1/images/doctor/dr-premlal.jpg"
                  alt={DOCTOR_INFO.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 448px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                <span className="absolute bottom-6 left-0 right-0 text-center text-white/90 font-serif text-2xl">
                  {DOCTOR_INFO.name}
                </span>
              </div>

              {/* Decorative accent */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-healing-teal/10" />
            </div>
          </ScrollReveal>

          {/* Right - Text content */}
          <div className="flex flex-col gap-5">
            <ScrollReveal animation="fadeUp">
              <p className="text-healing-teal font-semibold text-sm uppercase tracking-wide">
                Meet Our Doctor
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.1}>
              <h2 className="font-serif text-charcoal leading-tight text-2xl sm:text-3xl lg:text-4xl" style={{ color: "#1E293B" }}>
                {DOCTOR_INFO.name}
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.2}>
              <div className="flex flex-wrap gap-2">
                {keyQualifications.map((qual) => (
                  <Badge key={qual}>{qual}</Badge>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.3}>
              <div className="flex items-baseline gap-2">
                <CounterAnimation
                  target={17}
                  className="text-4xl font-bold text-healing-teal font-display"
                />
                <span className="text-xl text-charcoal font-semibold" style={{ color: "#1E293B" }}>
                  + years of experience
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.4}>
              <p className="text-slate leading-relaxed" style={{ color: "#64748B" }}>
                For over 17 years, Dr. Premlal has helped thousands of patients
                reverse diabetes, heal chronic wounds, and avoid amputations.
                His approach is simple but powerful — listen carefully, treat the
                whole person, and use evidence-based protocols that deliver
                measurable results. Patients don&apos;t just feel better; their
                lab reports prove it.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.5}>
              <p className="text-slate leading-relaxed" style={{ color: "#64748B" }}>
                {DOCTOR_INFO.academicPosition}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.6}>
              <div className="flex items-center gap-2 text-sm text-slate" style={{ color: "#64748B" }}>
                <Globe size={16} className="text-healing-teal" />
                <span className="font-medium">Languages:</span>
                {DOCTOR_INFO.languages.join(", ")}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.7}>
              <Link href="/about">
                <Button variant="primary" size="md">
                  View Full Profile
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
