let {add,sub,mult} = require('./05_ModulesEXport') //? this is called object distructering

let output1 = add(10,10)
// let output1 = func1.a(10,10)      //* this import was from key value pair u have to pass same key
let output2 = sub(10,10)
let output3= mult(10,10)


console.log( output1, output2, output3)