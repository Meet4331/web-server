const path = require('path')
const express = require('express');
const app = express();

const filedir = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../views');
console.log(filedir);

//views path
app.set('view engine', 'hbs');
app.set('views', viewsPath);

//for static home page
app.use(express.static(filedir));

app.get('', (req, res) => {
    res.render('index');
})
app.get('/about', (req, res) => {

    res.render('about');
})
app.get('/weather', (req, res) => {
    res.send('from weather ');
})
app.listen(3000, () => {
    console.log('listing to port 3000');
})