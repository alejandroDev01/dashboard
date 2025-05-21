import express from "express";
import multer from "multer";
const app = express();
import router from "./manage";
const upload = multer();

app.use((req, res, next) => {
  const ipInfo = {
    "x-forwarded-for": req.headers["x-forwarded-for"] || "no disponible",
    "x-real-ip": req.headers["x-real-ip"] || "no disponible",
    remoteAddress: req.socket.remoteAddress || "no disponible",
    "cf-connecting-ip": req.headers["cf-connecting-ip"] || "no disponible",
    "true-client-ip": req.headers["true-client-ip"] || "no disponible",
    "x-client-ip": req.headers["x-client-ip"] || "no disponible",
    forwarded: req.headers["forwarded"] || "no disponible",
  };

  console.log(
    "Información de IP del cliente:",
    JSON.stringify(ipInfo, null, 2)
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.none());
app.use(router);
const PORT = process.env.PORT || (3060 as number);
app.listen(3060, "0.0.0.0", () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`También accesible en http://0.0.0.0:${PORT}`);
});
