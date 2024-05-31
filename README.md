# Proyecto CRUD - REST:API con MongoDB

Este proyecto es una implementación de un tema libre para la creación de un CRUD (CREATED, READ, UPDATE, DELETE) donde se van aplicar todos los conceptos aplicados en clase especificamente: 
 + Base de datos, especificamente en MongoDB
 + Morgan
 + Mongoose 
 + Rutas
 + Controladores
 + Node.js
 + Drivers
 + Rutas


## Realizado por:

**Héctor Javier Vega Lozano**, Ingeniero electrónico, desarrollador Full Stack, entusiasta por realizar cosas que sean funcionales o de utilidad utilizando herramientas de Desarrollo Web.

## Contenido:

Este proyecto se basa principalmente en un organizador de información de eventos. Entrando en detalle los datos que se van a leer, actualizar, eliminar, crear van a ser los siguientes:

Eventos  | Tipo de variable
-------- | ----------------
Nombre | String
Fecha | Date
Ubicación | String
Descripción general | String
Costo de entrada | Number
Asistencia esperada | Number
Tiene presupuesto | Boolean

## Proceso Básico para la creación del proyecto

Para iniciar el primer paso que se debe realizar es crear un repositorio en GitHub.

+ Modificar el Readme 
+ Subir los cambios y ver si está subiendo correctamente la información de la maquina local al repositorio remoto de GitHub

Una vez probado que todo está marchando correctamente se inician a crear los documentos escenciales para el proyecto.

## Armado del proyecto **Node.js**

Inicialmente se requiere inicializar con Node, para esto se va usar `npm` que significa Node Package Manager esta es herramienta que administra y donde se pueden encontrar, crear y administrar cientos de paquetes de códigos. Se va a inicializar el npm de la siguiente manera:

`npm init`

Despues de este comando este va preguntar lo siguiente:

>Press ^C at any time to quit.  

>package name: (proyectocrud)

>version: (1.0.0)

>description: Protecto de organizador de eventos

>entry point: (index.js)

>test command: iniciando

>git repository: https://github.com/Hectorvegaloza/proyectocrud.git

>keywords: eventos, organización, mejora de procesos

>author: Héctor Javier Vega Lozano

>license: (ISC)


Nota: Si desea evitar estas preguntas el comando debe ser el siguiente `npm init --yes`

Una vez terminado este comando el npm nos va crear el archivo package.json, donde debe mostrar los datos que hemos ingresado pero en este formato.

Para el armado del proyecto se debe de utilizar el siguiente comando:

`npm install`

Esta especificamente va crear el archivo *package-lock.json* en la ruta Raíz, para finalmente crear un archivo index.js, donde adicional se va modificar el package.json y en el apartado de scripts  se va agregar esta linea de código:

 *"start": "node index.js"*

 Y para probar que todo el proceso haya funcionado correctamente ejecutamos en la terminal el comando

 `npm start`

Deberia salir esto si todo salió bien:

> proyectocrud@1.0.0 start
> node index.js

## Crear el archivo Gitignore 

Crear .gitingnore y colocar los carpeta de los módulos

 `node_modules`


## Creando dependencias 

Primero se debe instalar Espress en el proyecto para el servidor. 

 `npm install espress`

Luego se instala el nodemon que muestra los datos en tiempo real, cambiando una dependencia:

 `npm install nodemon -D`

Y en scripts se debe agregar el siguiente comando

  `"dev": "nodemon index.js"`

nota: revisar que esté "type": "module", despues del "license": "ISC",

Para instalar notenv

`npm i dotenv`

Para instalar morgan

`npm i morgan -D`

Para instalar mongoose

`npm i mongoose`

### Espress

Espress es un entorno que nos sirve para trabajar con Node.js, para iniciar el servidor es importante seguir los siguientes pasos:

Inicialmente se va crear un archivo que para este caso se va llamar servidor.js, donde se va importar express de la siguiente forma:

 `import express from "express";`

 Seguido, se va crear una constante que es donde se va asignar este servidor de Espress

  `const servidor = express();`

 Para finalmente, recibir Json, desde postman es importante realizar este linea de código, en esta se da realmente el uso de express
 
 `servidor.use(express.json())`

 para revisar que todo este trabajando correctamente se imprime

 `servidor.listen(2000, ()=>{`
    `console.log("servidor corriendo en el puerto 2000");`
`});`

Crear el archivo de variables de entorno y ponerlo en el gitingnore para que no se avance

`.env`


Creación de base de datos en el archivo .env

MONGODB_ATLAS_URI="link dada por atlas"

## Creación de enrutamiento






### Creación conexión BD

Se crea un archivo y se coloca lo siguiente 

>import mongoose, { Mongoose } from "mongoose";

>mongoose.connect(process.env.MONGODB_ATLAS_URI).then((dato) => {
    
>   console.log("bien, conectado a la base de datos");

>}).catch((error) => {
>    console.log("Ocurrio un error y no se conecto a la base de datos");
>}); //recibe mi conexion donde esta la base de datos nos va retornar una promesa

