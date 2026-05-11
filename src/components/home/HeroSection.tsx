"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import TextSplitReveal from "@/components/animation/TextSplitReveal";
import OrganicBlobs from "@/components/animation/OrganicBlobs";
import ScrollReveal from "@/components/animation/ScrollReveal";

export default function HeroSection() {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Bouncing scroll indicator
    const el = scrollIndicatorRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        el.style.opacity = "0";
      } else {
        el.style.opacity = "1";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-charcoal">
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #0D9488 0%, #065F46 30%, #1E293B 70%, #0F172A 100%)",
          backgroundSize: "400% 400%",
          animation: "gradient-shift 20s ease infinite",
        }}
      />

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 z-0 bg-charcoal/40" />

      <Container className="relative z-10 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center min-h-screen lg:min-h-0 lg:py-24">
          {/* Mobile: Image area first */}
          <div className="lg:hidden flex justify-center pt-24">
            <div className="relative w-64 h-64">
              <OrganicBlobs />
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/v1/images/doctor/dr-premlal.jpg"
                  alt="Dr. K S Premlal"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 256px, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <span className="absolute bottom-4 left-0 right-0 text-center text-white/90 font-serif text-lg">
                  Dr. K S Premlal
                </span>
              </div>
            </div>
          </div>

          {/* Left side - Text content (60% = 3 of 5 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-6 text-center lg:text-left">
            <ScrollReveal animation="fadeIn" delay={0}>
              <Badge className="inline-flex self-center lg:self-start">
                Thrissur&apos;s Trusted Diabetes &amp; Wound Care Centre
              </Badge>
            </ScrollReveal>

            <h1 className="font-serif text-white leading-tight tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl" style={{ color: "#FFFFFF" }}>
              <TextSplitReveal
                text="Saving Limbs, Transforming Lives"
                className="text-white [&_.split-word]:text-white"
                delay={0.3}
              />
            </h1>

            <ScrollReveal animation="fadeUp" delay={0.6}>
              <p className="text-gray-300 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ color: "#D1D5DB" }}>
                When doctors said amputation was the only option, our patients
                walked out on both feet. Evidence-based diabetes reversal and
                advanced wound care — trusted by 10,000+ patients since 2009.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="scaleUp" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <Button size="lg" variant="primary">
                    Book Appointment
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-charcoal transition-all duration-200" style={{ color: "#FFFFFF" }}
                  >
                    Our Services
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            {/* Trust indicators */}
            <ScrollReveal animation="fadeUp" delay={1.0}>
              <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-400" style={{ color: "#9CA3AF" }}>
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-semibold" style={{ color: "#FFFFFF" }}>4.9</span>
                  <Star size={14} className="text-warm-gold fill-warm-gold" />
                  <span>Google Rating</span>
                </div>
                <div className="w-px h-4 bg-gray-600" />
                <div>
                  <span className="text-white font-semibold" style={{ color: "#FFFFFF" }}>387+</span>{" "}
                  Reviews
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right side - Doctor photo area (40% = 2 of 5 cols) */}
          <div className="hidden lg:flex lg:col-span-2 justify-center items-center">
            <div className="relative w-full max-w-sm aspect-[3/4]">
              <OrganicBlobs />
              <ScrollReveal animation="slideRight" delay={0.5} className="relative z-10 h-full">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative">
                  <Image
                    src="/v1/images/doctor/dr-premlal.jpg"
                    alt="Dr. K S Premlal"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                  <span className="absolute bottom-6 left-0 right-0 text-center text-white/90 font-serif text-2xl">
                    Dr. K S Premlal
                  </span>
                </div>
              </ScrollReveal>

              {/* Floating glass badge */}
              <div className="absolute -bottom-4 -left-8 glass rounded-xl px-4 py-3 z-20 animate-fade-up">
                <div className="text-xs text-slate font-medium" style={{ color: "#64748B" }}>
                  Practising
                </div>
                <div className="text-lg font-bold text-charcoal" style={{ color: "#1E293B" }}>Since 2009</div>
              </div>

              <div className="absolute -top-4 -right-4 glass rounded-xl px-4 py-3 z-20 animate-fade-up">
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-warm-gold fill-warm-gold" />
                  <span className="text-lg font-bold text-charcoal" style={{ color: "#1E293B" }}>4.9</span>
                </div>
                <div className="text-xs text-slate font-medium" style={{ color: "#64748B" }}>Rating</div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-500"
      >
        <Link
          href="#pillars"
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors" style={{ color: "#CBD5E1" }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={24} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
