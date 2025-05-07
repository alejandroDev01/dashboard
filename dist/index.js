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
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(upload.none());
app
    .get("/", (req, res) => {
    res.send("¡Servidor funcionando correctamente!");
})
    .use("/api", manage_1.default);
const PORT = process.env.PORT || 3060;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
