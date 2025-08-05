import { products } from "@/db"
import { NextResponse } from "next/server"

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id)
  const product = products.find((p) => p.id === id)
  if (!product)  return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  return NextResponse.json(product)
}
