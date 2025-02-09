const { log, error } = require('console')
let fs = require('fs')

//? fs  => File System           
//? It Can Create a file, edit a file, rename a file or deleta a file

//***   It Works Both Way Syncs And Async's Way     */

//! Sync Way Which Code Gets Excuted By Line By Line

// fs.mkdirSync("./FS")

let data = "This is Syncs File "

// fs.writeFileSync('./FS/FSAsync.js',data)

// fs.appendFileSync('./FS/FSAsync.js'," I Am Going To Change File Type And Name Of The File ")

// let output = fs.readFileSync("./FS/FSAsync.js",'utf-8')
// console.log(output)
// console.log(output.toString())

// fs.renameSync("./FS/FSAsync.js","./FS/FSSync.txt")  //* hear i change file type and name of file using sync way

// fs.unlinkSync('./FS/FSSync.txt')

// fs.rmdirSync("./FS")


//!                            Async

// fs.mkdir("./FS",(err)=>{
//     console.log(err);
// })

// fs.writeFile('./FS/FSAsync.js',data,(err)=>{
//     console.log(err);
// })

// fs.appendFile("./FS/FSAsync.js","add more data to it",(err)=>{
//     console.log(err);
// })

// fs.readFile('./FS/FSAsync.js',(err,data)=>{
//     let output = data
//     console.log(output); 
//     console.log(data.toString());
// })

// fs.rename('./FS/FSAsync.js','./FS/FSAsync.txt',(err)=>{
//     console.log(err);
// })

// fs.unlink('./FS/FSAsync.txt',(error)=>{
//     console.log(error);
// })

// fs.rmdir("./FS",(err)=>{
//     console.log(err);
// })