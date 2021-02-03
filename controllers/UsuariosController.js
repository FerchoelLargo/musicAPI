class UsuariosController {
  
  constructor( conecction ){
    this.conecction = conecction
  }

  getListaUsuarios(){
    return new Promise((resolve,reject)=>{
      this.conecction.query('SELECT * from usuarios', function(err, rows) {
        if (err)
          return reject(err)
        return resolve(rows)
      });
    })
  }

  getUsuarioById(id){
    return new Promise((resolve,reject)=>{
      this.conecction.query("SELECT * from usuarios where id = ?;",[id], function(err, rows) {
        if (err)
          return reject(err);
        return resolve(rows)
      });
    })
  }

  async getUsuarioByNombre(nombre){
    return new Promise((resolve,reject)=>{
      this.conecction.query("SELECT * from usuarios where nombre like ?;",[`%${nombre}%`], function(err, rows) {
        if (err)
          return reject(err);
        return resolve(rows)
      });
    })
  }

}

exports.UsuariosController = UsuariosController;