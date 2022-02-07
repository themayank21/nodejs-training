const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("This is Home page")
    }
    else if(req.url === '/about'){
        res.end("This page is about history")
    }
    else{
        res.end(`
        <h1>Oops!!!</h1>
        <p>We dont Have the page that you were requesting</p>
        <a href='/'>Home</a>
        `)
    }
    
})

server.listen(5000);