import { Router } from "express";
import voto from "./models/register/routes";
import token from "./models/tokens/routes";

const router = Router();
router.use("/api", voto);
router.use("/api/token", token);
export default router;
