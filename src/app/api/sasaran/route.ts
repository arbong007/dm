import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({ url: "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const kategori = searchParams.get('kategori');
    
    const sasaran = await prisma.sasaran.findMany({
      where: kategori ? { kategori } : undefined,
      orderBy: { createdAt: 'desc' }
    });
    
    return NextResponse.json(sasaran);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Convert dates if provided as strings
    if (data.tglLahir) {
      data.tglLahir = new Date(data.tglLahir);
    }
    if (data.hpht) {
      data.hpht = new Date(data.hpht);
    }
    if (data.usiaHamil) {
      data.usiaHamil = parseInt(data.usiaHamil, 10);
    }

    const newSasaran = await prisma.sasaran.create({
      data: {
        kategori: data.kategori,
        nama: data.nama,
        nik: data.nik || null,
        tglLahir: data.tglLahir,
        jk: data.jk || null,
        namaIbu: data.namaIbu || null,
        hp: data.hp || null,
        alamat: data.alamat || null,
        catatan: data.catatan || null,
        usiaHamil: data.usiaHamil || null,
        hpht: data.hpht || null,
      }
    });

    return NextResponse.json(newSasaran, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
