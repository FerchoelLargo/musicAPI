module.exports = (sequalize,type) => {
  return sequalize.define('generoscanciones',{
    id:{
      type: type.INTEGER,
      primaryKey:true,
      autoIncrement:true
    }
  },{ tableName: 'GenerosCanciones' })
}