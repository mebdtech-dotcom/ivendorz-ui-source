import { IvChip } from "@/components/iv/iv-chip";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { activity } from "../data";

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Supplier activity</CardTitle>
        <CardDescription>Recent events across your requests.</CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="relative flex flex-col gap-5 before:absolute before:left-[5px] before:top-1 before:h-full before:w-px before:bg-border">
          {activity.map((item) => (
            <li key={item.id} className="relative flex gap-3 pl-5">
              <span
                className="absolute left-0 top-1.5 size-2.5 rounded-full bg-primary ring-4 ring-card"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-1">
                <p className="text-sm text-foreground">
                  <span className="font-medium">{item.actor}</span>{" "}
                  {item.action}{" "}
                  <span className="font-mono text-xs text-muted-foreground">
                    {item.target}
                  </span>
                </p>
                <div className="flex items-center gap-2">
                  <IvChip tone={item.tone} className="px-1.5">
                    {item.target.startsWith("RFQ") ? "RFQ" : "Requisition"}
                  </IvChip>
                  <span className="text-xs text-muted-foreground">
                    {item.time}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
