module.exports = (sequalize,type) => {
  return sequalize.define('usuario',{
    id:{
      type: type.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    correoElectronico: {type: type.STRING, unique:true,allowNull:false,},
    contrasena: {type: type.STRING,allowNull:false},
    tipoUsuario: type.INTEGER,
  },{ tableName: 'Usuarios' })
}