import ModeloEvento from "../modelos/modeloEventos.js";

const ControladorEventos = {
  
    crearEvento: async (solicitud, respuesta) => {
      try{

        const nuevoEvento = new ModeloEvento(solicitud.body);

        /*  console.log("solicitud:", solicitud.body);  */
         const eventoCreado = await nuevoEvento.save();
        /*  console.log(usuarioCreado); */

        if ( eventoCreado._id){
          respuesta.json({
            resultado: "Bien!",
            mensaje: "Evento Creado!",
            id:  eventoCreado._id
          });
        }
        
      }catch(error){
        console.log("error",error);
        respuesta.json({error: true, mensaje: "ocurrió un error al enviar mensaje"});
      }
      },

      leerEvento: async (solicitud, respuesta) => {
        try{

          const eventoEncontrado = await ModeloEvento.findById(solicitud.params.id);//para leer un usuario
          /* console.log(usuarioEncontrado); */

         if (eventoEncontrado._id){
           respuesta.json({
             resultado: "Bien!",
             mensaje: "solo un evento!",
             id: eventoEncontrado._id,
             datos: eventoEncontrado 
           });
         }

        }catch(error){
          console.log("error",error);
          respuesta.json({error: true, mensaje: "ocurrió un error al leer usuario"});
        }

      },
      
      leerEventos: async (solicitud, respuesta) => {
        try{
          const TodosLoseventos = await ModeloEvento.find();
          console.log(TodosLoseventos);
          respuesta.json({
            resultado: "bien!!",
            mensaje: "eventos leidos",
            datos:TodosLoseventos
          })

        
        }catch(error){
          console.log("error",error);
          respuesta.json({error: true, mensaje: "ocurrió un error al leer los usuarios"});
        }

      },


      actualizarEvento: async (solicitud, respuesta) => {
        try{

          console.log(solicitud.params.id);
          console.log("solicitud:", solicitud.body); 
          
          const usuarioactualizado = await ModeloEvento.findByIdAndUpdate(solicitud.params.id,solicitud.body);

          if(usuarioactualizado._id){
            respuesta.json({
              resultado: "bien!!",
              mensaje: "Eventos modificados",
              datos:usuarioactualizado
            })
          }
      



        }catch(error){
          console.log("error",error);
          respuesta.json({error: true, mensaje: "ocurrió un error actualizar usuario"});
        }
      },

      eliminarEvento: async(solicitud, respuesta) => {
        try{

          const usuarioEliminado = await ModeloEvento.findByIdAndDelete(solicitud.params.id);//para leer un usuario
  

         if (usuarioEliminado._id){
           respuesta.json({
             resultado: "Bien!",
             mensaje: "Usuario eliminado!",
             datos: usuarioEliminado
           });
         }

        }catch(error){
          console.log("error",error);
          respuesta.json({error: true, mensaje: "ocurrió un error al eliminar usuario"});
        }

      }
}

export default ControladorEventos;

