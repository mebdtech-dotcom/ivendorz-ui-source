import { BuyerShell } from "./components/buyer-shell";
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
      {/* Content region — dashboard widgets are wired up separately. */}
    </BuyerShell>
  );
}
