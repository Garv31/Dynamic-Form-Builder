import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const data = await req.json();

    const response = await prisma.response.create({
      data: {
        formId: id,
        data,
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to submit form",
      },
      {
        status: 500,
      }
    );
  }
}