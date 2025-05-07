"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const express_1 = require("express");
const routes_1 = __importDefault(require("./routes"));
const router = (0, express_1.Router)();
router.post("/solicitudes", async (req, res) => {
    const { solicitudes } = req.body;
    if (!Array.isArray(solicitudes) || solicitudes.length === 0) {
        res.status(400).json({
            status: "error",
            error: "El array de solicitudes es inválido o está vacío",
        });
        return;
    }
    try {
        // Procesar cada solicitud y guardar en la base de datos
        for (const solicitud of solicitudes) {
            const { proxy, ipPublica, status, header, body, method } = solicitud;
            // Crear el proxy relacionado
            const proxyRecord = await prisma.proxy.create({
                data: {
                    host: proxy?.host || null,
                    port: proxy?.puerto || null,
                    protocol: proxy?.protocolo || null,
                    createdAt: new Date(),
                },
            });
            // Crear la solicitud asociada al proxy
            await prisma.solicitudes.create({
                data: {
                    proxy: {
                        connect: {
                            id: proxyRecord.id,
                        },
                    },
                    ipPublica: ipPublica === "error" ? null : ipPublica,
                    status: status === "error" ? status : status,
                    header: header === "error" ? null : header,
                    body: body === "error" ? null : body,
                    method: method || null,
                    createdAt: new Date(),
                },
            });
        }
        res.status(201).json({
            status: "success",
            message: "Todas las solicitudes se guardaron exitosamente",
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
            res.status(500).json({
                status: "error",
                error: error.message,
            });
        }
        else {
            console.error("Error desconocido", error);
            res.status(500).json({
                status: "error",
                error: "Error desconocido",
            });
        }
    }
});
router.use("/v1", routes_1.default);
exports.default = router;
