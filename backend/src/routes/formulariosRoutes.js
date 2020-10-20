const express = require('express');
const router = express.Router();
const conexion = require('../connection');





router.post('/', (req, res) =>{
    console.log(req.body);

    

let sqlInsert = `INSERT INTO contac (ani_id, contac_nombre, contac_edad, user_id, contac_zona, contac_direc, contac_ocup, contac_mail, 
    contac_cel, contac_tel, contac_red)
                        VALUES (
                            '${req.body.formName}',
                            '${req.body.aniId}',
                              ${req.body.formEdad},
                              '${req.session.userId}',
                             '${req.body.formZona}',
                             '${req.body.formDirec}',
                             '${req.body.formTrab}',
                             '${req.body.formMail}',
                             '${req.body.formCel}',
                             '${req.body.formTel}',
                             '${req.body.formRed}'
                      )`;
 
//

    conexion.query(sqlInsert, function (err, result, fields) {
        if ( err ) {
            console.log(err) 
              res.json(
            {
                status: 'error',
                message: 'Error al enviar formulario'

            }  
            )


         }else{

        res.json(
            {
                status: 'ok',
                message: 'Formulario enviado correctamente'
            }
        )
         }

    })



})







module.exports = router;