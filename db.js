const Sequelize = require('sequelize')
const {mysqlSettings} = require('./globals.json');

//Modelos instanciados
const PersonaModel = require('./modelos/persona')
const AlbumModel = require('./modelos/album')

const AlbumFotograficoModel = require('./modelos/albumesfotograficos')
const ArtistaModel = require('./modelos/artista')
const ArtistaBandaModel = require('./modelos/artistasbandas')
const BandaModel = require('./modelos/banda')
const CancionModel = require('./modelos/cancion')

const ColaboracionesArtistasModel = require('./modelos/colaboracionesartistas')
const ColaboracionModel = require('./modelos/colaboracion')
const DiscoModel = require('./modelos/disco')
const GeneroModel = require('./modelos/genero')
const GenerosAlbumModel = require('./modelos/generosalbumes')
const GenerosBandaModel = require('./modelos/generosbanda')
const GenerosArtistaModel = require('./modelos/generosartistas')

const GenerosCancionModel = require('./modelos/generoscanciones')
const HabilidadesArtistaModel = require('./modelos/habilidadedesartistas')
const HabilidadesArtisticaModel = require('./modelos/habilidadesartistica')
const ImagenModel = require('./modelos/imagen')
const UsuarioModel = require('./modelos/usuario');

 const sequelize = new Sequelize(
  mysqlSettings.database,
  mysqlSettings.user,
  mysqlSettings.password,
  {
    host: mysqlSettings.host,
    dialect: 'mysql'
  })

//Tablas instanciadas
const Persona = PersonaModel(sequelize,Sequelize)
const Album = AlbumModel(sequelize,Sequelize)

const AlbumFotografico = AlbumFotograficoModel(sequelize,Sequelize)
const Artista = ArtistaModel(sequelize,Sequelize)
const ArtistaBanda = ArtistaBandaModel(sequelize,Sequelize)
const Banda = BandaModel(sequelize,Sequelize)
const Cancion = CancionModel(sequelize,Sequelize)

const ColaboracionesArtistas = ColaboracionesArtistasModel(sequelize,Sequelize)
const Colaboracion = ColaboracionModel(sequelize,Sequelize)
const Disco = DiscoModel(sequelize,Sequelize)
const Genero = GeneroModel(sequelize,Sequelize)
const GenerosAlbum = GenerosAlbumModel(sequelize,Sequelize)
const GenerosBanda = GenerosBandaModel(sequelize,Sequelize)
const GenerosArtista = GenerosArtistaModel(sequelize,Sequelize)

const GenerosCancion = GenerosCancionModel(sequelize,Sequelize)
const HabilidadesArtista = HabilidadesArtistaModel(sequelize,Sequelize)
const HabilidadesArtistica = HabilidadesArtisticaModel(sequelize,Sequelize)
const Imagen = ImagenModel(sequelize,Sequelize)
const Usuario = UsuarioModel(sequelize,Sequelize)

/*
  Relaciones 1-1 (Foo-Bar)
  <- Bar gets a fooId column ->
  Foo.hasOne(Bar);
  Bar.belongsTo(Foo); FKFoot is in Bar
*/

Persona.hasOne(Usuario, { foreignKey: { allowNull: false }});
Usuario.belongsTo(Persona);

Usuario.hasOne(Artista, { foreignKey: { allowNull: false }} );
Artista.belongsTo(Usuario);

/*
  Relaciones 1-n (Team-Player)
  <- Players get a teamId column ->
  Team.hasMany(Player);
  Player.belongsTo(Team);
*/

Artista.hasMany(AlbumFotografico,{ foreignKey: { allowNull: true,defaultValue:0 }});
AlbumFotografico.belongsTo(Artista);

Album.hasMany(AlbumFotografico,{ foreignKey: { allowNull: true,defaultValue:0 }});
AlbumFotografico.belongsTo(Album);

Banda.hasMany(AlbumFotografico,{ foreignKey: { allowNull: true,defaultValue:0 }});
AlbumFotografico.belongsTo(Banda);

/* */

Colaboracion.hasMany(Album,{ foreignKey: { allowNull: true,defaultValue:0 }})
Album.belongsTo(Colaboracion);

Artista.hasMany(Album,{ foreignKey: { allowNull: true,defaultValue:0 }})
Album.belongsTo(Artista)

Banda.hasMany(Album,{ foreignKey: { allowNull: true,defaultValue:0 }})
Album.belongsTo(Banda)

/**/

Colaboracion.hasMany(Cancion,{ foreignKey: { allowNull: true,defaultValue:0 }})
Cancion.belongsTo(Colaboracion);

Disco.hasMany(Cancion,{ foreignKey: { allowNull: true ,defaultValue:0  }})
Cancion.belongsTo(Disco)

Artista.hasMany(Cancion,{ foreignKey: { allowNull: true,defaultValue:0 }})
Cancion.belongsTo(Artista)

Banda.hasMany(Cancion,{ foreignKey: { allowNull: true,defaultValue:0 }})
Cancion.belongsTo(Banda)

/**/

Album.hasMany(Disco,{ foreignKey: { allowNull: false }})
Disco.belongsTo(Album)

/**/

Banda.hasMany(Artista,{ foreignKey: { allowNull: false }});
Artista.belongsTo(Banda);

/*
  Relaciones n-n (movies-cines)
  <- new table with moviesID and cinesId columns ->
  Movie.belongsToMany(Actor, { through: ActorMovies });
  Actor.belongsToMany(Movie, { through: ActorMovies });
*/

Banda.belongsToMany(Genero, { through: GenerosBanda });
Genero.belongsToMany(Banda, { through: GenerosBanda });

Album.belongsToMany(Genero, { through: GenerosAlbum });
Genero.belongsToMany(Album, { through: GenerosAlbum });

Artista.belongsToMany(Genero, { through: GenerosArtista });
Genero.belongsToMany(Artista, { through: GenerosArtista });

Cancion.belongsToMany(Genero, { through: GenerosCancion });
Genero.belongsToMany(Cancion, { through: GenerosCancion });


/*sequelize.sync()
.then( () =>{
  console.log('Base de datos lista.')
})*/

module.exports = {
  Persona,
  Album,
  AlbumFotografico,
  Artista,
  ArtistaBanda,
  Banda,
  Cancion,
  ColaboracionesArtistas,
  Colaboracion,
  Disco,
  Genero,
  GenerosAlbum,
  GenerosBanda,
  GenerosCancion,
  HabilidadesArtista,
  HabilidadesArtistica,
  Imagen,
  Usuario,
  GenerosArtista
}