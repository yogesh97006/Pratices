let fs = require('fs')
let http = require('http')


let server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end("<h1>Welcome to Home Page</h1>")
        console.log(req.url);
    }
    else if(req.url=='/contact'){
        res.end("<h1>This is a contact page</h1>")
        console.log(req.url);
    }
    else if(req.url=='/about'){
        fs.readFile('./10_JSON.json','utf-8',(err,data)=>{
            let out = JSON.parse(data)
            // console.log(out)
            // res.write(out.name)
            console.log(req.url);
            console.log(`My Name is ${out.name} and my username on GitHub Profile is : ${out.login}`);
            res.end(`My Name is ${out.name} and my username on GitHub Profile is : ${out.login}`)
        })
    }
    else{
        res.end("<h1>404 there is an error</h1>")
        console.log(req.url);
    }
})

server.listen(8000,()=>{
    console.log(` The Server Is Running On http://www.localhost:8000`);
})