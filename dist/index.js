"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const app = (0, express_1.default)();
const manage_1 = __importDefault(require("./manage"));
const upload = (0, multer_1.default)();
app.use((req, res, next) => {
    const ipInfo = {
        "x-forwarded-for": req.headers["x-forwarded-for"] || "no disponible",
        "x-real-ip": req.headers["x-real-ip"] || "no disponible",
        remoteAddress: req.socket.remoteAddress || "no disponible",
        "cf-connecting-ip": req.headers["cf-connecting-ip"] || "no disponible",
        "true-client-ip": req.headers["true-client-ip"] || "no disponible",
        "x-client-ip": req.headers["x-client-ip"] || "no disponible",
        forwarded: req.headers["forwarded"] || "no disponible",
        referer: req.headers.referer || "no disponible",
        origin: req.headers.origin || "no disponible",
        host: req.headers.host || "no disponible",
        userAgent: req.headers["user-agent"] || "no disponible",
        headers: req.headers,
        body: req.body,
    };
    console.log("Información del cliente:", JSON.stringify(ipInfo, null, 2));
    next();
});
app.get("/", (req, res) => {
    res.status(200).json({
        status: "OK si funciona ",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
    });
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(upload.none());
app.use(manage_1.default);
const PORT = process.env.PORT || 3060;
app.listen(3060, "0.0.0.0", () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log(`También accesible en http://0.0.0.0:${PORT}`);
});
