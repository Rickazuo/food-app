
const express = require("express")
const app = express()
const routeRecipes = require('./routes/recipes')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false})) //apenas dados simples
app.use(bodyParser.json()) //json de entrada no body
app.use('/recipes', routeRecipes)


app.use((req, res, next) => {
    const error = new Error('Não encontrado')
    error.status = 404
    next(error)
})
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        error: {
            message: error.message
        }
    })
})

app.listen(8081, function(){console.log()})

module.exports = app