module.exports = (sequalize,type) => {
  return sequalize.define('cancion',{
    id:{
      type: type.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    titulo: {type:type.STRING,allowNull:false},
    orden: {type:type.INTEGER},
    sencillo: {type:type.BOOLEAN},
    duracion: {type: type.STRING}
  },{ tableName: 'Canciones' })
}