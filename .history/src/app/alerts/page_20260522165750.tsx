"use client";

import AlertCard
from "@/components/alerts/AlertCard";

import {
  useAlerts,
} from "@/hooks/useAlerts";

export default function AlertsPage() {

  const { alerts } =
    useAlerts();

  return (

    <div className="min-h-screen bg-slate-950 p-8 text-white">

      <div className="mb-8">

        <h1 className="text-4xl font-bold">

          Alerts

        </h1>

        <p className="mt-2 text-slate-400">

          Monitor active system alerts
          and thresholds.

        </p>

      </div>

      {alerts?.length === 0 ? (

        <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center">

          <p className="text-slate-400">

            No alerts available

          </p>

        </div>

      ) : (

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

          {alerts?.map((alert: any) => (

            <AlertCard
              key={alert.id}
              title={alert.name}
              metric={alert.metric_name}
              threshold={alert.threshold}
            />

          ))}

        </div>

      )}

    </div>
  );
}