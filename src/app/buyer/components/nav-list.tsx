import { cn } from "@/lib/utils";

import { BUYER_NAV } from "./nav";

export interface NavListProps {
  /** Id of the currently active nav slot (decided by the caller). */
  activeId?: string;
  /** Optional per-nav badge labels, keyed by nav id. */
  badges?: Record<string, string>;
}

/**
 * Shared primary-navigation list. Pure presentation: it renders the structural
 * nav slots and reflects the caller-supplied `activeId` and `badges`. It does
 * not derive the active route or invent any counts.
 */
export function NavList({ activeId, badges = {} }: NavListProps) {
  return (
    <ul className="flex flex-col gap-1">
      {BUYER_NAV.map((item) => {
        const Icon = item.icon;
        const isActive = item.id === activeId;
        const badge = badges[item.id];
        return (
          <li key={item.id}>
            <a
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-[var(--radius)] px-3 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-sidebar-ring/50",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
            >
              <Icon className="size-4 shrink-0" />
              <span className="flex-1">{item.label}</span>
              {badge ? (
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-xs tabular-nums",
                    isActive
                      ? "bg-sidebar-primary-foreground/20 text-sidebar-primary-foreground"
                      : "bg-muted text-foreground",
                  )}
                >
                  {badge}
                </span>
              ) : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
