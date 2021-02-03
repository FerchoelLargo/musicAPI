module.exports = (sequalize,type) => {
  return sequalize.define('generosartistas',{
    id:{
      type: type.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
  },{ tableName: 'GenerosArtistas' })
}