'use client';

import { type ReactNode } from 'react';

export type TabName =
  | 'Overview'
  | 'Products'
  | 'Services'
  | 'Projects'
  | 'Certifications'
  | 'Reviews'
  | 'Contact';

interface VendorProfileNavProps {
  activeTab: TabName;
  onTabChange: (tab: TabName) => void;
}

const TABS: { name: TabName; label: string }[] = [
  { name: 'Overview', label: 'Overview' },
  { name: 'Products', label: 'Products' },
  { name: 'Services', label: 'Services' },
  { name: 'Projects', label: 'Projects' },
  { name: 'Certifications', label: 'Certifications' },
  { name: 'Reviews', label: 'Reviews' },
  { name: 'Contact', label: 'Contact' },
];

export function VendorProfileNav({
  activeTab,
  onTabChange,
}: VendorProfileNavProps) {
  return (
    <nav className="sticky top-0 z-20 border-b border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-0 overflow-x-auto scrollbar-hide">
          {TABS.map(({ name, label }) => (
            <button
              key={name}
              onClick={() => onTabChange(name)}
              className={`flex-shrink-0 px-4 py-4 text-sm font-medium transition-colors whitespace-nowrap border-b-2 ${
                activeTab === name
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
              aria-current={activeTab === name ? 'page' : undefined}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
