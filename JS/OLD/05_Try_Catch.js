setTimeout(() => {
    console.log("first")        
}, 1000);

// try{
//     setTimeout(() => {
//         console.log(second);
//     }, 2000);
// }
// catch(err){
//     console.log(err)
// }


setTimeout(() => {
    try{
        console.log(second);
    }catch(error){
        console.log(error)
    }
}, 2000);



setTimeout(() => {
    console.log("third");
}, 3000);

setTimeout(() => {
    console.log("fourth");
}, 4000);

setTimeout(() => {
    console.log("fifth");
}, 5000);