import express from "express";
import enrutadorEventos from "./rutas/rutas.js";
import morgan from "morgan";

/* const express = require("express") --- forma antigua */

const servidor = express();
 
servidor.use(express.json()); // para recibir json de los servidorres
servidor.use(morgan("dev"));
servidor.use("/eventos",enrutadorEventos);  // raiz del programa



servidor.get("/", (solicitud,respuesta)=>{
    respuesta.json({
         Mensaje: "Trabajando"
    })
});

export default servidor;