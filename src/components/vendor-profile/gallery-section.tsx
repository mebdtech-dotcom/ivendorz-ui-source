import Image from 'next/image';
import { type GalleryImage } from './types';

interface GallerySectionProps {
  images: GalleryImage[];
}

export function GallerySection({ images }: GallerySectionProps) {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-xl font-bold text-foreground">
          Gallery
        </h2>

        {images.length > 0 ? (
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {images.map((image, idx) => (
              <div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-lg border border-border bg-secondary shadow-xs hover:shadow-sm transition-shadow"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-border bg-secondary p-12 text-center">
            <p className="text-muted-foreground">No gallery images available.</p>
          </div>
        )}
      </div>
    </section>
  );
}
