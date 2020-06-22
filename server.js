const express = require('express')
const nunjucks = require('nunjucks')


const server = express()

const videos = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server
})

server.get('/', function(req, res) {
    return res.render('home')
})

server.get('/works', function(req, res) {
    return res.render('works', { items: videos })
})


server.get('/about', function(req, res) {
    return res.render('about')
})

server.listen(3000, function() {
    console.log('Servidor rodando')
})