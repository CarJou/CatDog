const express = require('express');
const router = express.Router();
const conexion = require('../connection');

router.get('/:user', (req, res) =>{
    let sql = `SELECT animales.ani_id AS id, ani_nombre AS nombre, ani_descripcion AS descripcion, ani_imagen AS imagen
            FROM animales, favoritos
            WHERE favoritos.user_id = ?
            AND publicaciones.ani_id = favoritos.ani_id`;

 let values = [req.params.user];
            conexion.query( sql, values, (err, result, fields)=>{
                if (err) throw err;
                res.json(result);
            } )
})

module.exports = router;