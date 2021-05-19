import { PrismaClient } from "@prisma/client";

let prismaClient: PrismaClient

prismaClient = new PrismaClient();

export default prismaClient;
