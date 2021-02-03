module.exports = (sequalize,type) => {
  return sequalize.define('habilidadesdeartistas',{
    id:{
      type: type.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
  },{ tableName: 'HabilidadesDeArtistas' })
}