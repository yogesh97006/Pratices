let http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write("welcome to home page 😃")
        res.end()
    }
    else if(req.url=="/contact"){
        res.end("this is a contact page📱")
    }else{
        // res.writeHead(404,{"Content-Type":"type/html"})
        res.writeHead(404,{"Content-Type":"text/html"})
        res.end('<h1>404 there is an error</h1>')
    }
})

let port = 8000

server.listen(port,()=>{
    console.log(` The Server is Running On The http://www.localhost:${port}`);
})