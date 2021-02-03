module.exports = (sequalize,type) => {
  return sequalize.define('imagen',{
    id:{
      type: type.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
   link: { type:type.STRING, allowNull:false, },
   descripcion: { type:type.STRING, allowNull:true, },
   tipo: {type: type.INTEGER}
  },{ tableName: 'Imagenes' })
}