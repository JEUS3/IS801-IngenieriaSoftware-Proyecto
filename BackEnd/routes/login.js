/*
    Ruta: /api/login 
*/
const { Router } = require("express");
const { check } = require("express-validator");
const { login } = require("../controllers/login");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();
router.post("/",
            [
                check("email","El correo es invalido, o verifique que el campo no este vacio.").isEmail(),
                check("password","La contraseña es obligatorio.").not().isEmpty(),
                validarCampos
            ],
            login);

module.exports = router;