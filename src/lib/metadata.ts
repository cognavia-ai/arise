import type { Metadata } from "next";

interface PageMetadataOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  path?: string;
}

const SITE_NAME = "Arise Medical Centre";
const DEFAULT_IMAGE = "/v1/images/og-default.jpg";

export const SITE_URL = "https://arisehealth.life";
export const BASE_PATH = "/v1";

export const canonicalFor = (path: string = "/"): string => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${BASE_PATH}${normalized === "/" ? "" : normalized}`;
};

export function generatePageMetadata({
  title,
  description,
  keywords,
  image,
  path = "/",
}: PageMetadataOptions): Metadata {
  const url = canonicalFor(path);
  return {
    title: title
      ? { default: title, template: `%s | ${SITE_NAME}` }
      : SITE_NAME,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: title ?? SITE_NAME,
      description: description ?? "",
      images: [image ?? DEFAULT_IMAGE],
      locale: "en_IN",
      type: "website",
      siteName: SITE_NAME,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? SITE_NAME,
      description: description ?? "",
      images: [image ?? DEFAULT_IMAGE],
    },
  };
}

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Arise Medical Centre | Diabetes Reversal & Wound Care Without Amputation | Thrissur, Kerala",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Proven diabetes reversal (HbA1c 9.2 to 6.5 in 3 months) and CMC-accredited wound care without amputation in Thrissur, Kerala. Evidence-based care by Dr. K S Premlal, in practice since 2009. 4.9-star rating from 387+ patients.",
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
  alternates: { canonical: canonicalFor("/") },
  openGraph: {
    title:
      "Arise Medical Centre | Diabetes Reversal & Wound Care Without Amputation | Thrissur",
    description:
      "Proven HbA1c reduction in 3 months. CMC-accredited wound care saving limbs. 10,000+ patients trust Dr. K S Premlal in Thrissur, Kerala.",
    images: [DEFAULT_IMAGE],
    locale: "en_IN",
    type: "website",
    siteName: SITE_NAME,
    url: canonicalFor("/"),
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Arise Medical Centre | Diabetes Reversal & Wound Care Without Amputation | Thrissur",
    description:
      "Proven HbA1c reduction in 3 months. CMC-accredited wound care saving limbs. 10,000+ patients trust Dr. K S Premlal in Thrissur, Kerala.",
    images: [DEFAULT_IMAGE],
  },
};
