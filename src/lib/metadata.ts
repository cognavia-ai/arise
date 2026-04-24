import type { Metadata } from "next";

interface PageMetadataOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
}

const SITE_NAME = "Arise Medical Centre";
const DEFAULT_IMAGE = "/v1/images/og-default.jpg";

export function generatePageMetadata({
  title,
  description,
  keywords,
  image,
}: PageMetadataOptions): Metadata {
  return {
    title: title
      ? { default: title, template: `%s | ${SITE_NAME}` }
      : SITE_NAME,
    description,
    keywords,
    openGraph: {
      title: title ?? SITE_NAME,
      description: description ?? "",
      images: [image ?? DEFAULT_IMAGE],
      locale: "en_IN",
      type: "website",
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export const DEFAULT_METADATA: Metadata = {
  title: {
    default:
      "Arise Medical Centre | Diabetes Reversal & Wound Care Without Amputation | Thrissur, Kerala",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Proven diabetes reversal (HbA1c 9.2 to 6.5 in 3 months) and CMC-accredited wound care without amputation in Thrissur, Kerala. 17+ years of evidence-based care by Dr. K S Premlal. 4.9-star rating from 387+ patients.",
  keywords: [
    "diabetic care thrissur",
    "wound care without amputation",
    "diabetologist thrissur",
    "diabetes reversal kerala",
    "diabetic foot care thrissur",
    "best diabetes doctor thrissur",
    "Dr Premlal",
    "arise health",
    "diabetes reversal program india",
    "HbA1c reduction",
  ],
  openGraph: {
    title:
      "Arise Medical Centre | Diabetes Reversal & Wound Care Without Amputation | Thrissur",
    description:
      "Proven HbA1c reduction in 3 months. CMC-accredited wound care saving limbs. 10,000+ patients trust Dr. K S Premlal in Thrissur, Kerala.",
    images: [DEFAULT_IMAGE],
    locale: "en_IN",
    type: "website",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
};
