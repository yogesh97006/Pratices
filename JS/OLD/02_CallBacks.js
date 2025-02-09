//! Hear I am Writing callback code 

function CallBack(val,callback){
   let a = val
   console.log(a);
   ++a
   if(a==6){
    console.log(`${a} is equal to 6`)
    callback(val)
   }
}

let func2 = (v) =>{
    console.log("These is also A function" + "        "+v)
}

//! this is called callback hell

CallBack(1,
    CallBack(2,
        CallBack(3,
            CallBack(4,
                CallBack(5,func2)
            )
        )
    )
)