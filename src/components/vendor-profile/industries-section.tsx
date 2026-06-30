'use client';

import { IvChip } from '@/components/iv/iv-chip';

interface IndustriesSectionProps {
  industries: string[];
  onIndustryClick?: (industry: string) => void;
}

export function IndustriesSection({
  industries,
  onIndustryClick,
}: IndustriesSectionProps) {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-xl font-bold text-foreground">
          Industries Served
        </h2>

        {industries.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => onIndustryClick?.(industry)}
                className="transition-opacity hover:opacity-80"
              >
                <IvChip tone="primary" variant="soft">
                  {industry}
                </IvChip>
              </button>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            No industries specified.
          </p>
        )}
      </div>
    </section>
  );
}
