const router = require('express').Router()
const CryptoJS = require("crypto-js");
const {secretKeyToEncrypt} = require('./../../globals.json')
const {Usuario} = require('./../../db')

router.get('/:id', async (req,res) =>{
  const id = Number(req.params.id)
  const persona = await Usuario.findByPk(id)
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
    const decrypted = CryptoJS.AES.decrypt(req.body.personaId, secretKeyToEncrypt);
    req.body.personaId = decrypted.toString(CryptoJS.enc.Utf8)
    const user = await Usuario.create(req.body)
    const encrypted = CryptoJS.AES.encrypt(`${user.id}`, secretKeyToEncrypt);

    const confirmarHTML = readViewAsString(__dirname + '\\mails\\confirmar.ejs',{nombre:user.nombre})
    try{
      await sendMail(
        '"Fernando Mtz." <fernxn.10@gmail.com>', user.correoElectronico,
        "Confirma tu cuenta.", '', confirmarHTML,
      )
    }catch(e){}

    const response = {
      key:encrypted.toString(),
      mail: user.correoElectronico
    }
    res.json(response)
  }catch(error){
    res.status(500);
    res.send(error)
  }
});

module.exports = router;