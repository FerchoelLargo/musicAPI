module.exports = (sequalize,type) => {
  return sequalize.define('colaboracion',{
    id:{
      type: type.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    tipo:{type:type.INTEGER}
  },{ tableName: 'Colaboraciones' })
}