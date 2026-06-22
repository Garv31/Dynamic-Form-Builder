import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const data = await req.json();

    console.log("FORM ID:", id);
    console.log("DATA:", data);

    const response = await prisma.response.create({
      data: {
        formId: id,
        data,
      },
    });

    return NextResponse.json({
      success: true,
      response,
    });
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