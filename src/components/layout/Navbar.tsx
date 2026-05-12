"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, CLINIC_INFO } from "@/lib/constants";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const scrollDirection = useScrollDirection();
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAtTop = scrollY < 50;
  const isHidden = scrollDirection === "down" && scrollY > 100;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
          isHidden && "-translate-y-full",
          isAtTop
            ? "bg-transparent text-white"
            : "bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm text-charcoal"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Arise Medical Centre — Home"
              className="flex items-center gap-2.5 font-serif text-xl lg:text-2xl font-bold tracking-tight"
            >
              <Image
                src={
                  isAtTop
                    ? "/v1/images/logo/arise-logo-transparent.png"
                    : "/v1/images/logo/arise-logo-teal.png"
                }
                alt="Arise Health logo"
                width={48}
                height={48}
                className="w-9 h-9 lg:w-11 lg:h-11 shrink-0"
                priority
              />
              <span
                className={cn(
                  "transition-colors duration-300",
                  isAtTop ? "text-white" : "text-healing-teal"
                )}
              >
                Arise Health
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors duration-300 py-1",
                      isActive
                        ? "text-healing-teal"
                        : isAtTop
                          ? "text-white/90 hover:text-white"
                          : "text-charcoal/80 hover:text-charcoal",
                      "group"
                    )}
                  >
                    {link.label}
                    {/* Animated underline */}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 h-0.5 bg-healing-teal transition-all duration-300 ease-out",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Desktop Right: Phone + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s/g, "")}`}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors duration-300",
                  isAtTop
                    ? "text-white/90 hover:text-white"
                    : "text-charcoal/80 hover:text-charcoal"
                )}
              >
                <Phone className="w-4 h-4" />
                {CLINIC_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-healing-teal text-white text-sm font-semibold transition-all duration-300 hover:bg-deep-teal hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="flex flex-col items-center justify-center gap-1.5">
                <span
                  className={cn(
                    "block w-6 h-0.5 rounded-full transition-all duration-300",
                    isAtTop ? "bg-white" : "bg-charcoal",
                    mobileMenuOpen && "rotate-45 translate-y-2"
                  )}
                />
                <span
                  className={cn(
                    "block w-6 h-0.5 rounded-full transition-all duration-300",
                    isAtTop ? "bg-white" : "bg-charcoal",
                    mobileMenuOpen && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "block w-6 h-0.5 rounded-full transition-all duration-300",
                    isAtTop ? "bg-white" : "bg-charcoal",
                    mobileMenuOpen && "-rotate-45 -translate-y-2"
                  )}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
