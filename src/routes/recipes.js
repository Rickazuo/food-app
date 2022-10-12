//const { urlencodedParser } = require('body-parser')
const express = require('express')
const router = express.Router()


router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todas as receitas recipes'
    })
})
router.post('/', (req, res, next) => {
    console.log(req.body)
    const recipe = {
        name: req.body.name,
        quantity: req.body.quantity
    }
    res.status(200).send({
        mensagem: 'Insira uma receita',
        receitaAdicionada: recipe
    })
})

module.exports = router