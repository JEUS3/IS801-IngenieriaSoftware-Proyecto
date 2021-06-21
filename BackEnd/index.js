// Paso 1
// Importar de librerias
require("dotenv").config();                             //Cargamos las variables de entorno.
const express = require('express');                     //Framework express
const cors = require("cors");                           //
const { dbConnection } =require('./database/config')    //Conexion hacia la base de datos

// Paso 2
// Crear el servidor/aplicacion de express y conectarse con la base de datos
const app = express();
app.use(cors());
dbConnection();

// app.get("/", (req,res)=>{
//     res.json({
//         ok:true,
//         msj:"Un get desde el index, mejor hacer desde el routes"
//     });
// });

// Definicion de rutas y controladores
app.use("/api/usuarios", require("./routes/usuarios"));

// Paso final
// Levantar el servico
app.listen(process.env.PORT, ()=>{
    console.log("Servidor corriendo en puerto "+process.env.PORT)
});