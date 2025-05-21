import { Router } from "express";
import voto from "./models/register/routes";

const router = Router();
router.use("/api", voto);
export default router;
