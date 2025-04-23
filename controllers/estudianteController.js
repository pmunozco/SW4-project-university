const db = require('../config/database');

exports.listarEstudiantes = async (req, res) => {
    try {
        const [estudiantes] = await db.query('SELECT * FROM estudiantes');
        res.render('estudiantes/index', { estudiantes });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los estudiantes');
    }
};

exports.formEstudiante = (req, res) => {
    res.render('estudiantes/form');
};

exports.crearEstudiante = async (req, res) => {
    const { nombre, apellido, email } = req.body;
    try {
        await db.query('INSERT INTO estudiantes (nombre, apellido, email) VALUES (?, ?, ?)', [nombre, apellido, email]);
        res.redirect('/estudiantes');
    } catch (error) {
        console.error(error);
        res.status(500).send('https://http.cat/[500]');
    }
};