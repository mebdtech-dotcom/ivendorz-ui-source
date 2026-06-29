import { IvChip } from "@/components/iv/iv-chip";
import { IvMoney } from "@/components/iv/iv-money";
import { IvStat } from "@/components/iv/iv-stat";
import { kpis } from "../data";

export function KpiCards() {
  return (
    <section aria-label="Key metrics">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <IvStat
            key={kpi.id}
            label={kpi.label}
            value={
              kpi.money ? (
                <IvMoney
                  amount={kpi.money.amount}
                  currency={kpi.money.currency}
                  className="text-2xl font-semibold"
                />
              ) : (
                kpi.value
              )
            }
            hint={
              <IvChip tone={kpi.trendTone} className="mt-1">
                {kpi.trendLabel}
              </IvChip>
            }
          />
        ))}
      </div>
    </section>
  );
}
