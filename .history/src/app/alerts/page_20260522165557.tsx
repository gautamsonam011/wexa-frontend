"use client";

import AlertCard
from "@/components/alerts/AlertCard";

import { useAlerts }
from "@/hooks/useAlerts";

export default function AlertsPage() {

  const { alerts } =
    useAlerts();

  return (
    <div>

      <h1 className="mb-8 text-4xl font-bold">

        Alerts

      </h1>

      <div className="grid grid-cols-3 gap-6">

        {alerts.map((alert) => (

          <AlertCard
            key={alert.id}
            title={alert.name}
            metric={
              alert.metric_name
            }
            threshold={
              alert.threshold
            }
          />

        ))}

      </div>

    </div>
  );
}