import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export const GetToken = async (req: Request, res: Response): Promise<void> => {
  try {
    const eightMinutesAgo = new Date(Date.now() - (9 * 60 + 15) * 1000);

    const tokensActivos = await prisma.token.findMany({
      where: {
        estado: true,
        createdAt: {
          gte: eightMinutesAgo,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        token: true,
        numero: true,
      },
      take: 2,
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

    const dataConNumeroSeguro = tokensActivos.map((token) => ({
      ...token,
      numero: token.numero ?? "",
    }));

    res.status(200).json({
      msg: `Se obtuvieron ${dataConNumeroSeguro.length} token(s)`,
      data: dataConNumeroSeguro,
    });
  } catch (error) {
    console.error("Error al procesar tokens:", error);
    res.status(500).json({
      msg: "Error interno al procesar los tokens",
    });
  }
};
