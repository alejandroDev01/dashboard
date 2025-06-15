"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetToken = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const generarNumeroCochabamba = () => {
    const prefijos = ["+5917", "+59164"];
    const prefijo = prefijos[Math.floor(Math.random() * prefijos.length)];
    const numero = Math.floor(1000000 + Math.random() * 8999999);
    return `${prefijo}${numero}`;
};
const GetToken = async (req, res) => {
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
        const tokensModificados = [...tokensActivos];
        const indicesModificados = new Set();
        while (indicesModificados.size < 5 &&
            indicesModificados.size < tokensActivos.length) {
            const index = Math.floor(Math.random() * tokensActivos.length);
            if (!indicesModificados.has(index)) {
                indicesModificados.add(index);
                tokensModificados[index].numero = generarNumeroCochabamba();
            }
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
            data: tokensModificados,
        });
    }
    catch (error) {
        console.error("Error al procesar tokens:", error);
        res.status(500).json({
            msg: "Error interno al procesar los tokens",
        });
    }
};
exports.GetToken = GetToken;
