import { Router } from "express";
import { registerVoto } from "./controllers/create.data";
import { validate } from "../../infraestructura/validated";
import {
  registroVotosSchema,
  registroVotosSchemaALl,
} from "../../infraestructura/schema";
import { registerVotoAll } from "./controllers/create.all";

const voto = Router();
voto.post("/register", validate(registroVotosSchema), registerVoto);
voto.post("/all", validate(registroVotosSchemaALl), registerVotoAll);

export default voto;
