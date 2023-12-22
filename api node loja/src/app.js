import express from "express";
import conectaNaDatabase from "./config/dbConnect.js"
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

const app = express();
routes(app);

export default app;

