const auth = function(req, res, next){
    if ( req.session.user ){
        next();
    } //status devuelve directamente y send
    else{
        res.status(401);
        res.send(
            {
               status : 'error',
               message : 'No posee los permisos necesarios para ingresar'
            }
        )
    }
}
module.exports = auth;