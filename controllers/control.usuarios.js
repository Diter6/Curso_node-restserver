const { request } = require('express');
const {response} = require('express');




 const usuariosGet = (req = request, res = response ) => {
        const {q, nombre} = req.query;


    res.json({
    msg: 'Get-API controlador',
    q,
    nombre
});
}

const usuariosPost = (req, res = response ) => {

    const {nombre,edad} = req.body;
    res.json({
    msg: 'Post-API usuarioPost',
    nombre,
    edad
});
}
const usuariosPut = (req, res = response ) => {
    const id = req.params.id;
    
    res.json({
    msg: 'Put-API usuarioPut',
    id
});
}
const usuariosPatch = (req, res = response ) => {
    res.json({
    msg: 'Patch-API usuarioPatch'
});
}
const usuariosDelete = (req, res = response ) => {
    res.json({
    msg: 'Delete-API usuarioDelete'
});
}





module.exports = {
    usuariosGet,
    usuariosPost,
     usuariosPut, 
     usuariosPatch, 
     usuariosDelete

}