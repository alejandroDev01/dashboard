import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { registroVotosSchema } from "../../../infraestructura/schema";
const prisma = new PrismaClient();

export const registerVotoAll = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { registros } = req.body;

    if (!Array.isArray(registros)) {
      res.status(400).json({
        msg: "El formato debe ser un array de registros",
      });
      return;
    }

    // Validar cada registro con Zod
    const validaciones = registros.map((registro) => {
      try {
        return registroVotosSchema.parse(registro);
      } catch (error) {
        return null;
      }
    });

    // Verificar si hay registros inválidos
    const registrosInvalidos = validaciones.filter((v) => v === null).length;
    if (registrosInvalidos > 0) {
      res.status(400).json({
        msg: `Se encontraron ${registrosInvalidos} registros con formato inválido`,
      });
      return;
    }

    // Crear todos los registros en la base de datos
    const ipPublica = String(req.headers["x-forwarded-for"] || req.ip);

    const resultados = await prisma.registro_votos.createMany({
      data: validaciones
        .filter((v): v is NonNullable<typeof v> => v !== null)
        .map((registro) => ({
          ...registro,
          id_public_user: ipPublica,
        })),
    });

    res.status(200).json({
      msg: `Se almacenaron ${resultados.count} registros correctamente`,
      registros_creados: resultados.count,
    });
  } catch (error) {
    console.error("Error al guardar registros:", error);
    res.status(500).json({
      msg: "Error interno al procesar los registros",
    });
  }
};
