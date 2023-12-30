import { PrismaClient } from "@prisma/client";

// adding prisma to global this
declare global {
  var prisma: PrismaClient | undefined;
}

// making prisma db
const prismadb = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
