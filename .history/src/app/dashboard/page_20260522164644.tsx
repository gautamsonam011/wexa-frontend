import KPIWidget from "@/components/charts/KPIWidget";

import RevenueLineChart
from "@/components/charts/LineChart";

import AnalyticsBarChart
from "@/components/charts/BarChart";

import DevicePieChart
from "@/components/charts/PieChart";

export default function DashboardPage() {

  return (
    <div>

      <h1 className="mb-8 text-4xl font-bold">

        Dashboard

      </h1>

      <div className="grid grid-cols-4 gap-6">

        <KPIWidget
          title="Revenue"
          value="$24,000"
          growth="+12%"
        />

        <KPIWidget
          title="Users"
          value="1,240"
          growth="+8%"
        />

        <KPIWidget
          title="Events"
          value="52K"
          growth="+15%"
        />

        <KPIWidget
          title="Conversion"
          value="8.5%"
          growth="+3%"
        />

      </div>

      <div className="mt-8 grid grid-cols-2 gap-6">

        <RevenueLineChart />

        <AnalyticsBarChart />

      </div>

      <div className="mt-8">

        <DevicePieChart />

      </div>

    </div>
  );
}