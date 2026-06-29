/**
 * NOTE (governance): This module contains baked sample data and domain values
 * (statuses, tiers, amounts). Per the iVendorz conformance rules, primitives
 * are data-free and domain-free; this Buyer Dashboard intentionally overrides
 * those bans at the user's explicit request to produce a composed screen.
 * It is illustrative scaffolding only — not a governed artifact.
 */

export type StatusTone =
  | "neutral"
  | "primary"
  | "success"
  | "warning"
  | "info"
  | "amber"
  | "destructive";

export interface Kpi {
  id: string;
  label: string;
  value: string;
  /** pre-formatted money value, rendered via iv-money */
  money?: { amount: string; currency: string };
  trendLabel: string;
  trendTone: StatusTone;
}

export const kpis: Kpi[] = [
  {
    id: "active-rfqs",
    label: "Active RFQs",
    value: "12",
    trendLabel: "+3 this week",
    trendTone: "info",
  },
  {
    id: "pending-quotations",
    label: "Pending quotations",
    value: "28",
    trendLabel: "8 new",
    trendTone: "primary",
  },
  {
    id: "awaiting-approval",
    label: "Awaiting your approval",
    value: "5",
    trendLabel: "2 overdue",
    trendTone: "warning",
  },
  {
    id: "spend-mtd",
    label: "Spend (month to date)",
    value: "",
    money: { amount: "48,20,000", currency: "BDT" },
    trendLabel: "62% of budget",
    trendTone: "success",
  },
];

export interface Approval {
  id: string;
  reference: string;
  title: string;
  requester: string;
  amount: { amount: string; currency: string };
  status: string;
  statusTone: StatusTone;
}

export const approvals: Approval[] = [
  {
    id: "a1",
    reference: "REQ-2041",
    title: "Industrial sensors — Line A retrofit",
    requester: "Nadia Rahman",
    amount: { amount: "6,40,000", currency: "BDT" },
    status: "Overdue",
    statusTone: "destructive",
  },
  {
    id: "a2",
    reference: "REQ-2038",
    title: "Annual MRO consumables restock",
    requester: "Tanvir Hasan",
    amount: { amount: "2,15,500", currency: "BDT" },
    status: "Due today",
    statusTone: "warning",
  },
  {
    id: "a3",
    reference: "REQ-2035",
    title: "Forklift maintenance contract",
    requester: "Imran Kabir",
    amount: { amount: "9,80,000", currency: "BDT" },
    status: "In review",
    statusTone: "info",
  },
  {
    id: "a4",
    reference: "REQ-2030",
    title: "Packaging film — Q3 volume",
    requester: "Sadia Islam",
    amount: { amount: "3,72,000", currency: "BDT" },
    status: "In review",
    statusTone: "info",
  },
];

export interface Rfq {
  id: string;
  reference: string;
  title: string;
  quotes: number;
  closesIn: string;
  stage: string;
  stageTone: StatusTone;
}

export const rfqs: Rfq[] = [
  {
    id: "r1",
    reference: "RFQ-7781",
    title: "CNC tooling set — 5 axis",
    quotes: 6,
    closesIn: "2 days",
    stage: "Collecting",
    stageTone: "info",
  },
  {
    id: "r2",
    reference: "RFQ-7775",
    title: "Warehouse racking system",
    quotes: 9,
    closesIn: "5 days",
    stage: "Collecting",
    stageTone: "info",
  },
  {
    id: "r3",
    reference: "RFQ-7769",
    title: "Safety PPE — annual contract",
    quotes: 12,
    closesIn: "Closing",
    stage: "Evaluating",
    stageTone: "amber",
  },
];

export interface Quotation {
  id: string;
  supplier: string;
  reference: string;
  amount: { amount: string; currency: string };
  rating: string;
  recommended: boolean;
}

export const quotations: Quotation[] = [
  {
    id: "q1",
    supplier: "Meghna Industrial Ltd.",
    reference: "RFQ-7769",
    amount: { amount: "11,90,000", currency: "BDT" },
    rating: "Tier A",
    recommended: true,
  },
  {
    id: "q2",
    supplier: "Delta Sourcing Co.",
    reference: "RFQ-7769",
    amount: { amount: "12,45,000", currency: "BDT" },
    rating: "Tier B",
    recommended: false,
  },
  {
    id: "q3",
    supplier: "Padma Traders",
    reference: "RFQ-7775",
    amount: { amount: "8,05,000", currency: "BDT" },
    rating: "Tier A",
    recommended: false,
  },
];

export interface ActivityItem {
  id: string;
  actor: string;
  action: string;
  target: string;
  time: string;
  tone: StatusTone;
}

export const activity: ActivityItem[] = [
  {
    id: "ac1",
    actor: "Meghna Industrial Ltd.",
    action: "submitted a quotation for",
    target: "RFQ-7769",
    time: "12m ago",
    tone: "primary",
  },
  {
    id: "ac2",
    actor: "Tanvir Hasan",
    action: "requested approval on",
    target: "REQ-2038",
    time: "1h ago",
    tone: "warning",
  },
  {
    id: "ac3",
    actor: "Delta Sourcing Co.",
    action: "updated lead time for",
    target: "RFQ-7769",
    time: "3h ago",
    tone: "info",
  },
  {
    id: "ac4",
    actor: "Sadia Islam",
    action: "created",
    target: "RFQ-7781",
    time: "Yesterday",
    tone: "neutral",
  },
];
