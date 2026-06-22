"use client";

interface Field {
  id: string;
  type: string;
  label: string;
  required: boolean;
}

interface Props {
  formTitle: string;
  setFormTitle: (value: string) => void;
  formDescription: string;
  setFormDescription: (value: string) => void;
  fields: Field[];
  updateField: (id: string, label: string) => void;
  toggleRequired: (id: string) => void;
  deleteField: (id: string) => void;
}

export default function FormCanvas({
  formTitle,
  setFormTitle,
  formDescription,
  setFormDescription,
  fields,
  updateField,
  toggleRequired,
  deleteField,
}: Props) {
  const saveForm = async () => {
    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formTitle,
          description: formDescription,
          fields,
        }),
      });

      if (response.ok) {
        alert("✅ Form Saved Successfully!");
      } else {
        alert("❌ Failed to save form");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 min-h-[700px]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4xl font-bold">
            Form Builder
          </h2>

          <p className="text-gray-500 mt-2">
            Build and customize your form
          </p>
        </div>

        <button
          onClick={saveForm}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:scale-105 transition"
        >
          Save Form
        </button>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 mb-8">
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Form Title
          </label>

          <input
            value={formTitle}
            onChange={(e) =>
              setFormTitle(e.target.value)
            }
            placeholder="Customer Feedback Form"
            className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Form Description
          </label>

          <textarea
            value={formDescription}
            onChange={(e) =>
              setFormDescription(e.target.value)
            }
            placeholder="Collect customer feedback..."
            className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
            rows={4}
          />
        </div>
      </div>

      {fields.length === 0 && (
        <div className="text-center py-24">
          <div className="text-6xl mb-4">
            📝
          </div>

          <h3 className="text-2xl font-bold">
            No Fields Added Yet
          </h3>

          <p className="text-gray-500 mt-2">
            Add fields from the left panel to start building your form.
          </p>
        </div>
      )}

      <div className="space-y-6">
        {fields.map((field) => (
          <div
            key={field.id}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-lg">
                  {field.type} Field
                </h3>

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                  {field.type}
                </span>
              </div>

              <button
                onClick={() =>
                  deleteField(field.id)
                }
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm transition"
              >
                Delete
              </button>
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-semibold">
                Field Label
              </label>

              <input
                value={field.label}
                onChange={(e) =>
                  updateField(
                    field.id,
                    e.target.value
                  )
                }
                className="w-full border border-gray-200 rounded-xl p-3"
              />
            </div>

            <div className="mb-5">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={field.required}
                  onChange={() =>
                    toggleRequired(field.id)
                  }
                />

                <span className="font-medium">
                  Required Field
                </span>
              </label>
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-semibold">
                Preview
              </label>

              <input
                placeholder={`Enter ${field.label}`}
                className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50"
              />
            </div>

            <div className="flex gap-3">
              {field.required && (
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                  Required
                </span>
              )}

              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                Editable
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}