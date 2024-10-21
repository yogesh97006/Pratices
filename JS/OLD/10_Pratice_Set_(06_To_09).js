//*                6)            Promisees_All

let P1 = new Promise((resolve,reject)=>{
      setTimeout(()=>{resolve(100)},1000)
})

let P2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{(resolve(500))},5000)
})

let P3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(1000)},60000)
})

// P1.then((val)=>{console.log(val);})
// P2.then((val)=>{console.log(val);})
// P3.then((val)=>{console.log(val);})

// let PALL_1 = Promise.all([P1,P2,P3])
// PALL.then((val)=>{
//   console.log(val);
// })


// let PAll_2 = Promise.allSettled([P1,P2,P3])
// PAll_2.then((Val)=>{
//     console.log(Val);
// })

// let Pall_3 = Promise.race([P1,P2,P3])
// Pall_3.then((Val)=>{
//     console.log(Val);
// })

// let Pall_4 = Promise.any([P1,P2,P3])
// Pall_4.then((Val)=>{
//     console.log(Val);
// })


// let Pall_5 = Promise.resolve(50000)
// Pall_5.then((val)=>{
//     console.log(val);
// })


// let Pall_6 = Promise.reject(new Error ("the error is 500 server is unavailable"))
// Pall_6.then((val)=>{
//     console.log(val.message);
// })


//*               7)        Async and Await

let AllPrsomises = async ()=>{

    let P1 = new Promise(function(resolv,reject){
        setTimeout(function(){
            resolv(" The Current Cource is Java_Script ")
        },5000)
    })

    let P2 = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(" The Next Is To Learn Is Python ")
        },10000)
    })

    console.log(" 2 ");
    await P1.then((val)=>{console.log(val)})
    await P2.then((val)=>{
        console.log(val)
    })
    
    console.log( " 3 ");

}

// console.log(" 1 ")
// AllPrsomises()
// console.log(" 4 ")


async function MyFun(){
    // return MaheshDalle
    try{
     return "MaheshDalle"
    }catch(error)
    {
        return(error.message)
    }
}


// console.log(MyFun())



// MyFun().then((val)=>{
//   console.log(val);
// })

// let val = MyFun()
// console.log(val);


//*                    8)         Error  Handling

/*

setTimeout(()=>{
 console.log(" Set Timeout 1");
},1000)



setTimeout(()=>{
 console.log(" Set Timeout 2");
//  console.log(MaheshDalle);
try{
    console.log(MaheshDalle);
}catch(error)
{
    console.log(error.message);
}
},5000)

setTimeout(()=>{
 console.log(" Set Timeout 3");
},10000)


*/

//*             09)          Error Objects

// P3.then((val)=>{console.log(val);})

try{
    console.log(MaheshDalle);
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

try{
    throw new Error(" these Error was Throw ")
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
