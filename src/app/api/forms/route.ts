import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET() {
  try {
    const forms = await prisma.form.findMany({
      include: {
        fields: true,
        responses: true,
      },
    });

    return NextResponse.json(forms);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch forms" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();

    const form = await prisma.form.create({
      data: {
        title: body.title,
        description: body.description,
        userId: session.user.id,

        fields: {
          create: body.fields.map((field: any) => ({
            label: field.label,
            type: field.type,
            required: field.required,
          })),
        },
      },

      include: {
        fields: true,
      },
    });

    return NextResponse.json(form);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create form" },
      { status: 500 }
    );
  }
}