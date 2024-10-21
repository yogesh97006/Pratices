async function AsyncFunc()
{
    let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Async + 1")
    },5000)

})

let Promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve("Async + 2")
    },10000)
})

let Promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Async + 3")
    },2000)
})

console.log(" B ");
let p1 = await promise1.then((val)=>{console.log(val);})
let p2 = await Promise2.then((val)=>{console.log(val);})
let p3 = await Promise3.then((val)=>{console.log(val);})
console.log(" C ");

}

let MyFun = async ()=>{console.log(" A ");
await AsyncFunc()
console.log(" D ");}

MyFun()



// promise1.then((val)=>{
//     console.log(val);
// })
// Promise2.then((val)=>{
//     console.log(val);
// })

// async function MyFun(){
//     return "asyn + 1"
// }

// MyFun().then((val)=>{
//     console.log(val);
// })


// async function MyFun(){
//     console.log("Hiiii");
// }

// MyFun()
// MyFun().then((v)=>{
//     console.log(v);
// })

