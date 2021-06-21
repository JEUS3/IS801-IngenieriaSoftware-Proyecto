/*
    Ruta: /api/usuarios 
*/

const { Router } = require("express");
const { test } = require("../controllers/usuarios");

const router = Router();

router.get("/test", test);

module.exports = router;