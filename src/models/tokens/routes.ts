import { Router } from "express";
import { GetToken } from "./controller/getToken";
import { GuardadoToken } from "./controller/saveToken";

const token = Router();
token.get("/", GetToken);
token.post("/", GuardadoToken);

export default token;
