import { Router } from "express";
import { preEnvio } from "./preenvio/preenvio";
import { saveValidado } from "./validado/saved";
import { test } from "./test";

const routerv2 = Router();
routerv2.post("/preenvio", preEnvio);
routerv2.post("/validado", saveValidado);
routerv2.post("/test", test);

export default routerv2;
