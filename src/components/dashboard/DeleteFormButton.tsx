"use client";

import { useRouter } from "next/navigation";

export default function DeleteFormButton({
  formId,
}: {
  formId: string;
}) {
  const router = useRouter();

  const deleteForm = async () => {
    const confirmDelete = confirm(
      "Are you sure?"
    );

    if (!confirmDelete) return;

    const res = await fetch(
      `/api/forms/${formId}`,
      {
        method: "DELETE",
      }
    );

    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <button
      onClick={deleteForm}
      className="bg-red-600 text-white px-4 py-2 rounded-lg"
    >
      Delete
    </button>
  );
}