"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var client_1 = require("@prisma/client");
var adapter_better_sqlite3_1 = require("@prisma/adapter-better-sqlite3");
var adapter = new adapter_better_sqlite3_1.PrismaBetterSqlite3({ url: "file:./dev.db" });
var prisma = new client_1.PrismaClient({ adapter: adapter });
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var balita1, balita2, balita3, bumil1, bumil2, lansia1, lansia2, today, lastMonth, twoMonthsAgo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Menjalankan proses penyemaian data (Seeding)...");
                    // Clear existing data
                    return [4 /*yield*/, prisma.pemeriksaan.deleteMany({})];
                case 1:
                    // Clear existing data
                    _a.sent();
                    return [4 /*yield*/, prisma.sasaran.deleteMany({})];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, prisma.sasaran.create({
                            data: {
                                nama: 'Budi Santoso',
                                nik: '3201011111110001',
                                tglLahir: new Date('2023-01-15'),
                                kategori: 'balita',
                                jk: 'L',
                                namaIbu: 'Siti Aminah',
                                alamat: 'Jl. Merdeka No 1',
                            }
                        })];
                case 3:
                    balita1 = _a.sent();
                    return [4 /*yield*/, prisma.sasaran.create({
                            data: {
                                nama: 'Aisyah',
                                nik: '3201011111110002',
                                tglLahir: new Date('2024-05-10'),
                                kategori: 'balita',
                                jk: 'P',
                                namaIbu: 'Fitriani',
                                alamat: 'Jl. Melati Blok B',
                            }
                        })];
                case 4:
                    balita2 = _a.sent();
                    return [4 /*yield*/, prisma.sasaran.create({
                            data: {
                                nama: 'Kevin (Stunting)',
                                nik: '3201011111110003',
                                tglLahir: new Date('2022-11-20'),
                                kategori: 'balita',
                                jk: 'L',
                                namaIbu: 'Maria',
                                alamat: 'Jl. Kenanga 3',
                            }
                        })];
                case 5:
                    balita3 = _a.sent();
                    return [4 /*yield*/, prisma.sasaran.create({
                            data: {
                                nama: 'Rina (Risiko KEK)',
                                nik: '3201011111110004',
                                tglLahir: new Date('1998-08-10'),
                                kategori: 'ibu_hamil',
                                jk: 'P',
                                usiaHamil: 24,
                                alamat: 'Jl. Mawar 4',
                            }
                        })];
                case 6:
                    bumil1 = _a.sent();
                    return [4 /*yield*/, prisma.sasaran.create({
                            data: {
                                nama: 'Desy (Sehat)',
                                nik: '3201011111110005',
                                tglLahir: new Date('1995-12-05'),
                                kategori: 'ibu_hamil',
                                jk: 'P',
                                usiaHamil: 12,
                                alamat: 'Perumahan Indah',
                            }
                        })];
                case 7:
                    bumil2 = _a.sent();
                    return [4 /*yield*/, prisma.sasaran.create({
                            data: {
                                nama: 'Bpk. Sugeng (Hipertensi)',
                                nik: '3201011111110006',
                                tglLahir: new Date('1950-02-15'),
                                kategori: 'lansia',
                                jk: 'L',
                                alamat: 'Desa Lama RT 02',
                            }
                        })];
                case 8:
                    lansia1 = _a.sent();
                    return [4 /*yield*/, prisma.sasaran.create({
                            data: {
                                nama: 'Ibu Karni (Normal)',
                                nik: '3201011111110007',
                                tglLahir: new Date('1958-07-22'),
                                kategori: 'lansia',
                                jk: 'P',
                                alamat: 'Desa Baru RT 01',
                            }
                        })];
                case 9:
                    lansia2 = _a.sent();
                    today = new Date();
                    lastMonth = new Date();
                    lastMonth.setMonth(today.getMonth() - 1);
                    twoMonthsAgo = new Date();
                    twoMonthsAgo.setMonth(today.getMonth() - 2);
                    // Balita 1 (Budi) - Pertumbuhan Normal
                    return [4 /*yield*/, prisma.pemeriksaan.create({ data: { sasaranId: balita1.id, tanggal: twoMonthsAgo, bb: 10.2, tb: 85, statusGizi: 'Normal' } })];
                case 10:
                    // Balita 1 (Budi) - Pertumbuhan Normal
                    _a.sent();
                    return [4 /*yield*/, prisma.pemeriksaan.create({ data: { sasaranId: balita1.id, tanggal: lastMonth, bb: 10.8, tb: 86, statusGizi: 'Normal' } })];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, prisma.pemeriksaan.create({ data: { sasaranId: balita1.id, tanggal: today, bb: 11.5, tb: 87, statusGizi: 'Normal', imunisasi: 'Campak-Rubella-2' } })];
                case 12:
                    _a.sent();
                    // Balita 2 (Aisyah) - Bayi Sehat
                    return [4 /*yield*/, prisma.pemeriksaan.create({ data: { sasaranId: balita2.id, tanggal: today, bb: 6.5, tb: 60, statusGizi: 'Normal', imunisasi: 'DPT-HB-Hib-1' } })];
                case 13:
                    // Balita 2 (Aisyah) - Bayi Sehat
                    _a.sent();
                    // Balita 3 (Kevin) - Stunting / Gizi Kurang
                    return [4 /*yield*/, prisma.pemeriksaan.create({ data: { sasaranId: balita3.id, tanggal: lastMonth, bb: 9.0, tb: 78, statusGizi: 'Stunting' } })];
                case 14:
                    // Balita 3 (Kevin) - Stunting / Gizi Kurang
                    _a.sent();
                    return [4 /*yield*/, prisma.pemeriksaan.create({ data: { sasaranId: balita3.id, tanggal: today, bb: 9.2, tb: 79, statusGizi: 'Stunting', catatan: 'Perlu PMT (Pemberian Makanan Tambahan)' } })];
                case 15:
                    _a.sent();
                    // Ibu Hamil 1 (Rina) - LILA < 23.5 (Risiko KEK)
                    return [4 /*yield*/, prisma.pemeriksaan.create({ data: { sasaranId: bumil1.id, tanggal: today, td: '110/70', lilaBumil: 22.0, djj: 140, fe: 'Ya', statusGizi: 'Risiko KEK' } })];
                case 16:
                    // Ibu Hamil 1 (Rina) - LILA < 23.5 (Risiko KEK)
                    _a.sent();
                    // Ibu Hamil 2 (Desy) - Normal
                    return [4 /*yield*/, prisma.pemeriksaan.create({ data: { sasaranId: bumil2.id, tanggal: today, td: '120/80', lilaBumil: 25.0, djj: 145, fe: 'Ya', statusGizi: 'Normal' } })];
                case 17:
                    // Ibu Hamil 2 (Desy) - Normal
                    _a.sent();
                    // Lansia 1 (Sugeng) - Hipertensi & Gula
                    return [4 /*yield*/, prisma.pemeriksaan.create({ data: { sasaranId: lansia1.id, tanggal: today, tdLansia: '160/95', gula: 210, kolesterol: 190, keluhan: 'Sering Pusing' } })];
                case 18:
                    // Lansia 1 (Sugeng) - Hipertensi & Gula
                    _a.sent();
                    // Lansia 2 (Karni) - Sehat
                    return [4 /*yield*/, prisma.pemeriksaan.create({ data: { sasaranId: lansia2.id, tanggal: today, tdLansia: '125/80', gula: 110, kolesterol: 160, keluhan: 'Tidak ada' } })];
                case 19:
                    // Lansia 2 (Karni) - Sehat
                    _a.sent();
                    console.log("Seeding selesai! 7 Sasaran dan histori pemeriksaan berhasil dimasukkan.");
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
