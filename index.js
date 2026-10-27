const http = require('node:http')
const fs = require('node:fs')

const server = http.createServer((req, res) => {
    console.log("request made by client")
    res.setHeader('Content-Type', 'text/html')
    let path = './'

    if(req.url === '/'){
        path+= 'index.html'
        res.statusCode = 200
    }else if (req.url === '/about'){
        path+='about.html'
        res.statusCode = 200
    }else if (req.url === '/contact-me'){
        path+='contact-me.html'
        res.statusCode = 200
    }else if (req.url === '/styles.css'){
        path+='styles.css'
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/css')
    }else {
        path+='404.html'
        res.statusCode = 404
    }

    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err)
        }else {
            res.end(data)
        }
    })
})

server.listen(8080, 'localhost', () => {
    console.log("listening")
}) 