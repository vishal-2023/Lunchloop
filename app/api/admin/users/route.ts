import { prisma } from "@/lib/prisma";
import { verifyAdmin } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await verifyAdmin(req);
    const users = await prisma.user.findMany({
      include: { orders: true, subscriptions: true }
    });
    return NextResponse.json(users);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 401 });
  }
}
