import {
  Bell,
  ClipboardList,
  FilePlus2,
  FileText,
  GitCompareArrows,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  User,
  Users,
} from "lucide-react";

/**
 * Structural navigation slots for the buyer shell.
 *
 * Labels + icons + routes only. No counts, statuses, or domain values live
 * here — per-section badges arrive separately via `navBadges` (keyed by `id`)
 * from the adapter, and the caller decides which slot is `active`.
 */
export interface BuyerNavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const BUYER_NAV: BuyerNavItem[] = [
  { id: "dashboard", label: "Dashboard", href: "#", icon: LayoutDashboard },
  { id: "post-rfq", label: "Post RFQ", href: "#", icon: FilePlus2 },
  { id: "my-rfqs", label: "My RFQs", href: "#", icon: FileText },
  { id: "quotations", label: "Quotations", href: "#", icon: ClipboardList },
  {
    id: "compare-quotes",
    label: "Compare Quotes",
    href: "#",
    icon: GitCompareArrows,
  },
  { id: "purchase-orders", label: "Purchase Orders", href: "#", icon: Package },
  { id: "suppliers", label: "Suppliers", href: "#", icon: Users },
  { id: "messages", label: "Messages", href: "#", icon: MessageSquare },
  { id: "notifications", label: "Notifications", href: "#", icon: Bell },
  { id: "profile", label: "Profile", href: "#", icon: User },
  { id: "settings", label: "Settings", href: "#", icon: Settings },
];
