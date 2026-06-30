import { MapPin, Phone, Mail, Globe } from "lucide-react";
import Image from "next/image";

import { IvButton } from "@/components/iv/iv-button";
import { IvChip } from "@/components/iv/iv-chip";

interface HeroSectionProps {
  logo: { url: string; alt: string };
  name: string;
  rating: number;
  yearsInBusiness: number;
  location: string;
  businessType: string;
  responseRate: string;
  responseTime: string;
  isVerified: boolean;
  isPremium: boolean;
  email: string;
  phone: string;
  website?: string;
  onSendRfq?: () => void;
  onContactSupplier?: () => void;
}

export function HeroSection({
  logo,
  name,
  rating,
  yearsInBusiness,
  location,
  businessType,
  responseRate,
  responseTime,
  isVerified,
  isPremium,
  email,
  phone,
  website,
  onSendRfq,
  onContactSupplier,
}: HeroSectionProps) {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header row: logo, name, badges */}
        <div className="mb-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border-2 border-border bg-secondary">
              <Image
                src={logo.url}
                alt={logo.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                {name}
              </h1>
              <div className="flex flex-wrap gap-2">
                {isVerified && (
                  <IvChip tone="success" variant="solid">
                    ✓ Verified
                  </IvChip>
                )}
                {isPremium && (
                  <IvChip tone="amber" variant="solid">
                    ★ Premium Member
                  </IvChip>
                )}
              </div>
            </div>
          </div>

          {/* CTAs on desktop */}
          <div className="hidden gap-3 sm:flex">
            <IvButton
              variant="primary"
              onClick={onSendRfq}
            >
              Send RFQ
            </IvButton>
            <IvButton
              variant="ghost"
              onClick={onContactSupplier}
            >
              Contact Supplier
            </IvButton>
          </div>
        </div>

        {/* Metrics row */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Rating
            </p>
            <p className="text-lg font-semibold text-foreground">
              {rating} <span className="text-sm text-muted-foreground">/5</span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Since
            </p>
            <p className="text-lg font-semibold text-foreground">
              {yearsInBusiness} years
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Response Rate
            </p>
            <p className="text-lg font-semibold text-foreground">
              {responseRate}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Response Time
            </p>
            <p className="text-lg font-semibold text-foreground">
              {responseTime}
            </p>
          </div>
        </div>

        {/* Contact & location row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div className="flex flex-col gap-1 min-w-0">
              <p className="text-xs font-medium text-muted-foreground">
                Location
              </p>
              <p className="text-sm font-medium text-foreground truncate">
                {location}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div className="flex flex-col gap-1 min-w-0">
              <p className="text-xs font-medium text-muted-foreground">
                Phone
              </p>
              <a
                href={`tel:${phone}`}
                className="text-sm font-medium text-primary hover:underline truncate"
              >
                {phone}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div className="flex flex-col gap-1 min-w-0">
              <p className="text-xs font-medium text-muted-foreground">
                Email
              </p>
              <a
                href={`mailto:${email}`}
                className="text-sm font-medium text-primary hover:underline truncate"
              >
                {email}
              </a>
            </div>
          </div>
          {website && (
            <div className="flex items-start gap-3">
              <Globe className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <div className="flex flex-col gap-1 min-w-0">
                <p className="text-xs font-medium text-muted-foreground">
                  Website
                </p>
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline truncate"
                >
                  {website.replace(/^https?:\/\//, "")}
                </a>
              </div>
            </div>
          )}
        </div>

        {/* CTAs on mobile */}
        <div className="mt-8 flex flex-col gap-2 sm:hidden">
          <IvButton
            variant="primary"
            className="w-full"
            onClick={onSendRfq}
          >
            Send RFQ
          </IvButton>
          <IvButton
            variant="ghost"
            className="w-full"
            onClick={onContactSupplier}
          >
            Contact Supplier
          </IvButton>
        </div>
      </div>
    </section>
  );
}
