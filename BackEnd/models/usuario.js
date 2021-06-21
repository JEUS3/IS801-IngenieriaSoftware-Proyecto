// const mongoose = require("mongoose");
// mongoose.Schema()
const { Schema, model } = require("mongoose");

// Esto es un "tabla de usuario"
const UsuarioSchema = Schema({
    nombre:{
        type    : String,
        require : true
    },
    email:{
        type    : String,
        required: true,
        unique  : true
    },
    password:{
        type    : String,
        required: true,
    },
    img:{
        type    : String
    },
    role:{
        type    : String,
        require : true,
        default : "USER_ROLE"
    },
    google:{
        type    : Boolean,
        default : false
    },
});

// Implementacion del modelo
// Creamos un modelo llamado Usuario que tendra la estructura del UsuarioSchema
module.exports = model( "Usuario", UsuarioSchema);