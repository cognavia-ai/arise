"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { DOCTOR_INFO } from "@/lib/constants";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { GraduationCap, Languages, Award, Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function DoctorProfile() {
  const qualificationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = qualificationsRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const rows = el.querySelectorAll(".qual-row");
    if (rows.length === 0) return;

    if (prefersReducedMotion) {
      gsap.set(rows, { opacity: 1, x: 0 });
      return;
    }

    gsap.set(rows, { opacity: 0, x: -30 });

    const tween = gsap.to(rows, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Doctor Image */}
          <ScrollReveal animation="slideLeft">
            <div className="relative">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden relative">
                <Image
                  src="/v1/images/doctor/dr-premlal.jpg"
                  alt={DOCTOR_INFO.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Decorative organic shape */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-soft-teal/30 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-healing-teal/20 rounded-full blur-3xl" />

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/80 to-transparent">
                  <h3 className="text-white font-serif text-2xl" style={{ color: "#FFFFFF" }}>
                    {DOCTOR_INFO.name}
                  </h3>
                  <p className="text-white/70 text-sm mt-1" style={{ color: "#CBD5E1" }}>
                    {DOCTOR_INFO.academicPosition}
                  </p>
                </div>
              </div>

              {/* Floating experience badge */}
              <div className="absolute -bottom-4 -right-4 lg:-right-8 glass rounded-xl px-5 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-healing-teal" />
                  <div>
                    <div className="text-2xl font-bold text-charcoal" style={{ color: "#1E293B" }}>
                      Since 2009
                    </div>
                    <p className="text-xs text-slate" style={{ color: "#64748B" }}>In practice</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Doctor Details */}
          <div className="flex flex-col gap-8">
            <ScrollReveal animation="fadeUp">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal leading-tight" style={{ color: "#1E293B" }}>
                  {DOCTOR_INFO.name}
                </h2>
                <div className="flex items-center gap-2 mt-3 text-slate" style={{ color: "#64748B" }}>
                  <Award className="w-4 h-4 text-warm-gold" />
                  <span className="text-sm font-medium">
                    {DOCTOR_INFO.registration.number} |{" "}
                    {DOCTOR_INFO.registration.council}
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Qualifications */}
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-healing-teal" />
                  <h4 className="text-lg font-semibold text-charcoal" style={{ color: "#1E293B" }}>
                    Qualifications
                  </h4>
                </div>
                <div
                  ref={qualificationsRef}
                  className="space-y-3"
                >
                  {DOCTOR_INFO.qualifications.map((qual, index) => (
                    <div
                      key={index}
                      className="qual-row flex items-start gap-3 p-3 rounded-lg bg-cloud hover:bg-soft-teal/30 transition-colors duration-300"
                      style={{ opacity: 1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-healing-teal mt-2 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-charcoal" style={{ color: "#1E293B" }}>
                          {qual.degree}
                        </p>
                        {qual.institution && (
                          <p className="text-xs text-slate mt-0.5" style={{ color: "#64748B" }}>
                            {qual.institution}
                          </p>
                        )}
                        {qual.year && (
                          <span className="inline-block text-xs text-healing-teal font-medium mt-1">
                            {qual.year}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Specializations */}
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <div>
                <h4 className="text-lg font-semibold text-charcoal mb-3" style={{ color: "#1E293B" }}>
                  Specializations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {DOCTOR_INFO.specializations.map((spec, index) => (
                    <Badge key={index} variant="default" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                  <Badge variant="success" className="text-xs">
                    16+ Research Publications
                  </Badge>
                </div>
              </div>
            </ScrollReveal>

            {/* Languages */}
            <ScrollReveal animation="fadeUp" delay={0.3}>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Languages className="w-5 h-5 text-healing-teal" />
                  <h4 className="text-lg font-semibold text-charcoal" style={{ color: "#1E293B" }}>
                    Languages
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {DOCTOR_INFO.languages.map((lang) => (
                    <span
                      key={lang}
                      className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-charcoal/5 text-charcoal border border-charcoal/10 hover:border-healing-teal/40 hover:bg-soft-teal/20 transition-all duration-300" style={{ color: "#1E293B" }}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
