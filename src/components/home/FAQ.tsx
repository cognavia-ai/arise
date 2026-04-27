"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  CLINIC_INFO,
  DOCTOR_INFO,
  OPERATING_HOURS,
  SERVICES,
} from "@/lib/constants";
import { faqPageSchema, type FaqItem } from "@/lib/seo/structuredData";
import JsonLd from "@/components/seo/JsonLd";

const operatingHoursSummary = (() => {
  const open = OPERATING_HOURS.filter((d) => d.hours.toLowerCase() !== "closed");
  const closed = OPERATING_HOURS.filter((d) => d.hours.toLowerCase() === "closed");
  const openHours = open[0]?.hours ?? "7:00 AM – 7:00 PM";
  return `${open[0]?.day ?? "Monday"} to ${open[open.length - 1]?.day ?? "Saturday"}: ${openHours}. ${closed.map((d) => d.day).join(", ") || "Sunday"}: closed.`;
})();

const servicesList = SERVICES.map((s) => s.title).join("; ");

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Where is Arise Medical Centre located?",
    answer: `Arise Medical Centre is at ${CLINIC_INFO.address}.`,
  },
  {
    question: "What are the clinic's operating hours?",
    answer: operatingHoursSummary,
  },
  {
    question: "How can I book an appointment?",
    answer: `You can book an appointment by calling ${CLINIC_INFO.phone}, sending a message on WhatsApp at ${CLINIC_INFO.whatsapp}, or by filling out the appointment form on the Contact page. Walk-in patients are also welcome during operating hours.`,
  },
  {
    question: "What is the consultation fee?",
    answer: `Consultations start ${CLINIC_INFO.fee.toLowerCase()}. We accept ${CLINIC_INFO.paymentMethods.join(" and ")}.`,
  },
  {
    question: "What languages does Dr. Premlal speak?",
    answer: `Dr. K S Premlal speaks ${DOCTOR_INFO.languages.join(", ")}.`,
  },
  {
    question: "What are Dr. Premlal's qualifications?",
    answer: `${DOCTOR_INFO.fullTitle}. He has ${DOCTOR_INFO.experience} years of clinical experience and is registered with the ${DOCTOR_INFO.registration.council} (Reg. No. ${DOCTOR_INFO.registration.number}).`,
  },
  {
    question: "What services are offered at the clinic?",
    answer: `Arise Medical Centre offers ${SERVICES.length} specialised services: ${servicesList}.`,
  },
  {
    question: "Do you offer video or tele-consultation?",
    answer:
      "Yes, video and tele-consultation is available for follow-ups, NRI patients, and patients across India. Bookings can be made via phone or WhatsApp.",
  },
  {
    question: "Do you provide home visits?",
    answer:
      "Yes, home visits are available for bedridden and immobile patients as part of our pain and palliative care service.",
  },
  {
    question: "How can I contact the clinic?",
    answer: `Phone: ${CLINIC_INFO.phone}. WhatsApp: ${CLINIC_INFO.whatsapp}. Email: ${CLINIC_INFO.email}.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-cloud" id="faq">
      <JsonLd id="ld-faq" data={faqPageSchema(FAQ_ITEMS)} />
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#1E293B" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg" style={{ color: "#64748B" }}>
              Quick answers to common questions about visiting Arise Medical Centre.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.question}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-soft-teal/10 transition-colors"
                  >
                    <span
                      className="font-semibold text-base md:text-lg"
                      style={{ color: "#1E293B" }}
                    >
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 text-healing-teal transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="px-5 pb-5 text-base leading-relaxed"
                        style={{ color: "#475569" }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
