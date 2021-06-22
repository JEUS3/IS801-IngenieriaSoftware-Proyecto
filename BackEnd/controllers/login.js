const { request, response } = require("express")
const { generarJWT } = require("../helpers/jwt");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/usuario");

const login = async(req=request, res=response)=>{

    const { email, password } = req.body;
    try {
        // Validar email.
        const userExist = await Usuario.findOne({email});
        if(!userExist){
            return res.status(404).json({
                ok:false,
                msg:"El email es invalido."
            });
        }
        // Validar password
        const passMatch = bcrypt.compareSync(password,userExist.password); //Retorna un bool, si hace match true, de lo contrario false
        if(!passMatch){
            return res.status(400).json({
                ok:false,
                msg:"La contraseña es incorrepta."
            });
        }
        // Generacion de JWT
        const token = await generarJWT(userExist.id);

        res.status(200).json({
            ok:true,
            name:userExist.name,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"Por favor contáctese con el administrador"
        });
    }
}

module.exports = {
    login
};