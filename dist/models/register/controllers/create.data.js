"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerVoto = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const registerVoto = async (req, res) => {
    const { body } = req;
    const ipPublica = req.headers["x-forwarded-for"] || req.ip;
    const register = await prisma.registro_votos.create({
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
        msg: "Se almaceno de forma correcta , tipo: " + body.tipo,
    });
};
exports.registerVoto = registerVoto;
