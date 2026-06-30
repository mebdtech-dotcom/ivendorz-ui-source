import Image from 'next/image';
import { type SimilarVendor } from './types';
import { IvChip } from '@/components/iv/iv-chip';

interface SimilarVendorsCarouselProps {
  vendors: SimilarVendor[];
}

export function SimilarVendorsCarousel({
  vendors,
}: SimilarVendorsCarouselProps) {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-xl font-bold text-foreground">
          Similar Verified Vendors
        </h2>

        {vendors.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vendors.map((vendor) => (
              <a
                key={vendor.id}
                href={`/vendor/${vendor.slug}`}
                className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border-2 border-border bg-secondary">
                  <Image
                    src={vendor.logo.url}
                    alt={vendor.logo.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate">
                        {vendor.name}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {vendor.businessType}
                      </p>
                    </div>
                    {vendor.isVerified && (
                      <div className="flex-shrink-0">
                        <IvChip tone="success" variant="solid">
                          ✓
                        </IvChip>
                      </div>
                    )}
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {vendor.location}
                  </p>
                  <div className="mt-3 flex items-center gap-1">
                    <span className="text-sm font-semibold text-foreground">
                      {vendor.rating}
                    </span>
                    <span className="text-xs text-muted-foreground">★</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
