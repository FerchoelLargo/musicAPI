const router = require('express').Router()
const CryptoJS = require("crypto-js");
const {secretKeyToEncrypt} = require('./../../globals.json')
const {Persona} = require('./../../db')

router.get('/:id', async (req,res) =>{
  const id = Number(req.params.id)
  const persona = await Persona.findByPk(id)
  if(persona === null){
    res.status(404);
    res.send('');
  }else{
    res.status(200);
    res.json(persona)
  }
});

router.post('/', async (req,res) =>{  
  try{
    const person = await Persona.create(req.body)
    const encrypted = CryptoJS.AES.encrypt(`${person.id}`, secretKeyToEncrypt);
    const response = {
      key:encrypted.toString(),
      nombre:person.nombre
    }
    res.json(response)
  }catch(error){
    res.status(500);
    console.log(error)
    res.send(error)
  }
});

module.exports = router;