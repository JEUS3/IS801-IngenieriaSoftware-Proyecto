/*
    Ruta: /api/login 
*/
const { Router } = require("express");
const { check } = require("express-validator");
const { login, revalidarToken } = require("../controllers/login");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();
router.get("/renew", validarJWT, revalidarToken);
router.post("/", [
        check("email", "El correo es invalido, o verifique que el campo no este vacio.").isEmail(),
        check("password", "La contraseña es obligatorio.").not().isEmpty(),
        validarCampos
    ],
    login);

module.exports = router;