let promise = new Promise(function(resolve,reject){
       console.log("its working")         //* how it is printing first 
       resolve(100)
})


console.log(" This is the STMT 1")

setTimeout(function(){
   console.log(" This is the STMT 2")
},5000)

console.log(" This is the STMT 3")

console.log(promise);                         //* when i am calling it hear


let P1 = new Promise( function(resolve,reject){
       console.log("Your Promise is Under Process");
       setTimeout(()=>{
          resolve("Your Promise Is FullFilled 😄")
       },10000)
})

let P2 = new Promise( function(resolve,reject){
       console.log("Your Promise is Under Process");
       setTimeout(()=>{
          reject(new Error("You Promise Did Not Full Filled 😞"))
       },10000)
})


P1.then((value)=>{                      //* to get the value
    console.log(value);
})


P2.then((value)=>{
    console.log(value);
},(error)=>{
    console.log(error)                 //* to ctatch the error
})



// P2.catch((error)=>{
//     console.log("There is Some Error",error);            //* this is also to catch error
// })



