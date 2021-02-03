module.exports = (sequalize,type) => {
  return sequalize.define('album',{
    id:{
      type: type.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    titulo: {type:type.STRING,allowNull:false},
    fechaLanzamiento: {type:type.DATE},
  },{ tableName: 'Albumes' })
}