import { verifyAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await verifyAdmin(req);
    const user = await prisma.user.update({
      where: { id: params.id },
      data: { isActive: false }
    });
    return NextResponse.json({ message: "User deactivated", user });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 401 });
  }
}
