import { Schema } from "mongoose"; // es lo que permite decirme cual es la estructura del documento
import { model } from "mongoose";

// vamos a crear un esquema

const esquemaEvento = new Schema( // estoy creando un esquema estrcuctura de como ingresan los datos
    {
        NombreEvento: {type: String, require: true},
        fecha:{type: Date, require: true},
        ubicacion: {type: String, require: true},
        descripcion: {type: String, require: true},
        costo: {type: Number, require: true},
        asistencia: {type: String, require: true},
        presupuesto:  {type: Boolean},
});


export default model("Evento", esquemaEvento); // Lo exporto este es el modelo 
