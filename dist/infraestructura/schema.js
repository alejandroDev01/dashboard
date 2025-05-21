"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registroVotosSchema = exports.tipoEnum = exports.metodoEnum = void 0;
const zod_1 = require("zod");
exports.metodoEnum = zod_1.z.enum(["TUXLER", "MODO_AVION"]);
exports.tipoEnum = zod_1.z.enum([
    "PRE_ENVIO",
    "VOTO_TOKEN",
    "VOTO_GERACION_TOKEN_ALEATORIA",
    "SIMULACION",
]);
exports.registroVotosSchema = zod_1.z.object({
    timestamp: zod_1.z.string().optional(),
    ip_publica: zod_1.z.string().optional(),
    id_public_user: zod_1.z.string().optional(),
    numero: zod_1.z.string().optional(),
    latitud: zod_1.z.string().optional(),
    longitud: zod_1.z.string().optional(),
    ci: zod_1.z.string().optional(),
    dia_nacimiento: zod_1.z.string().optional(),
    mes_nacimiento: zod_1.z.string().optional(),
    anio_nacimiento: zod_1.z.string().optional(),
    pais: zod_1.z.string().optional(),
    ciudad: zod_1.z.string().optional(),
    candidato: zod_1.z.string().optional(),
    tipo: exports.tipoEnum,
    token_solicutd: zod_1.z.string().optional(),
    codigo_respuesta: zod_1.z.string().optional(),
    respuesta: zod_1.z.string().optional(),
    id_dispositivo: zod_1.z.string().optional(),
    metodo: exports.metodoEnum,
    refer_envio: zod_1.z.string().optional(),
    token_refer: zod_1.z.string().optional(),
});
