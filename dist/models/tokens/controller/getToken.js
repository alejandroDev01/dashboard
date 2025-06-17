"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetToken = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const GetToken = async (req, res) => {
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
    }
    catch (error) {
        console.error("Error al procesar tokens:", error);
        res.status(500).json({
            msg: "Error interno al procesar los tokens",
        });
    }
};
exports.GetToken = GetToken;
