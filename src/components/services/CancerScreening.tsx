"use client";

import { Search } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function CancerScreening() {
  return (
    <ServiceCard
      title="Cancer Screening"
      description={
        <>
          <p>
            When cancer is caught early, survival rates improve dramatically.
            Our ICMR-certified screening program, built on protocols from the
            National Institute of Cancer Prevention and Research (NICPR), is
            designed to detect risks at the stage where treatment is most
            effective and least invasive.
          </p>
          <p>
            Dr. Premlal&apos;s specialised training in preventive oncology means
            every screening is thorough, evidence-based, and followed by clear
            guidance on next steps — so you never leave with unanswered
            questions.
          </p>
        </>
      }
      features={[
        "ICMR-certified protocols — nationally recognised standards",
        "Early-stage detection when treatment works best",
        "Personalised cancer risk evaluation & counselling",
        "Clear next-step guidance after every screening",
        "Seamless referral coordination for advanced diagnostics",
      ]}
      icon={Search}
      reversed={true}
      imageSrc="/v1/images/services/cancer-screening.jpg"
    />
  );
}
