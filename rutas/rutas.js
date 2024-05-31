import { Router } from "express";
import ControladorEventos from "../controladores/controladorEventos.js"; 

const enrutadorEventos = Router();

enrutadorEventos.post('/:id', ControladorEventos.crearUsuario);
enrutadorEventos.get('/:id', ControladorEventos.leerUsuario);
enrutadorEventos.get('/', ControladorEventos.leerUsuarios);
enrutadorEventos.put('/:id', ControladorEventos.actualizarUsuario);
enrutadorEventos.delete('/:id', ControladorEventos.eliminarUsuario);
/* 
servidor.get('/', (solicitud, respuesta) => {
  respuesta.status(404).send("No encontrado");
}) */

  export default enrutadorEventos;