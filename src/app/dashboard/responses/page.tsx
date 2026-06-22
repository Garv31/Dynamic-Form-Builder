import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export default async function ResponsesPage() {
  const session = await auth();

  const responses = await prisma.response.findMany({
    where: {
      form: {
        userId: session?.user?.id,
      },
    },
    include: {
      form: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold">
          Form Responses
        </h1>

        <p className="text-gray-500 mt-2 text-lg">
          View all submitted responses
        </p>

        <p className="text-sm text-gray-400 mt-1">
          Total Responses: {responses.length}
        </p>
      </div>

      {responses.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 shadow-sm border text-center">
          <div className="text-6xl mb-4">📭</div>

          <h2 className="text-2xl font-bold">
            No Responses Yet
          </h2>

          <p className="text-gray-500 mt-2">
            Share your forms to start collecting responses.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {responses.map((response) => (
            <div
              key={response.id}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold">
                    {response.form.title}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Submitted on{" "}
                    {new Date(
                      response.createdAt
                    ).toLocaleString()}
                  </p>
                </div>

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  Response
                </span>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                {Object.entries(
                  response.data as Record<
                    string,
                    string
                  >
                ).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between border-b last:border-b-0 py-3"
                  >
                    <span className="font-medium text-gray-600">
                      {key}
                    </span>

                    <span className="text-slate-900">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}