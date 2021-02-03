const router = require('express').Router()

const UsuaariosEndPoints = require('./routes/usuario')
const PersonasEndPoints = require('./routes/personas')

router.use('/usuarios',UsuaariosEndPoints)
router.use('/personas',PersonasEndPoints)


module.exports = router;