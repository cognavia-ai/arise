"use client";

import { Activity } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function DiabeticCare() {
  return (
    <ServiceCard
      title="Diabetic Care & Reversal Program"
      description={
        <>
          <p>
            Diabetes doesn&apos;t have to be a life sentence. Our patients have
            reduced their HbA1c from 9.2 to 6.5 in under three months — with
            less medication, not more. We focus on what actually works:
            personalised diet plans, structured exercise, and continuous
            monitoring that puts you in control.
          </p>
          <p>
            Dr. Premlal&apos;s CCEBDM certification (Public Health Foundation of
            India &amp; Dr. Mohan&apos;s Diabetes Education Academy) means your
            treatment is grounded in the latest clinical evidence — not
            guesswork. Every plan is built around your body, your lifestyle, and
            your goals.
          </p>
        </>
      }
      features={[
        "Proven HbA1c reduction — real results in 3 months",
        "Personalised diet & exercise plans that fit your life",
        "Continuous blood sugar monitoring & tracking",
        "Medication reduction — less pills, more lifestyle",
        "Ongoing support with regular counselling sessions",
      ]}
      icon={Activity}
      reversed={false}
      imageSrc="/v1/images/services/diabetes-care.jpg"
    />
  );
}
