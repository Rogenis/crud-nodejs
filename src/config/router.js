const express = require('express')
const mainController = require('../app/controllers/main') // Controlador do main em controllers (main.js)
const areaController = require('../app/controllers/area')
const cursoController = require('../app/controllers/curso')
const router = express.Router()

router.get("/"                  ,mainController.index) // Esse index é da function index do controller -> main.js

// Area Controller
router.get("/area"              ,areaController.index) // Esse index é da function index do controller -> area.js

// Curso Controller 
router.get("/curso"             ,cursoController.index)
router.get("/curso/create"      ,cursoController.create)
router.post("/curso/create"     ,cursoController.create)
router.get("/curso/update/:id"  ,cursoController.update)
router.post("/curso/update/:id" ,cursoController.update)
// Ideal se faz remove por post, porém estou usando get. 
router.get("/curso/remove/:id"  ,cursoController.remove)
router.get("/curso/:id"         ,cursoController.read)


module.exports = router;
