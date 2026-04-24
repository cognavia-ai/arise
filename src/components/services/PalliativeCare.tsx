"use client";

import { Hand } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function PalliativeCare() {
  return (
    <ServiceCard
      title="Pain & Palliative Care"
      description={
        <>
          <p>
            Living with chronic pain or serious illness is difficult enough
            without feeling alone in it. Our WHO-certified palliative care
            program (BCCPM) focuses on what matters most — reducing suffering,
            preserving dignity, and helping patients and families navigate each
            day with support and clarity.
          </p>
          <p>
            For patients who cannot travel, we bring care to your doorstep.
            Our dedicated home visits ensure that bedridden patients receive
            the same quality of medical attention, comfort, and compassion as
            those who visit the clinic.
          </p>
        </>
      }
      features={[
        "WHO-certified care meeting international standards",
        "Effective chronic pain management & relief plans",
        "Home visits for bedridden and immobile patients",
        "Compassionate end-of-life support with dignity",
        "Family counselling & caregiver training",
      ]}
      icon={Hand}
      reversed={false}
      imageSrc="/v1/images/services/palliative-care.jpg"
    />
  );
}
