import { Router } from "express";
import ControladorEventos from "../controladores/controladorEventos.js"; 

const enrutadorEventos = Router();

enrutadorEventos.post('/:id', ControladorEventos.crearEvento);
enrutadorEventos.get('/:id', ControladorEventos.leerEvento);
enrutadorEventos.get('/', ControladorEventos.leerEventos);
enrutadorEventos.put('/:id', ControladorEventos.actualizarEvento);
enrutadorEventos.delete('/:id', ControladorEventos.eliminarEvento);

/* 
servidor.get('/', (solicitud, respuesta) => {
  respuesta.status(404).send("No encontrado");
}) */

  export default enrutadorEventos;