import express from "express";

const app = express();
import cors from "cors";
import router from "./manage";

app.use(express.json());

app
  .get("/", (req, res) => {
    res.send("¡Servidor funcionando correctamente!");
  })
  .use("/api", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
