"use client";

import { HeartPulse } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function WoundCare() {
  return (
    <ServiceCard
      title="Diabetic Wound Care Without Amputation"
      description={
        <>
          <p>
            If you or a loved one has been told that amputation is the only
            option, please get a second opinion first. Our CMC-accredited
            (Christian Medical College) diabetic foot care program has helped
            patients heal wounds that were considered untreatable — saving limbs
            and restoring the ability to walk, work, and live independently.
          </p>
          <p>
            Using advanced wound management techniques, customised diabetic
            footwear, and a step-by-step healing protocol, we treat the wound
            and the underlying condition together. Every patient&apos;s recovery
            plan is closely monitored until full healing.
          </p>
        </>
      }
      features={[
        "CMC-accredited foot care — gold-standard protocols",
        "Non-surgical wound healing for diabetic ulcers",
        "Custom diabetic footwear to prevent recurrence",
        "Weekly wound assessment with photographic tracking",
        "Amputation prevention — saving limbs is our priority",
      ]}
      icon={HeartPulse}
      reversed={true}
      imageSrc="/v1/images/services/wound-care.jpg"
    />
  );
}
