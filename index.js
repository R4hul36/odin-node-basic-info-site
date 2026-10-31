const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    res.sendFile('./about.html', {root: __dirname})
})

app.get('/contact-me', (req, res) => {
    res.sendFile('./contact-me.html', {root: __dirname})
})

app.use(express.static(__dirname))

app.use((req, res) => {
    res.status(404).sendFile('./404.html', {root: __dirname})
})

const PORT = 8080
app.listen(PORT, (err) => {
    if(err){
        throw err
    }
    console.log('listening')
})

// const server = http.createServer((req, res) => {
//     console.log("request made by client")
//     res.setHeader('Content-Type', 'text/html')
//     let path = './'

//     if(req.url === '/'){
//         path+= 'index.html'
//         res.statusCode = 200
//     }else if (req.url === '/about'){
//         path+='about.html'
//         res.statusCode = 200
//     }else if (req.url === '/contact-me'){
//         path+='contact-me.html'
//         res.statusCode = 200
//     }else if (req.url === '/styles.css'){
//         path+='styles.css'
//         res.statusCode = 200
//         res.setHeader('Content-Type', 'text/css')
//     }else {
//         path+='404.html'
//         res.statusCode = 404
//     }

//     fs.readFile(path, (err, data) => {
//         if(err){
//             console.log(err)
//         }else {
//             res.end(data)
//         }
//     })
// })

// server.listen(8080, 'localhost', () => {
//     console.log("listening")
// }) 