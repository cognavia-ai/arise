"use client";

import Link from "next/link";
import {
  Activity,
  Heart,
  Shield,
  Search,
  HandHeart,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, typeof Activity> = {
  "diabetic-care-reversal": Activity,
  "wound-care": Heart,
  "preventive-health": Shield,
  "cancer-screening": Search,
  "pain-palliative-care": HandHeart,
};

const previewServices = SERVICES.slice(0, 5);

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <ScrollReveal animation="fadeUp">
          <SectionHeading
            title="Our Services"
            subtitle="From diabetes reversal to cancer screening — specialised care, practising since 2009"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {/* Large featured card - Wound Care */}
          <ScrollReveal
            animation="fadeUp"
            delay={0}
            className="md:col-span-2 lg:col-span-1 lg:row-span-2"
          >
            <Link
              href={`/services#${previewServices[1].slug}`}
              className="block h-full"
            >
              <Card className="p-8 lg:p-10 h-full group relative overflow-hidden border border-transparent hover:border-healing-teal/20 transition-all duration-300">
                <div className="absolute top-0 right-0 w-40 h-40 bg-healing-teal/5 rounded-full -translate-x-10 -translate-y-10" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
                    <Heart size={32} />
                  </div>

                  <h3 className="font-serif text-2xl text-charcoal mb-4 leading-tight" style={{ color: "#1E293B" }}>
                    {previewServices[1].title}
                  </h3>

                  <p className="text-slate leading-relaxed mb-8 flex-1" style={{ color: "#64748B" }}>
                    {previewServices[1].shortDescription}
                  </p>

                  <span className="inline-flex items-center gap-1 text-healing-teal font-semibold text-sm group-hover:gap-2 transition-all duration-200">
                    Learn More
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Card>
            </Link>
          </ScrollReveal>

          {/* Smaller cards */}
          {[previewServices[0], previewServices[2], previewServices[3], previewServices[4]].map(
            (service, index) => {
              const Icon = iconMap[service.id] ?? Activity;
              const colors = [
                "bg-teal-50 text-healing-teal",
                "bg-blue-50 text-blue-600",
                "bg-purple-50 text-purple-600",
                "bg-amber-50 text-warm-gold",
              ];

              return (
                <ScrollReveal
                  key={service.id}
                  animation="fadeUp"
                  delay={(index + 1) * 0.1}
                >
                  <Link
                    href={`/services#${service.slug}`}
                    className="block h-full"
                  >
                    <Card className="p-6 h-full group border border-transparent hover:border-healing-teal/20 transition-all duration-300">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colors[index]}`}
                      >
                        <Icon size={24} />
                      </div>

                      <h4 className="font-semibold text-charcoal mb-2 text-lg" style={{ color: "#1E293B" }}>
                        {service.title}
                      </h4>

                      <p className="text-slate text-sm leading-relaxed mb-4" style={{ color: "#64748B" }}>
                        {service.shortDescription}
                      </p>

                      <span className="inline-flex items-center gap-1 text-healing-teal font-semibold text-sm group-hover:gap-2 transition-all duration-200">
                        Learn More
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </span>
                    </Card>
                  </Link>
                </ScrollReveal>
              );
            }
          )}
        </div>

        {/* View all link */}
        <ScrollReveal animation="fadeUp" delay={0.5}>
          <div className="flex justify-center mt-12">
            <Link href="/services">
              <Button variant="secondary" size="lg">
                View All Services
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
