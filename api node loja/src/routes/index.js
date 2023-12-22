import express from "express";
import clientes from "./clientesRoutes.js";
import endereco from "./enderecosRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));
  
    app.use(express.json(), clientes,endereco);
  };

export default routes;