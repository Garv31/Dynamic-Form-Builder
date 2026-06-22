import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import StatsCard from "@/components/dashboard/StatsCard";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";

export default async function DashboardPage() {
  const session = await auth();

  const totalForms = await prisma.form.count({
    where: {
      userId: session?.user?.id,
    },
  });

  const totalResponses =
    await prisma.response.count({
      where: {
        form: {
          userId: session?.user?.id,
        },
      },
    });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-6xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Logged in as {session?.user?.email}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Forms"
          value={String(totalForms)}
        />

        <StatsCard
          title="Responses"
          value={String(totalResponses)}
        />

        <StatsCard
          title="Views"
          value={String(totalResponses)}
        />

        <StatsCard
          title="Active Forms"
          value={String(totalForms)}
        />
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
        <AnalyticsChart />
      </div>
    </div>
  );
}