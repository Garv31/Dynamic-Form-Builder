import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import DeleteFormButton from "@/components/dashboard/DeleteFormButton";
import CopyLinkButton from "@/components/dashboard/CopyLinkButton";

export default async function FormsPage() {
  const session = await auth();

  const forms = await prisma.form.findMany({
    where: {
      userId: session?.user?.id,
    },
    include: {
      responses: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold">
            My Forms
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Manage and track all your forms
          </p>

          <p className="text-sm text-gray-400 mt-1">
            Total Forms: {forms.length}
          </p>
        </div>

        <Link
          href="/dashboard/forms/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-md transition"
        >
          🚀 Create Form
        </Link>
      </div>

      {forms.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 shadow-sm border text-center">
          <div className="text-6xl mb-4">📝</div>

          <h2 className="text-2xl font-bold">
            No Forms Yet
          </h2>

          <p className="text-gray-500 mt-2">
            Create your first form to start collecting responses.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {forms.map((form) => (
            <div
              key={form.id}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold">
                      {form.title}
                    </h2>

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {form.responses.length} Responses
                    </span>
                  </div>

                  {form.description && (
                    <p className="text-gray-500 mt-3">
                      {form.description}
                    </p>
                  )}

                  <p className="text-sm text-gray-400 mt-4">
                    Created on{" "}
                    {new Date(
                      form.createdAt
                    ).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={`/form/${form.id}`}
                    target="_blank"
                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl transition"
                  >
                    Open Form
                  </Link>

                  <CopyLinkButton
                    formId={form.id}
                  />

                  <DeleteFormButton
                    formId={form.id}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}