import StatsCard from "@/components/dashboard/StatsCard";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Welcome Back 👋
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Forms" value="24" />
        <StatsCard title="Responses" value="532" />
        <StatsCard title="Views" value="1245" />
        <StatsCard title="Active Forms" value="12" />
      </div>

      <AnalyticsChart />
    </div>
  );
}