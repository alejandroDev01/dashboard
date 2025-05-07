import express from "express";
import multer from "multer";
const app = express();
import router from "./manage";
const upload = multer();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(upload.none());
app
  .get("/", (req, res) => {
    res.send("¡Servidor funcionando correctamente!");
  })

  .use("/api", router);

const PORT = process.env.PORT || 3060;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
