const express = require('express');
const router  = express.Router();
const conexion = require('../connection');


router.post('/', (req, res) =>{

    let sql = `SELECT *
               FROM usuarios
               WHERE user_nombre = ?
               AND user_password = ?`;

let values = [
               req.body.user,
               req.body.password
              ]


    conexion.query(sql, values, (err, result, fields) =>{

if ( err ) {
    res.json(
        {
        status: 'error',
        message: 'No es posible acceder en este momento, intente nuevamente en unos minutos'
    }
    )

   }else{

    if(result.length == 1){

        req.session.user = req.body.user;
        req.session.userId = result[0].user_id;

        res.json(
            {
                status     : 'ok',
                message    : 'sesión iniciada',
                loggedUser : {
                                id     : req.session.userId,
                                nombre : result[0].user_nombre
                             }
            }
        )

    }    
    else{
        res.json(
            {
                status  : 'error',
                message : 'Usuario y/o contraseña no validos'
            }
        );
    }
}
    })

    
    } )



router.delete('/', (req, res) => {
    req.session.destroy( err =>{
        if ( err ){
            res.json(
                {
                    status : 'error',
                    message : 'Error al cerrar la sesión'
                }
            )
        }else{
            res.clearCookie('catdog');
            res.json(
                {
                    status  : 'ok',
                    message : 'Sesión cerrada'
                }
            )
        }
    })
})

module.exports = router;