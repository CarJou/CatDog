const express = require('express');
const router = express.Router();
const conexion = require('../connection');
const path = require('path');
const fs = require('fs');



router.get('/', (req, res) => {

    let sql = `SELECT ani_id AS id, ani_nombre AS nombre, ani_descripcion AS descripcion, ani_imagen AS imagen 
    FROM animales`;

    conexion.query(sql, function (err, result, fields) {
        if (err) throw err;

        res.json(result);
    })

})


router.get('/user/:id', (req, res) => {

    let sql = `SELECT ani_id AS id, ani_nombre AS nombre, ani_descripcion AS descripcion, ani_imagen AS imagen 
           FROM animales 
           WHERE user_id = ${req.params.id}`;


    conexion.query(sql, function(err, result, fields){
               if (err) throw err;

               res.json(result);
           })
})

    

router.get('/:id', (req, res) => {

    let sql = `SELECT ani_id AS id, ani_nombre AS nombre, ani_descripcion AS descripcion, ani_imagen AS imagen 
               FROM animales 
               WHERE ani_id = ${req.params.id}`;

    conexion.query(sql, function(err, result, fields){
        if (err) throw err;

        res.json(result[0]);
    })

})



router.post('/', (req, res) => {


    let imageFileName = '';

    if (req.files) {

        let animalImage = req.files.animalImage;

        imageFileName = Date.now() + path.extname(animalImage.name);

        animalImage.mv('../public/images/' + imageFileName, function (err) {
            if (err) {
                console.log(err);
            }
        })

        console.log(imageFileName);
    } else {
        console.log('No hay archivo');
    }
    

    let sqlInsert = `INSERT INTO animales (ani_nombre, ani_descripcion, user_id, ani_imagen)
                        VALUES (
                            '${req.body.animalName}',
                             '${req.body.animalDescripcion}',
                             '${req.session.userId}',
                             '${process.env.IMAGES_URL + imageFileName}'
                      )`;
 

    conexion.query(sqlInsert, function (err, result, fields) {
        if ( err ) { 
              res.json(
            {
                status: 'error',
                message: 'Error al realizar la publicación'
            } 
            )


         }else{

        res.json(
            {
                status: 'ok',
                message: 'Publicación realizada correctamente'
            }
        )
         }

    })




})




//put del modal editar
router.put('/:id', (req, res) => {


    let imageFileName = '';


    let sqlUpdate = `UPDATE animales 
                     SET ani_nombre = ?,
                    ani_descripcion = ?`;

    let values = [
                   req.body.animalName,
                   req.body.animalDescripcion
                ];
 


    if (req.files) {
      
        //borro el archivo de la imagen anterior
       conexion.query('SELECT ani_imagen FROM animales WHERE ani_id=' + req.params.id, function( err, result, fields ){
           if ( err) { 
               console.log('error')
            }else{
                //deja al archivo con el nombre, saca el localhost etc
                fs.unlink( '../public/images/' + path.basename( result[0].ani_imagen), err =>{
                    if ( err ) throw err;
                    console.log('archivo borrado');
                } );
            }
       })
    

        let animalImage = req.files.animalImage;

        imageFileName = Date.now() + path.extname(animalImage.name);

        animalImage.mv('../public/images/' + imageFileName, function (err) {
            if (err) {
                console.log(err);
            }
        })

        sqlUpdate += ', ani_imagen = ?';

        values.push( process.env.IMAGES_URL + imageFileName );


    } else {
        console.log('No hay archivo');
    }
    
    sqlUpdate += 'WHERE ani_id = ?';
    values.push( req.params.id );

    

    conexion.query(sqlUpdate, values, function (err, result, fields) {
        if ( err ) { 
              res.json(
            {
                status: 'error',
                message: 'Error al modificar la publicación'
            } 
            )


         }else{

        res.json(
            {
                status: 'ok',
                message: 'Publicación modificada correctamente'
            }
        )
         }

    })




})




router.delete('/:id', (req, res)=>{

    let sqlDelete = `DELETE FROM animales
                      WHERE ani_id = ?`;

    values = [req.params.id];

    conexion.query(sqlDelete, values, (err, result, fields)=>{

        if( err ){
            res.json(
                {
                    status: 'error',
                    message : 'Error al eliminar la publicación'
                }
            )
        }else{
            res.json(
                {
                    status: 'ok',
                    message : 'La publicación ha sido eliminada correctamente'
                }
            )           
        }

    })

})





module.exports = router;