'use client';

import { Search } from 'lucide-react';
import Image from 'next/image';
import { type Product } from './types';
import { IvButton } from '@/components/iv/iv-button';

interface ProductsSectionProps {
  products: Product[];
  onSearchChange?: (query: string) => void;
  onFilterChange?: (category: string) => void;
}

export function ProductsSection({
  products,
  onSearchChange,
  onFilterChange,
}: ProductsSectionProps) {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-xl font-bold text-foreground">
          Our Products
        </h2>

        {/* Search & Filter */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Search products..."
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="w-full rounded-[var(--radius)] border border-border bg-background px-10 py-2 text-sm placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/50 outline-none"
            />
          </div>
          <select
            onChange={(e) => onFilterChange?.(e.target.value)}
            className="rounded-[var(--radius)] border border-border bg-background px-3 py-2 text-sm text-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/50 outline-none"
          >
            <option value="">All Categories</option>
            {Array.from(new Set(products.map((p) => p.category))).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col gap-3 rounded-lg border border-border bg-card p-4 shadow-xs hover:shadow-sm transition-shadow"
              >
                <div className="relative h-48 w-full overflow-hidden rounded-[var(--radius)] bg-secondary">
                  <Image
                    src={product.image.url}
                    alt={product.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    {product.category}
                  </p>
                  <p className="mt-2 text-sm text-foreground line-clamp-3">
                    {product.description}
                  </p>
                </div>
                {product.detailsLink && (
                  <IvButton
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      // Component does not navigate; caller handles routing
                    }}
                  >
                    View Details →
                  </IvButton>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-border bg-secondary p-12 text-center">
            <p className="text-muted-foreground">No products found.</p>
          </div>
        )}
      </div>
    </section>
  );
}
