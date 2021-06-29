const { request, response } = require("express");
const  jwt  = require("jsonwebtoken");

const validarJWT = (req=request, resp=response, next)=>{
    const token = req.header('x-token');
    if (!token) {
        // 401 usuario no autenticado
        return resp.status(401).json({
            ok:false,
            msg:"El token no ha sido enviado"
        });
    }
    try {
        //Verificamos token y extraemos el payload
        const {uid} = jwt.verify(token, process.env.SECRET_JWT_SEED);
        req.uid = uid;
        next();
        
    } catch (error) {
        console.log(error);
        return resp.status(401).json({
            ok:false,
            msg:"El token no es valido"
        });
    }
}

module.exports = {
    validarJWT
}