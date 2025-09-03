export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prismadb from "@/lib/prismadb";
// ✅ Product Schema (Zod Validation)
export const ProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  designNumber: z.string().min(1, "Design number is required"),
  heroName: z.string().optional(),
  bio: z.string().optional(),

  rollCount: z.number().int().nonnegative(),
  colorVariationCount: z.number().int().nonnegative(),
  totalMeter: z.number().nonnegative(),
  width: z.number().positive(),
  price: z.number().nonnegative(),

  roomNo: z.string(),
  category: z.string().min(1, "Category is required"),
  dealer: z.string().optional(),

  media: z.array(
    z.object({
      type: z.enum(["Video", "Image", "Poster"]),
      url: z.string().url(),
    }),
  ),
});

// ✅ POST Handler
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 📝 Validate using Zod
    const parsed = ProductSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.format() },
        { status: 400 },
      );
    }

    const product = parsed.data;

    // 🔥 Ab yaha DB me save kar sakta hai (Mongo/Prisma ya direct driver se)
    const savedProduct = await prismadb.product.create({
      data: {
        ...product,
        roomNo: Number(product.roomNo),
        media: {
          create: product.media,
        },
      },
    });
    console.log("Saved", savedProduct);

    return NextResponse.json(
      { message: "Product created successfully", product },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST /product error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
