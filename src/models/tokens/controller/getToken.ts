import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export const GetToken = async (req: Request, res: Response): Promise<void> => {
  try {
    const tokensActivos = await prisma.token.findMany({
      where: {
        estado: true,
      },
      select: {
        id: true,
        token: true,
        numero: true,
      },
      orderBy: {
        createdAt: "asc",
      },
      take: 10,
    });

    if (!tokensActivos || tokensActivos.length === 0) {
      res.status(404).json({
        msg: "No se encontraron tokens disponibles",
      });
      return;
    }

    const tokenIds = tokensActivos.map((token) => token.id);

    await prisma.token.updateMany({
      where: {
        id: {
          in: tokenIds,
        },
      },
      data: {
        estado: false,
      },
    });

    res.status(200).json({
      msg: `Se obtuvieron ${tokensActivos.length} tokens (5 con números generados) y se marcaron como usados`,
      data: tokensActivos,
    });
  } catch (error) {
    console.error("Error al procesar tokens:", error);
    res.status(500).json({
      msg: "Error interno al procesar los tokens",
    });
  }
};
