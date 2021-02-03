module.exports = (sequalize,type) => {
  return sequalize.define('generosalbumes',{
    id:{
      type: type.INTEGER,
      primaryKey:true,
      autoIncrement:true
    }
  },{ tableName: 'GenerosAlbumes' })
}