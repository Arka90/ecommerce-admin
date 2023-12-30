import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name, theme_color } = body;

    if (!name) return new NextResponse("Name is required", { status: 400 });
    if (!theme_color)
      return new NextResponse("Color theme is required", { status: 400 });
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const store = await prismadb.store.create({
      data: {
        name,
        theme_color,
        userId,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORE_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
