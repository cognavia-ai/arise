import {
  CLINIC_INFO,
  DOCTOR_INFO,
  OPERATING_HOURS,
  SERVICES,
  STATS,
  TESTIMONIALS,
} from "@/lib/constants";
import { SITE_URL, BASE_PATH, canonicalFor } from "@/lib/metadata";

const ABSOLUTE_LOGO = `${SITE_URL}${BASE_PATH}/images/doctor/dr-premlal.jpg`;
const ABSOLUTE_DOCTOR_IMAGE = `${SITE_URL}${BASE_PATH}/images/doctor/dr-premlal.jpg`;

const dayNameToSchema: Record<string, string> = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
};

const parseHours = (hours: string): { opens: string; closes: string } | null => {
  const match = hours.match(/(\d{1,2}):(\d{2})\s*(AM|PM)\s*[–-]\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (!match) return null;
  const to24 = (h: string, m: string, period: string): string => {
    let hour = parseInt(h, 10);
    if (period.toUpperCase() === "PM" && hour !== 12) hour += 12;
    if (period.toUpperCase() === "AM" && hour === 12) hour = 0;
    return `${hour.toString().padStart(2, "0")}:${m}`;
  };
  return {
    opens: to24(match[1], match[2], match[3]),
    closes: to24(match[4], match[5], match[6]),
  };
};

const openingHoursSpec = OPERATING_HOURS.filter((d) => d.hours.toLowerCase() !== "closed").map(
  (d) => {
    const parsed = parseHours(d.hours);
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayNameToSchema[d.day],
      opens: parsed?.opens ?? "07:00",
      closes: parsed?.closes ?? "19:00",
    };
  }
);

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Near Higher Secondary School, Villadom, Villadam",
  addressLocality: "Thrissur",
  addressRegion: "Kerala",
  postalCode: "680631",
  addressCountry: "IN",
};

const yearsExperience = new Date().getFullYear() - DOCTOR_INFO.practiceStartYear;
const reviewCount = STATS.find((s) => s.label === "Google Reviews")?.value ?? 387;
const ratingValue = STATS.find((s) => s.label === "Star Rating")?.value ?? 4.9;

export const physicianSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": `${SITE_URL}${BASE_PATH}/#physician`,
  name: DOCTOR_INFO.name,
  alternateName: "Dr. Premlal",
  image: ABSOLUTE_DOCTOR_IMAGE,
  description: `${DOCTOR_INFO.fullTitle}. ${yearsExperience}+ years of experience in diabetic care, wound care, and family medicine.`,
  jobTitle: "Consultant Community and Family Physician",
  knowsLanguage: DOCTOR_INFO.languages,
  medicalSpecialty: DOCTOR_INFO.specializations,
  url: canonicalFor("/about"),
  hasCredential: DOCTOR_INFO.qualifications.map((q) => ({
    "@type": "EducationalOccupationalCredential",
    credentialCategory: q.degree,
    educationalLevel: q.degree,
    recognizedBy: q.institution
      ? { "@type": "Organization", name: q.institution }
      : undefined,
    dateCreated: q.year,
  })),
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Medical Registration",
    value: `${DOCTOR_INFO.registration.number} (${DOCTOR_INFO.registration.council})`,
  },
  worksFor: {
    "@type": "MedicalOrganization",
    "@id": `${SITE_URL}${BASE_PATH}/#clinic`,
    name: CLINIC_INFO.name,
  },
});

export const aggregateRatingSchema = () => ({
  "@type": "AggregateRating",
  ratingValue: ratingValue,
  reviewCount: reviewCount,
  bestRating: 5,
  worstRating: 1,
});

export const reviewSchemas = () =>
  TESTIMONIALS.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    datePublished: t.date,
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: t.text,
  }));

const SERVICE_TYPE_MAP: Record<string, string> = {
  "diabetic-care-reversal": "Diabetes care",
  "wound-care": "Diabetic wound care",
  "preventive-health": "Preventive medicine",
  "cancer-screening": "Cancer screening",
  "pain-palliative-care": "Palliative care",
  "counselling": "Counselling and psychotherapy",
  "tele-consultation": "Telemedicine",
};

export const medicalClinicSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "MedicalBusiness", "LocalBusiness"],
  "@id": `${SITE_URL}${BASE_PATH}/#clinic`,
  name: CLINIC_INFO.name,
  alternateName: "Arise Health",
  description: CLINIC_INFO.mission,
  slogan: CLINIC_INFO.tagline,
  url: canonicalFor("/"),
  logo: ABSOLUTE_LOGO,
  image: ABSOLUTE_DOCTOR_IMAGE,
  telephone: CLINIC_INFO.phone,
  email: CLINIC_INFO.email,
  priceRange: CLINIC_INFO.fee,
  paymentAccepted: CLINIC_INFO.paymentMethods.join(", "),
  currenciesAccepted: "INR",
  address: ADDRESS,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.5276,
    longitude: 76.2144,
  },
  openingHoursSpecification: openingHoursSpec,
  medicalSpecialty: DOCTOR_INFO.specializations,
  availableService: SERVICES.map((s) => ({
    "@type": "MedicalProcedure",
    name: s.title,
    description: s.shortDescription,
    procedureType: SERVICE_TYPE_MAP[s.id] ?? "Medical service",
  })),
  physician: {
    "@id": `${SITE_URL}${BASE_PATH}/#physician`,
  },
  sameAs: [
    "https://www.instagram.com/sukrithihealth/",
    "https://www.facebook.com/sukrithihealth/",
  ],
  aggregateRating: aggregateRatingSchema(),
  review: reviewSchemas(),
  areaServed: [
    { "@type": "City", name: "Thrissur" },
    { "@type": "State", name: "Kerala" },
    { "@type": "Country", name: "India" },
  ],
});

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}${BASE_PATH}/#organization`,
  name: CLINIC_INFO.name,
  url: canonicalFor("/"),
  logo: ABSOLUTE_LOGO,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: CLINIC_INFO.phone,
    contactType: "Patient services",
    areaServed: "IN",
    availableLanguage: DOCTOR_INFO.languages,
  },
  sameAs: [
    "https://www.instagram.com/sukrithihealth/",
    "https://www.facebook.com/sukrithihealth/",
  ],
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}${BASE_PATH}/#website`,
  url: canonicalFor("/"),
  name: CLINIC_INFO.name,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}${BASE_PATH}/#clinic` },
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});

export const blogPostingSchema = (post: {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  category: string;
  image?: string;
  readingTime?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": ["BlogPosting", "Article"],
  headline: post.title,
  description: post.excerpt,
  datePublished: post.date,
  dateModified: post.date,
  articleSection: post.category,
  inLanguage: "en-IN",
  image: post.image
    ? `${SITE_URL}${post.image.startsWith("/") ? "" : "/"}${post.image}`
    : ABSOLUTE_DOCTOR_IMAGE,
  url: canonicalFor(`/blog/${post.slug}`),
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalFor(`/blog/${post.slug}`),
  },
  author: {
    "@type": "Person",
    "@id": `${SITE_URL}${BASE_PATH}/#physician`,
    name: post.author,
  },
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_URL}${BASE_PATH}/#organization`,
    name: CLINIC_INFO.name,
    logo: { "@type": "ImageObject", url: ABSOLUTE_LOGO },
  },
});

export const servicesItemListSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "MedicalProcedure",
      name: s.title,
      description: s.shortDescription,
      procedureType: SERVICE_TYPE_MAP[s.id] ?? "Medical service",
      url: canonicalFor(`/services#${s.slug}`),
    },
  })),
});

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqPageSchema = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});
