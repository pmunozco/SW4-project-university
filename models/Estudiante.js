const db = require('../config/database');

class Estudiante{
    static async obtenerTodosEstudiantes(){
        try{
            const [estudiantes] = await db.query('SELECT * FROM estudiantes');
            return estudiantes;
        }
        catch(error){
            console.error('Error al obtener informacion de los estudiantes', error);
            throw error;
        }
    }

    static async obtenerEstudiantePorId(id){
        try{
            const [estudiantes] = await db.query('SELECT * FROM estudiantes WHERE id = ?',[id]);
            return estudiantes[0];
        }
        catch(error){
            console.error('Error al obtener informacion del estudiante por id:', error);
            throw error;
        }
    }

}