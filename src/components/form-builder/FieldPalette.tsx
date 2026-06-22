"use client";

const fields = [
  "Text",
  "Email",
  "Number",
  "Textarea",
  "Dropdown",
  "Checkbox",
  "Radio",
  "Date",
];

interface Props {
  onAddField: (type: string) => void;
}

export default function FieldPalette({ onAddField }: Props) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <h2 className="font-semibold text-lg mb-4">
        Add Fields
      </h2>

      <div className="space-y-3">
        {fields.map((field) => (
          <button
            key={field}
            onClick={() => onAddField(field)}
            className="w-full bg-slate-100 hover:bg-blue-100 p-3 rounded-lg text-left transition"
          >
            + {field}
          </button>
        ))}
      </div>
    </div>
  );
}