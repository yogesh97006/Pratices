//! Hear I Am Practing the Promise Methords

let PromiseOne = new Promise((resolve, reject) => {
  resolve("Its has been resolved");
});

let a = PromiseOne;

// console.log(a);
// console.log(PromiseOne)

// PromiseOne.then((value)=>{
//     console.log(value)
// })

PromiseOne.then((val) => {
  let a = new Promise((resolve, reject) => {
    resolve("Promise One iS Solved This is in Promise a " + val);
  });
  return a; //+  This Is Called Promise Chaining
})
  .then((newValue) => {
    // console.log(newValue);
    let b = new Promise((resolve, reject) => {
      resolve("I Should End Hear b " + newValue);
    });
    return b;
  })
  .then((finale) => {
    // console.log(finale);
  });


  // let P2 = Promise.resolve("B");
//   let P2 = Promise.reject("B");
  let P3 = Promise.resolve("C")
//   let P3 = Promise.reject("C")
    let P1 = Promise.resolve("A");
//   let P1 = Promise.reject("A");

// console.log(P1)

//todo  => It Will give the value of resolve Promise's in array form or even one rejected Promise  
// Promise.all([P1, P2, P3]).then((val) => console.log(val +" All Passed")).catch((err)=>console.log(err," It Has Been Failed "));
// Promise.all([P1, P2, P3]).then((val) => console.log(val +" All Passed"),(val)=>console.log(val," It Has Been Failed "));


//? promise.allSettled => it will wait for all the promises to be settle either resolve or rejected shows the result of fullfilled or rejected in array formate
// Promise.allSettled([P3,P2,P1]).then((Val)=>console.log(Val))
// Promise.allSettled([P1,P2,P3,P2,P1]).then((Val)=>console.log(Val))

//+ this will give you a first excuting promise either fullfiled or rejected
// Promise.race([P2,P1,P3]).then((V)=>console.log(V+" This One IS First"),(E)=>console.log(E +" This One Is First "))


//@ it give's only first resolved and ignores the rejected values and if all are rejected then it will throw aggregate Error
// Promise.any([P1,P2,P3]).then((V)=>console.log(V))


//!!!!!!!!!!!!!!!!! ========== >   If You Write Promise.then([P1,P2,P3]) 

//?      it will give u the values how you called it the sequence in the promise. then

let Dummy = true

let CheckPromise = (Val)=>{
        return new Promise((resolve,reject)=>{
        if(Val==true){
            resolve("It Was A Real Promise")
        }else{
            reject("It Was A Fake Promise")
        }
        console.log(Val);
    })
}  

// setInterval(()=>{
//   CheckPromise(Dummy=!Dummy).then((Value)=>{
//         console.log(Value)
//     }).catch((Error)=>{
//         console.log(Error)
//     })
// },10000)

let fetchData = (Data) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(` The New Data Has Came #${Data}`),1000)
    })
}

// let Count = 1 
// setInterval(()=>{
//     // fetchData(Count).then((Value)=>{console.log(Value)}).catch((error)=>{console.log(error)})
//     fetchData(Count++).then((Value)=>{console.log(Value)}).catch((error)=>{console.log(error)})
//     // fetchData(Count).then((Value)=>{Value}).catch((error)=>{error})
// },2000)


let finalPromise = Promise.reject("Failed 404 😕")
// let finalPromise = Promise.reject(new Error("Failed 404 😕"))
finalPromise.then((val)=>{
  console.log(val)
}).catch((Error)=>{
  console.log(Error)
})
