import ReportCard
from "@/src/components/reports/ReportCard";

export default function ReportsPage() {

  return (
    <div>

      <h1 className="mb-8 text-4xl font-bold">

        Reports

      </h1>

      <div className="grid grid-cols-3 gap-6">

        <ReportCard
          name="Monthly Revenue"
          frequency="MONTHLY"
        />

        <ReportCard
          name="User Activity"
          frequency="WEEKLY"
        />

      </div>

    </div>
  );
}