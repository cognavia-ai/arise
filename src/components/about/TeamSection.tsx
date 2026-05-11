"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DOCTOR_INFO, TEAM_MEMBERS } from "@/lib/constants";
import StaggerChildren from "@/components/animation/StaggerChildren";
import { Stethoscope } from "lucide-react";

interface TeamCardData {
  name: string;
  qualifications: string;
  specialization: string;
  experience: string;
  initials: string;
  isLead?: boolean;
}

function getInitials(name: string): string {
  return name
    .replace(/^Dr\.\s*/i, "")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function TeamSection() {
  const teamData: TeamCardData[] = [
    {
      name: DOCTOR_INFO.name,
      qualifications: "MBBS, MD, PGDFM, CCEBDM, BCCPM, MSc",
      specialization: "Diabetology, Preventive Medicine, Palliative Care",
      experience: "Since 2009",
      initials: getInitials(DOCTOR_INFO.name),
      isLead: true,
    },
    ...TEAM_MEMBERS.map((member) => ({
      name: member.name,
      qualifications: member.qualifications,
      specialization: member.specialization,
      experience: member.experience,
      initials: getInitials(member.name),
    })),
  ];

  return (
    <section className="section-padding bg-cloud">
      <Container>
        <SectionHeading
          title="Our Team"
          subtitle="A combined 40+ years of clinical expertise in diabetology, oncology, and family medicine"
        />

        <StaggerChildren
          animation="scaleUp"
          staggerDelay={0.15}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {teamData.map((member) => (
            <div
              key={member.name}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              style={{ opacity: 1 }}
            >
              {/* Photo placeholder */}
              <div className="relative w-28 h-28 mx-auto mb-5">
                <div
                  className={`w-full h-full rounded-full flex items-center justify-center text-white text-2xl font-bold transition-transform duration-300 group-hover:scale-105 ${
                    member.isLead
                      ? "bg-gradient-to-br from-healing-teal to-deep-teal"
                      : "bg-gradient-to-br from-slate to-charcoal"
                  }`}
                  style={{ color: "#FFFFFF" }}
                >
                  {member.initials}
                </div>
                {member.isLead && (
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-warm-gold rounded-full flex items-center justify-center shadow-md">
                    <Stethoscope className="w-4 h-4 text-white" style={{ color: "#FFFFFF" }} />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-serif text-lg text-charcoal" style={{ color: "#1E293B" }}>
                  {member.name}
                </h3>
                <p className="text-xs text-healing-teal font-medium mt-1">
                  {member.qualifications}
                </p>
                <p className="text-sm text-slate mt-2 leading-relaxed" style={{ color: "#64748B" }}>
                  {member.specialization}
                </p>
                <div className="mt-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-soft-teal/50 text-deep-teal text-xs font-semibold">
                  {member.experience}
                </div>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
