import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({ url: "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

export async function PUT(request: Request, context: any) {
  // context.params is a Promise in Next 15, we need to await it
  try {
    const { id } = await context.params;
    const body = await request.json();
    
    const updated = await prisma.pemeriksaan.update({
      where: { id },
      data: {
        statusGizi: body.statusGizi,
        catatan: body.catatan
      }
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request, context: any) {
  try {
    const { id } = await context.params;
    await prisma.pemeriksaan.delete({
      where: { id }
    });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
