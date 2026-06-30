'use client';

import { Mail, MessageCircle, Phone, Globe } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { IvButton } from '@/components/iv/iv-button';

interface ContactSidebarProps {
  logo: { url: string; alt: string };
  contactPersonName: string;
  phone: string;
  email: string;
  website?: string;
  whatsapp?: string;
  businessHours?: string;
  onRequestQuotation?: () => void;
  onChatSupplier?: () => void;
}

export function ContactSidebar({
  logo,
  contactPersonName,
  phone,
  email,
  website,
  whatsapp,
  businessHours,
  onRequestQuotation,
  onChatSupplier,
}: ContactSidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:fixed lg:right-0 lg:top-0 lg:block lg:h-screen lg:w-72 lg:overflow-y-auto lg:border-l lg:border-border lg:bg-white">
        <div className="sticky top-0 z-10 border-b border-border bg-white p-6">
          <h3 className="font-semibold text-foreground mb-4">
            Contact Information
          </h3>

          {/* Company Logo & Contact */}
          <div className="mb-6 flex flex-col gap-4">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border-2 border-border bg-secondary">
              <Image
                src={logo.url}
                alt={logo.alt}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                {contactPersonName}
              </p>
              {businessHours && (
                <p className="mt-1 text-xs text-muted-foreground">
                  {businessHours}
                </p>
              )}
            </div>
          </div>

          {/* Contact Details */}
          <div className="mb-6 space-y-3 border-b border-border pb-6">
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-3 rounded-lg border border-border p-3 text-sm hover:bg-secondary transition-colors"
            >
              <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
              <span className="text-foreground truncate">{phone}</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 rounded-lg border border-border p-3 text-sm hover:bg-secondary transition-colors"
            >
              <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
              <span className="text-foreground truncate">{email}</span>
            </a>
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border p-3 text-sm hover:bg-secondary transition-colors"
              >
                <Globe className="h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-foreground truncate text-xs">
                  {website.replace(/^https?:\/\//, '')}
                </span>
              </a>
            )}
            {whatsapp && (
              <a
                href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border p-3 text-sm hover:bg-secondary transition-colors"
              >
                <MessageCircle className="h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-foreground truncate">WhatsApp</span>
              </a>
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-2">
            <IvButton
              variant="primary"
              className="w-full justify-center"
              onClick={onRequestQuotation}
            >
              Request Quotation
            </IvButton>
            <IvButton
              variant="ghost"
              className="w-full justify-center"
              onClick={onChatSupplier}
            >
              Chat
            </IvButton>
          </div>
        </div>
      </aside>

      {/* Mobile Floating Button */}
      <div className="fixed bottom-4 right-4 z-40 lg:hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Contact supplier"
        >
          <MessageCircle className="h-6 w-6" />
        </button>

        {isExpanded && (
          <div className="absolute bottom-20 right-0 w-72 rounded-lg border border-border bg-white shadow-lg p-4">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-foreground">
                {contactPersonName}
              </h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </div>

            <div className="mb-4 space-y-2 text-sm">
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <Phone className="h-4 w-4" />
                {phone}
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <Mail className="h-4 w-4" />
                {email}
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <IvButton
                variant="primary"
                size="sm"
                className="w-full justify-center"
                onClick={onRequestQuotation}
              >
                Request Quotation
              </IvButton>
              <IvButton
                variant="ghost"
                size="sm"
                className="w-full justify-center"
                onClick={onChatSupplier}
              >
                Chat
              </IvButton>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
