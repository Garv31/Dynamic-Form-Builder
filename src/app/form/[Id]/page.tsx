import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import PublicFormClient from "@/components/form-builder/PublicFormClient";

export default async function PublicFormPage({
  params,
}: {
  params: { id: string };
}) {
  const form = await prisma.form.findFirst({
    where: {
      id: params.id,
    },
    include: {
      fields: true,
    },
  });

  if (!form) {
    notFound();
  }

  return <PublicFormClient form={form} />;
}