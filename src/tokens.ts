import { PrismaClient } from "@prisma/client";
import fs from "fs/promises";

const prisma = new PrismaClient();

async function main() {
  // Lee el JSON (puede ser tokens.json o un string desde alguna API)
  const raw = await fs.readFile("tokens.json", "utf8");
  const tokens = JSON.parse(raw);

  // Inserta en bloque
  await prisma.token.createMany({
    data: tokens.map((t: any) => ({
      id: t.id,
      token: t.token,
      numero: t.numero,
      dominio: t.dominio,
      estado: t.estado,
      createdAt: new Date(t.createdAt),
    })),
    skipDuplicates: true, // evita error si el id ya existe
  });

  console.log("✔ Tokens importados");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
