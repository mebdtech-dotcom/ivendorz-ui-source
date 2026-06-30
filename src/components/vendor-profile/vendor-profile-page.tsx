'use client';

import { useState } from 'react';
import type { VendorProfile } from './types';
import type { TabName } from './vendor-profile-nav';
import { VendorProfileNav } from './vendor-profile-nav';
import { HeroSection } from './hero-section';
import { CompanyOverviewSection } from './company-overview-section';
import { ProductsSection } from './products-section';
import { ServicesSection } from './services-section';
import { ProjectsSection } from './projects-section';
import { CompanyInfoSection } from './company-info-section';
import { IndustriesSection } from './industries-section';
import { CertificationsSection } from './certifications-section';
import { GallerySection } from './gallery-section';
import { ReviewsSection } from './reviews-section';
import { SimilarVendorsCarousel } from './similar-vendors-carousel';
import { ContactSidebar } from './contact-sidebar';

interface VendorProfilePageProps {
  vendor: VendorProfile;
  onSendRfq?: () => void;
  onContactSupplier?: () => void;
  onRequestQuotation?: () => void;
  onChatSupplier?: () => void;
  onSearchProducts?: (query: string) => void;
  onFilterProducts?: (category: string) => void;
  onIndustryClick?: (industry: string) => void;
  onNextReviews?: (cursor: string) => void;
  onPrevReviews?: (cursor: string) => void;
}

export function VendorProfilePage({
  vendor,
  onSendRfq,
  onContactSupplier,
  onRequestQuotation,
  onChatSupplier,
  onSearchProducts,
  onFilterProducts,
  onIndustryClick,
  onNextReviews,
  onPrevReviews,
}: VendorProfilePageProps) {
  const [activeTab, setActiveTab] = useState<TabName>('Overview');

  return (
    <div className="bg-background">
      <ContactSidebar
        logo={vendor.logo}
        contactPersonName={vendor.contactPersonName}
        phone={vendor.phone}
        email={vendor.email}
        website={vendor.website}
        whatsapp={vendor.whatsapp}
        businessHours={vendor.businessHours}
        onRequestQuotation={onRequestQuotation}
        onChatSupplier={onChatSupplier}
      />

      <main className="lg:pr-72">
        <HeroSection
          logo={vendor.logo}
          name={vendor.name}
          rating={vendor.rating}
          yearsInBusiness={vendor.yearsInBusiness}
          location={vendor.location}
          businessType={vendor.businessType}
          responseRate={vendor.responseRate}
          responseTime={vendor.responseTime}
          isVerified={vendor.isVerified}
          isPremium={vendor.isPremium}
          email={vendor.email}
          phone={vendor.phone}
          website={vendor.website}
          onSendRfq={onSendRfq}
          onContactSupplier={onContactSupplier}
        />

        <VendorProfileNav
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Tab Content */}
        <div>
          {activeTab === 'Overview' && (
            <>
              <CompanyOverviewSection
                aboutText={vendor.aboutText}
                vision={vendor.vision}
                strengths={vendor.strengths}
              />
              <CompanyInfoSection
                companyName={vendor.companyName}
                businessType={vendor.businessType}
                yearEstablished={vendor.yearEstablished}
                employees={vendor.employees}
                factorySize={vendor.factorySize}
                certifications={vendor.certifications?.length.toString()}
                vat={vendor.vat}
                bin={vendor.bin}
                tin={vendor.tin}
                tradeLicense={vendor.tradeLicense}
              />
              <IndustriesSection
                industries={vendor.industriesServed}
                onIndustryClick={onIndustryClick}
              />
            </>
          )}

          {activeTab === 'Products' && (
            <ProductsSection
              products={vendor.products}
              onSearchChange={onSearchProducts}
              onFilterChange={onFilterProducts}
            />
          )}

          {activeTab === 'Services' && (
            <ServicesSection services={vendor.services} />
          )}

          {activeTab === 'Projects' && (
            <ProjectsSection projects={vendor.projects} />
          )}

          {activeTab === 'Certifications' && (
            <>
              <CertificationsSection certifications={vendor.certifications} />
              <GallerySection images={vendor.gallery} />
            </>
          )}

          {activeTab === 'Reviews' && (
            <ReviewsSection
              reviews={vendor.reviews}
              nextCursor={vendor.reviewsNextCursor}
              prevCursor={vendor.reviewsPrevCursor}
              onNext={onNextReviews}
              onPrev={onPrevReviews}
            />
          )}

          {activeTab === 'Contact' && (
            <section className="border-b border-border bg-white">
              <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                <h2 className="mb-8 text-xl font-bold text-foreground">
                  Get in Touch
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 font-semibold text-foreground">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          Contact Person
                        </p>
                        <p className="mt-1 text-foreground">
                          {vendor.contactPersonName}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          Phone
                        </p>
                        <a
                          href={`tel:${vendor.phone}`}
                          className="mt-1 text-primary hover:underline"
                        >
                          {vendor.phone}
                        </a>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          Email
                        </p>
                        <a
                          href={`mailto:${vendor.email}`}
                          className="mt-1 text-primary hover:underline"
                        >
                          {vendor.email}
                        </a>
                      </div>
                      {vendor.website && (
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            Website
                          </p>
                          <a
                            href={vendor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 text-primary hover:underline"
                          >
                            {vendor.website}
                          </a>
                        </div>
                      )}
                      {vendor.businessHours && (
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            Business Hours
                          </p>
                          <p className="mt-1 text-foreground">
                            {vendor.businessHours}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Similar Vendors */}
        {vendor.similarVendors.length > 0 && (
          <SimilarVendorsCarousel vendors={vendor.similarVendors} />
        )}
      </main>
    </div>
  );
}
