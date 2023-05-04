const express = require('express')
const app = express()
cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipe.json');

app.use(cors())

app.get('/', (req, res) => {
  res.send('Mangia Italiano is Running')
})

app.get('/chefs', (req, res) => {
  res.send(chefs)
})

app.get('/chefs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const chefRecipes = recipes.filter(n => n.chef_id === id)
  res.send(chefRecipes)
})

app.get('/recipes', (req, res) => {
  res.send(recipes)
})
app.get('/recipes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const selectedRecipes = recipes.find(n => n.id === id)
  res.send(selectedRecipes)
})

app.listen(port, () => {
  console.log(`Mangia Italiano running on port ${port}`)
})