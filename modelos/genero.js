module.exports = (sequalize,type) => {
  return sequalize.define('genero',{
    id:{
      type: type.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    nombre: {type:type.STRING,allowNull:false,unique:true},
    descripcion: {type:type.STRING,allowNull:false},
  },{ tableName: 'Generos' })
}