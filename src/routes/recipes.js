const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o get dentro da rota recipes'
    })
})
router.post('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o post dentro da rota recipes'
    })
})

module.exports = router