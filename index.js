'use strict';

import "dotenv/config";
import "./conexionBD.js";
import servidor from "./servidor.js";
 

servidor.listen(2000, ()=>{
    console.log("servidor corriendo en el puerto 2000");
});
