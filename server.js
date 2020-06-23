const express = require('express')
const nunjucks = require('nunjucks')


const server = express()

const videos = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', function(req, res) {

    const data = {
        logo_url: 'https://vignette.wikia.nocookie.net/megamitensei/images/2/28/Phantom_Thieves_Logo.png/revision/latest/scale-to-width-down/250?cb=20170528120634',
        name: 'Phantom Thieves of Hearts',
        welcome: 'Seja bem vindo',
        description: 'Você pode contratar nossos serviços pelas redes sociais',
        links: [
            {name: 'Instagram', url: 'https://www.instagram.com/phantomthieves_/'},
            {name: 'Twitter', url: 'https://twitter.com/westealhearts'},
            {name: 'Facebook', url: 'https://pt-br.facebook.com/TeamThiefsOfHearts/'}
        ]
    }    

    return res.render('home', { data })
})

server.get('/works', function(req, res) {
    return res.render('works', { items: videos })
})


server.get('/about', function(req, res) {
    return res.render('about')
})

server.get('/video', function(req,res) {
    const id = req.query.id

     const video = videos.find(function (video) {
         return video.id == id
     })

     if (!video) {
         return res.send("404 - Video not found")
     }

    return res.render('video', {item: video})
})

server.listen(3000, function() {
    console.log('Servidor rodando')
})