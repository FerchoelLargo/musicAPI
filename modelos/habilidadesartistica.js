module.exports = (sequalize,type) => {
  return sequalize.define('habilidadesartisticas',{
    id:{
      type: type.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    nombre: {type:type.STRING,allowNull:false,unique:true},
  },{ tableName: 'HabilidadesArtisticas' })
}