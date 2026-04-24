"use client";

import { Video } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function TeleConsultation() {
  return (
    <ServiceCard
      title="Video / Tele Consultation"
      description={
        <>
          <p>
            Distance shouldn&apos;t come between you and quality care. Whether
            you&apos;re managing diabetes from another city, need a follow-up
            after wound care, or want expert guidance without the commute — our
            video consultations bring Dr. Premlal&apos;s expertise directly to
            your screen.
          </p>
          <p>
            Ideal for NRI patients, elderly family members, or anyone in Kerala
            and beyond who wants access to evidence-based diabetic care from a
            trusted specialist.
          </p>
        </>
      }
      features={[
        "Face-to-face video consults with Dr. Premlal",
        "Convenient follow-ups without clinic visits",
        "Medication review & dosage adjustments",
        "Available across India — especially for NRI patients",
        "Simple booking via WhatsApp or phone",
      ]}
      icon={Video}
      reversed={false}
      imageSrc="/v1/images/services/teleconsult.jpg"
    />
  );
}
