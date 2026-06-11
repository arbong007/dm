import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({ url: "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

export async function GET(request: Request) {
  try {
    const totalSasaran = await prisma.sasaran.count();
    const balitaCount = await prisma.sasaran.count({ where: { kategori: 'balita' } });
    const bumilCount = await prisma.sasaran.count({ where: { kategori: 'ibu_hamil' } });
    const lansiaCount = await prisma.sasaran.count({ where: { kategori: 'lansia' } });

    const totalPemeriksaan = await prisma.pemeriksaan.count();
    
    // Simplistic aggregations
    return NextResponse.json({
      totalSasaran,
      balitaCount,
      bumilCount,
      lansiaCount,
      totalPemeriksaan
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
