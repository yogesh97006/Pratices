//! ==========>     01  SetTimeOut and SetInterval

// setTimeout(()=>{
//   console.log(" Hii I am Going To Excute After 2 seconds")
// },2000)

// setTimeout(()=>{
//   console.log(" Hii I am Going To Excute After 4 seconds")
// },4000)

// setTimeout(()=>{
//   console.log(" Hii I am Going To Excute After 6 seconds")
// },6000)

// setTimeout(()=>{
//   console.log(" Hii I am Going To Excute After 8 seconds")
// },8000)

// setTimeout(()=>{
//   console.log(" Hii I am Going To Excute After 10 seconds")
// },10000)
// setTimeout(()=>{
//   console.log(" Hii I am Going To Excute After 20 seconds")
// },20000)

//!                            setInterval

// setInterval(()=>{
//  console.log("This Function is going to excute after every 2 seconds")
// },2000)

//?       The settimeOut And setInterval both are async function
//?       the difference between settimeout and setinterval is
//?       1. settimeout only excuted the block of code only one's
//?        2. the setinterval's block of code excutes every certain time that was given like 2 seconds hear

//!                       ==>  2. CallBacks

function Work(Project, Done) {
  let a = " Came to Office";
  let b = Project;
  console.log(a + " And I am Working On That " + b);
  console.log(" And ");
  let c = "completed the project from the new client";
  console.log("I Have " + c);
  console.log("I Got Promoted");
  Done();
}

//@       This is Called CallBack excuting a function inside an onther func

// function Party(){
//     console.log(" I Am Enjoying My Party For My Pramotion ")
// }

// let ProjectName = "AI Game Devlopment Project "

// Work(ProjectName,Party)
// setInterval(()=>{
//     console.log("Start")
//     setTimeout(()=>{                                          //todo => this is called as call back hell
//         console.log(" no :1");
//         setTimeout(() => {
//             console.log(" no :2");
//             setTimeout(() => {
//                 console.log(" no :3");
//                 setTimeout(() => {
//                     setTimeout(() => {
//                         console.log(" no :4");
//                         setTimeout(() => {
//                             console.log(" no :5");
//                             setTimeout(() => {
//                                 console.log(" no :6");
//                                 setTimeout(() => {
//                                     console.log(" no :7");
//                                     setTimeout(() => {
//                                         console.log(" no :8");
//                                     setTimeout(() => {
//                                         console.log(" no :9");
//                                         setTimeout(() => {
//                                             console.log(" no :10");
//                                             setTimeout(() => {
//                                                 console.log(" no :11");
//                                                 setTimeout(() => {
//                                                     console.log(" no :12");
//                                                     setInterval(() => {
//                                                         console.log("lets s2");
//                                                     }, 1000);
//                                                 }, 2000);
//                                             }, 2000);
//                                         }, 2000);
//                                     }, 2000);
//                                 }, 2000);
//                             }, 2000);
//                         }, 2000);
//                     }, 2000);
//                 },2000);
//             },2000);
//         },2000);
//     }, 2000);
//   })
//   console.log("End")
// },25000)



//!                      3.   Promises


let Value=Math.round(Math.random()*10+10)
// console.log(Value);


let promise = new Promise((resolve,reject)=>{
        if(Value>15){
            setTimeout(() => resolve("You Can Go The Pick Nike"), 1000);
        }else{
            setTimeout(() => reject(" No!!!   You Can Not Go For Pick Nike"), 1000);
        }    
        // return promise
    })


// function Hear(){
//     console.log("We are Done Hear .............!");
// }


// console.log(promise)
// console.log(promise())

promise.then((data)=>{
    console.log(data)
},(Err)=>{
    console.log(Err)
})

//!                         4. ASync / Await */

async function Deatils(){
    let Hyd = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("25 Degress Temp")
        },10000)
    })

    let Raj = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("10 Degress temp")
        },20000)
    })
    
    console.log("feteching weather report")
    console.log("------------------------");
    console.log("Fetching the hyderabad's weather ");
    let HydW = await Hyd
    console.log("hyderabad weather is ",HydW);
    console.log("Weather Fetching is Completed");
    console.log("------------------------");
    console.log("fetching rajasthan weather");
    let raj = await Raj
    console.log("Rajasthan Weather is "+raj);
    console.log("Weather Fetching is Completed");
    console.log("------------------------");
}


// Deatils().then((data)=>{
// console.log(data);
// },(err)=>{
// console.log(err);
// })


async function tell(get){
    let marks=20
    setTimeout(()=>{
       marks+=get
    },10000)

    // let total = await marks

    // let total = marks

    // return await total
    // console.log(total)

}

tell().then((val)=>{
    console.log(val);
},(err)=>{
    console.log(err);
})

// tell().then((val)=>{
//     console.log(val);
// },(err)=>{
//     console.log(err);
// })

try{
 console.log(Mahesh)
}catch(err){
    console.log("There is an error")
}

setTimeout(() => {
    console.log("This is One")
}, 1000);
setTimeout(() => {
     console.log("this is two ");
     
}, 2000);
// try{
    // setTimeout(() => {
        // console.log(Three)                     //todo this is the wrong way to write try catch block
// }, 3000);
// }catch(err){
    // console.log(err);
// }

try{
    console.log(Three)                                  //? this is the write way to write the code
}catch(err){
    console.log(err);
}

setTimeout(() => {
    console.log("This is Four")
}, 4000);
setTimeout(() => {
     console.log("This is Five")
}, 5000);



// setInterval(() => {
//     fetch('https://nekos.best/api/v2/neko')
//       .then(response => response.json())
//       .then(json => console.log(json.results[0].url))
    
// }, 100);  

// // https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png



