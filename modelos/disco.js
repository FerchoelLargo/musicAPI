module.exports = (sequalize,type) => {
  return sequalize.define('disco',{
    id:{
      type: type.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    titulo: {type:type.STRING,allowNull:false},
    orden: {type:type.INTEGER},
  },{ tableName: 'Discos' })
}