const express = require("express")
const app = express()
const routeRecipes = require('./routes/recipes')

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
// FAKE DATABASE
// let recipes = []


// // CRIAR O APP
// const app = express()

// app.use(express.json())

// app.get("/dashboard", (req, res) => {
//     const dailyRecipe = {id:Math.random(), recipeName: "Batata", prepareTime: "1 hora", portion: "4 pratos", date: new Date().getHours(), tagMeal: 0, favorite: 0}
//     // const {id, name_recipe, time_prepare, portion, difficulty, date, tag_meal, favorite} = req.body
//     res.send(dailyRecipe)
// })
// // app.get("/books", (req, res) => {
// //     const allBooks = books;
// //     return res.status(200).json(allBooks)
// // })
// //APLICAR MIDDLEWARES

// MANDAR O SERVIDOR RODAR
app.listen(8081, function(){console.log()})

module.exports = app