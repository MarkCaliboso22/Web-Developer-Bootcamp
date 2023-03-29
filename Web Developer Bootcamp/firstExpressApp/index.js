const express = require("express");
const app = express()

// app.use((req, res) => {
//     console.log("We got a new requesttt!!")
//     res.send("Salutations internet traveller, we have received your correspondence :D")
// })
app.get('/', (req, res) => {
    res.send('The page of Home')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.post('/info', (req, res) => {
    res.send('silly billy this is a post request not the /info get request')
})

app.get('/info', (req, res) => {
    res.send('Welcome to my virtual Mind Palace')
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})