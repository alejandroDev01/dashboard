import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export const preEnvio = async (req: Request, res: Response): Promise<void> => {
  const { body } = req;

  const ipPublica = req.headers["x-forwarded-for"] || req.ip;

  const register = await prisma.preEnvio.create({
    data: {
      ...body,
      id_public_user: ipPublica,
    },
  });
  if (!register) {
    res.status(400).json({
      msg: "No se pudo guardar",
    });
    return;
  }
  res.status(200).json({
    msg: "Guardado el preenvido",
  });
};
