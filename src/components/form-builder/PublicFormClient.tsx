"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PublicFormClient({
  form,
}: {
  form: any;
}) {
  const router = useRouter();

  const [values, setValues] = useState<
    Record<string, string>
  >({});

  const handleChange = (
    label: string,
    value: string
  ) => {
    setValues((prev) => ({
      ...prev,
      [label]: value,
    }));
  };

  const handleSubmit = async () => {
    const response = await fetch(
      `/api/forms/${form.id}/submit`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    if (response.ok) {
      router.push("/thank-you");
    } else {
      alert("Failed to submit");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-2">
        {form.title}
      </h1>

      <p className="text-gray-500 mb-8">
        {form.description}
      </p>

      <div className="space-y-6">
        {form.fields.map((field: any) => (
          <div key={field.id}>
            <label className="block mb-2 font-medium">
              {field.label}
            </label>

            <input
              className="w-full border rounded-lg p-3"
              placeholder={field.label}
              onChange={(e) =>
                handleChange(
                  field.label,
                  e.target.value
                )
              }
            />
          </div>
        ))}

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Submit Form
        </button>
      </div>
    </div>
  );
}