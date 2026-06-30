'use client';

import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import { type Review } from './types';
import { IvButton } from '@/components/iv/iv-button';

interface ReviewsSectionProps {
  reviews: Review[];
  nextCursor?: string;
  prevCursor?: string;
  onNext?: (cursor: string) => void;
  onPrev?: (cursor: string) => void;
}

export function ReviewsSection({
  reviews,
  nextCursor,
  prevCursor,
  onNext,
  onPrev,
}: ReviewsSectionProps) {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-xl font-bold text-foreground">
          Buyer Reviews
        </h2>

        {reviews.length > 0 ? (
          <>
            <div className="space-y-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="rounded-lg border border-border bg-card p-6 shadow-xs"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {review.buyerImage && (
                        <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-border bg-secondary">
                          <Image
                            src={review.buyerImage.url}
                            alt={review.buyerImage.alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-foreground">
                          {review.buyerCompany}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {review.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? 'fill-iv-amber text-iv-amber'
                              : 'text-border'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-foreground">
                    {review.reviewText}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center gap-3">
              <IvButton
                variant="ghost"
                size="sm"
                onClick={() => prevCursor && onPrev?.(prevCursor)}
                disabled={!prevCursor}
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </IvButton>
              <IvButton
                variant="ghost"
                size="sm"
                onClick={() => nextCursor && onNext?.(nextCursor)}
                disabled={!nextCursor}
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </IvButton>
            </div>
          </>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-border bg-secondary p-12 text-center">
            <p className="text-muted-foreground">No reviews available yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
