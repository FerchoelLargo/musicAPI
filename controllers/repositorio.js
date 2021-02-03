const {UsuariosController} = require('./UsuariosController')

class Repositorio{
  
  
  constructor(connection){
    this.connection = connection;
    this.Usuarios = new UsuariosController(connection);
  }


}

exports.Repositorio = Repositorio;