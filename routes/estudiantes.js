const express = require('express');
const router = express.Router();
const EstudianteController = require('../controllers/estudianteController');

router.get('/', EstudianteController.listarEstudiantes);
router.post('/',EstudianteController.crearEstudiante);

module.exports = router;