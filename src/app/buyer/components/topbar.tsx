"use client";

import { Bell, Menu, Plus, Search } from "lucide-react";
import { useState } from "react";

import { IvButton } from "@/components/iv/iv-button";
import { cn } from "@/lib/utils";

export interface TopbarProps {
  /** Notifications summary (e.g. "3 unread"); `null` shows no indicator. */
  notificationsLabel?: string | null;
}

export function Topbar({ notificationsLabel = null }: TopbarProps) {
  // Ephemeral UI state only — no fetching, no persistence.
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-3 border-b border-border bg-background/95 px-4 backdrop-blur sm:px-6">
      <button
        type="button"
        className="inline-flex size-9 items-center justify-center rounded-[var(--radius)] text-foreground hover:bg-accent focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none lg:hidden"
        aria-label="Open navigation"
      >
        <Menu className="size-5" />
      </button>

      <div className="relative flex-1 max-w-md">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search RFQs, suppliers, orders…"
          aria-label="Search"
          className={cn(
            "h-9 w-full rounded-[var(--radius)] border border-input bg-card pl-9 pr-3 text-sm text-foreground",
            "placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
          )}
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          type="button"
          className="relative inline-flex size-9 items-center justify-center rounded-[var(--radius)] text-foreground hover:bg-accent focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none"
          aria-label={
            notificationsLabel
              ? `Notifications, ${notificationsLabel}`
              : "Notifications"
          }
        >
          <Bell className="size-5" />
          {notificationsLabel ? (
            <span
              className="absolute right-1.5 top-1.5 size-2 rounded-full bg-destructive ring-2 ring-background"
              aria-hidden="true"
            />
          ) : null}
        </button>

        <IvButton size="sm" className="gap-1.5">
          <Plus className="size-4" />
          <span className="hidden sm:inline">New RFQ</span>
        </IvButton>
      </div>
    </header>
  );
}
