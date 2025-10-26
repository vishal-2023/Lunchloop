import { prisma } from "@/lib/prisma";
import { verifyAdmin } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await verifyAdmin(req);
    const user = await prisma.user.findUnique({
      where: { id: params.id },
      include: { orders: true, subscriptions: true }
    });
    return NextResponse.json(user);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 401 });
  }
}
