const path = require('path');
const express = require('express');
const hbs = require('hbs');
const forecast = require('./forecast');

const app = express();
//set path for views folder
const viewsPath = path.join(__dirname, '../templates/views');

//const partialPath = path.join(__dirname, '../templates/views');

app.set('view engine', 'hbs');
app.set('views', viewsPath);

hbs.registerPartials(viewsPath);

app.get('', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'meet',
        age: '20'
    })
})

app.get('/weather', (req, res) => {
    
    if (!req.query.address) {
         return res.send({
             err : 'send something',
         });
     }

    forecast.forecast(req.query.address,(err, data)=>{
        if(err){
        return res.send('error');
        }
        res.send({
            forecast : data,
            address : req.query.address,
        })
    })
    // res.send({
    //     forecast: 'its sunny',
    //     temperature: 30,
    //     address : req.query.address,
    // })
})

app.get('/*', (req, res) => {

    res.render('404error', {
        title: 'meet',
        age: '20'
    })
})
app.listen(3000, () => {
    console.log('listening to 3000');
})