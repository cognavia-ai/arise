"use client";

import { Shield } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function PreventiveHealth() {
  return (
    <ServiceCard
      title="Preventive Health & Checkups"
      description={
        <>
          <p>
            Most serious conditions — diabetes, heart disease, cancer — give
            early warning signs that a routine checkup can catch. The difference
            between a simple lifestyle change and a major medical intervention
            often comes down to catching it early.
          </p>
          <p>
            Our preventive health programs are tailored by age, risk profile,
            and lifestyle. Whether you need an annual health screen, a
            pre-employment exam, or vaccinations for your family, we design a
            plan that keeps you one step ahead of disease.
          </p>
        </>
      }
      features={[
        "Thorough annual health screenings with detailed reports",
        "Pre-employment & corporate periodic medical exams",
        "Age-appropriate vaccination programs for all",
        "Diabetes & heart disease risk assessments",
        "Cancer prevention vaccination guidance",
      ]}
      icon={Shield}
      reversed={false}
      imageSrc="/v1/images/services/preventive-health.jpg"
    />
  );
}
