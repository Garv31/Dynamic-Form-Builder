import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export default async function AnalyticsPage() {
  const session = await auth();

  const totalForms = await prisma.form.count({
    where: {
      userId: session?.user?.id,
    },
  });

  const totalResponses = await prisma.response.count({
    where: {
      form: {
        userId: session?.user?.id,
      },
    },
  });

  const recentForms = await prisma.form.findMany({
    where: {
      userId: session?.user?.id,
    },
    include: {
      responses: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">
        Analytics Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">
            Total Forms
          </h2>

          <p className="text-5xl font-bold mt-2">
            {totalForms}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">
            Total Responses
          </h2>

          <p className="text-5xl font-bold mt-2">
            {totalResponses}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Recent Forms
        </h2>

        <div className="space-y-3">
          {recentForms.map((form) => (
            <div
              key={form.id}
              className="flex justify-between border-b pb-3"
            >
              <span>{form.title}</span>

              <span>
                {form.responses.length} responses
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}