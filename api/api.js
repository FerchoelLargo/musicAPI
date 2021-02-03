const formidable = require('formidable');
const {saveFile} = require('./../helpers/helpers')

const {Repositorio} = require('./../controllers/repositorio')
const {mysqlSettings} = require('./../globals.json');
const mysql = require('mysql');

const connection = mysql.createConnection({
	host     : mysqlSettings.host,
	user     : mysqlSettings.user,
	password : mysqlSettings.password,
	database : mysqlSettings.database,
});
connection.connect();
const DataBase = new Repositorio(connection);

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	//res.status(404)
	res.send('Initial page for API');
})

router.get('/usuarios', (req, res) => {
	if( req.query.hasOwnProperty('nombre') )
		DataBase.Usuarios.getUsuarioByNombre(req.query.nombre).then(result => {
			res.send(result);
		}).catch(err => {
			res.status(404)
			res.send('Some error ocurred, see log for more details');
			console.log(err)
		})
	else
		DataBase.Usuarios.getListaUsuarios().then(result => {
			res.send(result);
		}).catch(err => {
			res.status(404)
			res.send('Some error ocurred, see log for more details');
			console.log(err)
		})
})

router.get('/usuarios/:id', (req, res) => {
	const id = req.params.id
	DataBase.Usuarios.getUsuarioById(id).then(result => {
		res.send(result);
	}).catch(err => {
		res.status(404)
		res.send('Some error ocurred, see log for more details');
		console.log(err)
	})
})

router.post('/savefile', (req, res) => {
	const form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
		if (err) throw err;
		const newpath = `${__dirname}/documents/'${files.filetoupload.name}`;
		saveFile(files.filetoupload,newpath,function (err) {
			if (err) throw err;
			res.send('File uploaded and moved!');
		})
	});
})

module.exports = router;