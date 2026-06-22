"use client";

import { useState } from "react";
import FieldPalette from "@/components/form-builder/FieldPalette";
import FormCanvas from "@/components/form-builder/FormCanvas";

interface Field {
  id: string;
  type: string;
  label: string;
  required: boolean;
}

export default function CreateFormPage() {
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");

  const [fields, setFields] = useState<Field[]>([]);

  const addField = (type: string) => {
    setFields((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        type,
        label: `${type} Field`,
        required: false,
      },
    ]);
  };

  const updateField = (
    id: string,
    label: string
  ) => {
    setFields((prev) =>
      prev.map((field) =>
        field.id === id
          ? { ...field, label }
          : field
      )
    );
  };

  const toggleRequired = (id: string) => {
    setFields((prev) =>
      prev.map((field) =>
        field.id === id
          ? {
              ...field,
              required: !field.required,
            }
          : field
      )
    );
  };

  const deleteField = (id: string) => {
    setFields((prev) =>
      prev.filter((field) => field.id !== id)
    );
  };

  return (
    <div className="grid lg:grid-cols-4 gap-6">
      <div>
        <FieldPalette onAddField={addField} />
      </div>

      <div className="lg:col-span-3">
        <FormCanvas
          formTitle={formTitle}
          setFormTitle={setFormTitle}
          formDescription={formDescription}
          setFormDescription={setFormDescription}
          fields={fields}
          updateField={updateField}
          toggleRequired={toggleRequired}
          deleteField={deleteField}
        />
      </div>
    </div>
  );
}