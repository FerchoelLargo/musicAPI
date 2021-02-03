module.exports = (sequalize,type) => {
  return sequalize.define('persona',{
    id:{
      type: type.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    nombre: type.STRING,
    apellidos: type.STRING,
    fechaNacimiento: type.DATE,
    pais: type.STRING,
    estado: type.STRING,
    ciudad: type.STRING,
  },{ tableName: 'Personas' })
}