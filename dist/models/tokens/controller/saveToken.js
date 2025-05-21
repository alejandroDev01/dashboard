"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardadoToken = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const GuardadoToken = async (req, res) => {
    try {
        const { tokens } = req.body;
        // Verificar si tokens es un array
        if (!Array.isArray(tokens)) {
            res.status(400).json({
                msg: "El formato debe ser un array de tokens",
            });
            return;
        }
        // Crear el array de objetos para la inserción masiva
        const tokensData = tokens.map((token) => ({
            token: token,
            estado: true,
        }));
        // Guardar todos los tokens de forma simultánea
        const resultado = await prisma.token.createMany({
            data: tokensData,
        });
        if (!resultado) {
            res.status(400).json({
                msg: "No se pudieron guardar los tokens",
            });
            return;
        }
        res.status(200).json({
            msg: `Se almacenaron ${resultado.count} tokens correctamente`,
            tokens_guardados: resultado.count,
        });
    }
    catch (error) {
        console.error("Error al guardar tokens:", error);
        res.status(500).json({
            msg: "Error interno al procesar los tokens",
        });
    }
};
exports.GuardadoToken = GuardadoToken;
