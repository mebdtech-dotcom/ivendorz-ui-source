import {
  ClipboardList,
  FileText,
  LayoutDashboard,
  Package,
  Receipt,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
  badge?: string;
}

const nav: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "RFQs", icon: FileText, badge: "12" },
  { label: "Quotations", icon: ClipboardList, badge: "28" },
  { label: "Approvals", icon: ShieldCheck, badge: "5" },
  { label: "Orders", icon: Package },
  { label: "Invoices", icon: Receipt },
  { label: "Suppliers", icon: Users },
  { label: "Settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-sidebar-border bg-sidebar lg:flex">
      <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-6">
        <div className="flex size-8 items-center justify-center rounded-[var(--radius)] bg-primary text-primary-foreground">
          <Package className="size-5" />
        </div>
        <span className="text-base font-semibold text-sidebar-foreground">
          iVendorz
        </span>
      </div>

      <nav aria-label="Primary" className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="flex flex-col gap-1">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <a
                  href="#"
                  aria-current={item.active ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-3 rounded-[var(--radius)] px-3 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-sidebar-ring/50",
                    item.active
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  )}
                >
                  <Icon className="size-4 shrink-0" />
                  <span className="flex-1">{item.label}</span>
                  {item.badge ? (
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-xs tabular-nums",
                      item.active
                        ? "bg-sidebar-primary-foreground/20 text-sidebar-primary-foreground"
                        : "bg-muted text-foreground",
                      )}
                    >
                      {item.badge}
                    </span>
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-3 rounded-[var(--radius)] px-3 py-2">
          <div className="flex size-8 items-center justify-center rounded-full bg-muted text-xs font-medium text-foreground">
            AR
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-sidebar-foreground">
              Arefin R.
            </p>
            <p className="truncate text-xs text-foreground/70">
              Procurement lead
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
