import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    await prisma.response.deleteMany({
      where: {
        formId: id,
      },
    });

    await prisma.formField.deleteMany({
      where: {
        formId: id,
      },
    });

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
      { error: "Failed to delete form" },
      { status: 500 }
    );
  }
}