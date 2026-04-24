"use client";

import { Brain } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function Counselling() {
  return (
    <ServiceCard
      title="Counselling & Psychotherapy"
      description={
        <>
          <p>
            A diabetes diagnosis affects more than blood sugar — it changes how
            you feel, sleep, and cope with daily life. With an MSc in
            Counselling and Psychotherapy, Dr. Premlal uniquely understands the
            emotional weight of living with chronic illness and provides support
            that treats the mind alongside the body.
          </p>
          <p>
            We also offer specialised care for adolescents navigating emotional
            challenges, and for families dealing with the stress that chronic
            conditions bring into the home.
          </p>
        </>
      }
      features={[
        "MSc-qualified counselling built into your care plan",
        "Emotional support for diabetes and chronic illness",
        "Adolescent mental health & emotional wellbeing",
        "Stress, anxiety, and coping strategy sessions",
        "Family counselling for caregiver burnout",
      ]}
      icon={Brain}
      reversed={true}
      imageSrc="/v1/images/services/counselling.jpg"
    />
  );
}
