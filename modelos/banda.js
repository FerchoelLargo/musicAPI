module.exports = (sequalize,type) => {
  return sequalize.define('banda',{
    id:{
      type: type.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    nombre: {type:type.STRING,allowNull:false},
    fechaCreacion : { type:type.DATE, allowNull:false, },
  },{ tableName: 'Bandas' })
}