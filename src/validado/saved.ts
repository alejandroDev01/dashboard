import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();
export const saveValidado = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { body } = req;
  const ipPublica = req.socket.remoteAddress;
  const register = await prisma.validado.create({
    data: {
      ...body,
      id_public_user: ipPublica as string,
    },
  });
  if (!register) {
    res.status(400).json({
      msg: "No se pudo guardar",
    });
    return;
  }
  res.status(200).json({
    msg: "Guardado",
  });
};
