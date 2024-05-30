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



## Armado del proyecto **Express.js**

