const express = require('express');
const router = express.Router();
const {readViewAsString, sendMail} = require('./../helpers/helpers')


const APIFunctions=[
	/*users get*/
	{method:'get',link:'/api/usuarios',route:'usuarios',desc:'Obtiene la lista de usuarios del sistema.',params:"[]",out:"[{nombre:'user',contrasena:'pww'}]",},
	{method:'get',link:'/api/usuarios/1',route:'usuarios/{id}',desc:'Obtiene el detalle de un usuario del sistema.',params:"{id:id del usuario a buscar}",out:"{nombre:'user',contrasena:'pww'}",}
]

router.get('/', function(req, res) {
  res.render('./menu/index',{view:'/',APIFunctions,base:'/api/'})
});

router.get('/mail/confirmar', function(req, res) {
  res.render('./mails/confirmar',{nombre:'Fernxn'})
});

module.exports = router;