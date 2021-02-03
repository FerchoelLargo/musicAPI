module.exports = (sequalize,type) => {
  return sequalize.define('generosbandas',{
    id:{
      type: type.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
  },{ tableName: 'GenerosBandas' })
}