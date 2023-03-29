const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/mushrooms', (req, res) => {
    const mushrooms = [
        'Button', 'Cup', 'Flat', 'Swiss', 'Portabello', 'Shiitake', 'Oyster', 'Enoki' 
    ]
    res.render('mushrooms', { mushrooms })
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 100) + 1;
    res.render('random', { rand: num })
})

app.listen(3000, () => {
    console.log("CAN YOU HEAR THAT?! ITS COMING FROM PORT 3000!!")
})