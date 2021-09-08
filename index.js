const express = require('express')
const app = express()
const port = 3000

const message = `Hello from version ${process.env.APP_VERSION}`

app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: message })
});

app.get('/hello', function (req, res) {
    res.render('hello', { title: 'Hey', message: message })
});

app.listen(port, () => {
    console.log(`Listening on ${port}`)
});