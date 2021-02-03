module.exports = (sequalize,type) => {
  return sequalize.define('artista',{
    id:{
      type: type.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    nombreArtistico: {type:type.STRING,allowNull:false},    
  },{ tableName: 'Artistas' })
}