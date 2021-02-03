module.exports = (sequalize,type) => {
  return sequalize.define('artistasbandas',{
    id:{
      type: type.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
  },{ tableName: 'ArtistasBandas' })
}