module.exports = (sequalize,type) => {
  return sequalize.define('colaboracionesartistas',{
    id:{
      type: type.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    tipo:{type:type.INTEGER}
  },{ tableName: 'ColaboracionesArtistas' })
}