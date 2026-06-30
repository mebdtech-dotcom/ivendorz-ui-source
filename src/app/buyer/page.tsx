import { CircleUser, LogOut, Settings } from "lucide-react";

import { BuyerShell } from "./components/buyer-shell";
import { DashboardHeader } from "./components/dashboard-header";
// TODO(api): swap mockBuyerDashboardAdapter for the real adapter bound to the
// governed buyer contracts. The shell depends only on the adapter interface.
import { mockBuyerDashboardAdapter } from "./mock-adapter";

export default async function BuyerDashboardPage() {
  const shell = await mockBuyerDashboardAdapter.getShellContext();

  return (
    <BuyerShell
      title="Dashboard"
      description="Overview of your sourcing activity and pending decisions."
      breadcrumbs={[{ label: "Buyer", href: "#" }, { label: "Dashboard" }]}
      activeNavId="dashboard"
      user={shell.user}
      navBadges={shell.navBadges}
      notificationsLabel={shell.notificationsLabel}
    >
      {/* TODO(api): replace these literal values with caller-supplied data
          bound to the governed session/company contracts. */}
      <DashboardHeader
        greeting="Good Morning"
        userName="Musa"
        companyName="ME BD TECH LTD"
        role="Procurement Manager"
        initials="MB"
        profileItems={[
          { id: "profile", label: "Profile", icon: <CircleUser /> },
          { id: "settings", label: "Settings", icon: <Settings /> },
          { id: "sign-out", label: "Sign out", icon: <LogOut />, variant: "destructive" },
        ]}
      />

      {/* KPI cards and dashboard widgets are wired up separately. */}
    </BuyerShell>
  );
}
