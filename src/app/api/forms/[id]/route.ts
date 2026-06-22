import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    // delete responses first
    await prisma.response.deleteMany({
      where: {
        formId: id,
      },
    });

    // delete fields
    await prisma.formField.deleteMany({
      where: {
        formId: id,
      },
    });

    // delete form
    await prisma.form.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to delete form",
      },
      {
        status: 500,
      }
    );
  }
}