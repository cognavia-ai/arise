import "./globals.css";

import { dmSerifDisplay, inter, dmSans } from "@/lib/fonts";
import { DEFAULT_METADATA } from "@/lib/metadata";
import {
  medicalClinicSchema,
  organizationSchema,
  physicianSchema,
  websiteSchema,
} from "@/lib/seo/structuredData";

import { LenisProvider } from "@/providers/LenisProvider";
import { AnimationProvider } from "@/providers/AnimationProvider";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { BackToTop } from "@/components/shared/BackToTop";
import { BookAppointmentCTA } from "@/components/shared/BookAppointmentCTA";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import CursorFollower from "@/components/animation/CursorFollower";
import JsonLd from "@/components/seo/JsonLd";

export const metadata = DEFAULT_METADATA;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${inter.variable} ${dmSans.variable}`}
    >
      <head>
        <JsonLd id="ld-organization" data={organizationSchema()} />
        <JsonLd id="ld-clinic" data={medicalClinicSchema()} />
        <JsonLd id="ld-physician" data={physicianSchema()} />
        <JsonLd id="ld-website" data={websiteSchema()} />
      </head>
      <body className="font-sans text-charcoal bg-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-healing-teal focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to main content
        </a>
        <AnimationProvider>
          <LenisProvider>
            <ScrollProgressBar />
            <Navbar />
            <main id="main-content" className="min-h-screen">{children}</main>
            <Footer />
            <WhatsAppButton />
            <BackToTop />
            <BookAppointmentCTA />
            <CursorFollower />
          </LenisProvider>
        </AnimationProvider>
      </body>
    </html>
  );
}
