import { z } from "zod";

export const metodoEnum = z.enum(["TUXLER", "MODO_AVION"]);

export const tipoEnum = z.enum([
  "PRE_ENVIO",
  "VOTO_TOKEN",
  "VOTO_GERACION_TOKEN_ALEATORIA",
  "SIMULACION",
]);

export const registroVotosSchema = z.object({
  timestamp: z.string().optional(),
  ip_publica: z.string().optional(),
  id_public_user: z.string().optional(),
  numero: z.string().optional(),
  latitud: z.string().optional(),
  longitud: z.string().optional(),
  ci: z.string().optional(),
  dia_nacimiento: z.string().optional(),
  mes_nacimiento: z.string().optional(),
  anio_nacimiento: z.string().optional(),
  pais: z.string().optional(),
  ciudad: z.string().optional(),
  candidato: z.string().optional(),
  tipo: tipoEnum.optional(),
  token_solicutd: z.string().optional(),
  codigo_respuesta: z.string().optional(),
  respuesta: z.string().optional(),
  id_dispositivo: z.string().optional(),
  metodo: metodoEnum.optional(),
  refer_envio: z.string().optional(),
  token_refer: z.string().optional(),
});

export type RegistroVotos = z.infer<typeof registroVotosSchema>;
export const registroVotosSchemaALl = z.object({
  registros: z.array(registroVotosSchema),
});
