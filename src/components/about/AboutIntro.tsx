"use client";

import { Container } from "@/components/ui/Container";
import ScrollReveal from "@/components/animation/ScrollReveal";

export default function AboutIntro() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal animation="fadeUp">
            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight"
              style={{ color: "#1E293B" }}
            >
              A holistic approach to diabetes care
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={0.15}>
            <p
              className="mt-8 text-base md:text-lg leading-relaxed"
              style={{ color: "#475569" }}
            >
              Arise Diabetic &amp; Foot Care, formerly known as Sukrithi Family
              Health Center, is a diabetic and lifestyle disease clinic based
              in Thrissur, Kerala. Arise is headed by Dr. Premlal — a diabetes
              and diabetic foot care expert and former professor at Malabar
              Medical College &amp; Hospital — supported by a team of expert
              doctors and healthcare professionals.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={0.3}>
            <p
              className="mt-5 text-base md:text-lg leading-relaxed"
              style={{ color: "#475569" }}
            >
              The treatment protocol at Arise is a different and comprehensive
              one — consisting of diabetic reversal (remission) and treatment
              for related complications, with a special focus on diabetic
              wound care. Our evident-based diabetic reversal and advanced
              wound care protocol is trusted and benefited by thousands of
              patients since 2009.
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
