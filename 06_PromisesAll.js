let promise_1 = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        // reslove(" These is => promise_1")
        reject("error")
    },5000)
})


let promise_2 = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        // reslove(" These is => promise_2")
        reject("error")
        // reject(new Error (" These promise also have error"))
    },10000)
})

let promise_3 = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        // reslove(" These is => promise_3")
        reject("error")
    },15000)
})

// promise_1.then((val)=>{
//   console.log(val);
// })

// promise_2.then((val)=>{
//     console.log(val);
//   })

// promise_3.then((val)=>{
//     console.log(val);
//   })  


// let promise_All = Promise.all([promise_1,promise_2,promise_3])
// let promise_All = Promise.allSettled([promise_1,promise_2,promise_3])
// let promise_All = Promise.race([promise_1,promise_2,promise_3])
// let promise_All = Promise.any([promise_1,promise_2,promise_3])
// let promise_All = Promise.resolve(10000)
// let promise_All = Promise.reject(new Error (" sorry we have error"))
// promise_All.then((val)=>{
//     console.log(val);
// })
