import { Download } from "lucide-react";

import { IvButton } from "@/components/iv/iv-button";
import { IvNotFound } from "@/components/iv/iv-not-found";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ActiveRfqs } from "./components/active-rfqs";
import { ActivityFeed } from "./components/activity-feed";
import { ApprovalQueue } from "./components/approval-queue";
import { KpiCards } from "./components/kpi-cards";
import { QuotationsPanel } from "./components/quotations-panel";
import { Sidebar } from "./components/sidebar";
import { Topbar } from "./components/topbar";
// TODO(api): swap mockBuyerDashboardAdapter for the real adapter bound to the
// governed buyer contracts. The shell depends only on the adapter interface.
import { mockBuyerDashboardAdapter } from "./mock-adapter";

export default async function BuyerDashboardPage() {
  const [{ kpis, approvals, rfqs, quotations, activity }, shell] =
    await Promise.all([
      mockBuyerDashboardAdapter.getDashboardData(),
      mockBuyerDashboardAdapter.getShellContext(),
    ]);

  return (
    <div className="flex min-h-svh bg-background text-foreground">
      <Sidebar user={shell.user} badges={shell.navBadges} />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar notificationsLabel={shell.notificationsLabel} />

        <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight text-balance">
                  Buyer dashboard
                </h1>
                <p className="text-sm text-muted-foreground">
                  Overview of your sourcing activity and pending decisions.
                </p>
              </div>
              <IvButton variant="secondary" size="sm" className="gap-1.5">
                <Download className="size-4" />
                Export
              </IvButton>
            </div>

            <KpiCards metrics={kpis} />

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
              <div className="flex flex-col gap-6 xl:col-span-2">
                <ApprovalQueue items={approvals} />
                <ActiveRfqs items={rfqs} />
              </div>
              <div className="flex flex-col gap-6">
                <QuotationsPanel items={quotations} />
                <ActivityFeed items={activity} />
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Pending orders</CardTitle>
                <CardDescription>
                  Orders awaiting confirmation from awarded suppliers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <IvNotFound
                  title="Nothing here yet"
                  description="When an awarded supplier confirms an order, it will appear here."
                />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
