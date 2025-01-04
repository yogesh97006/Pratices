//!        Hear I Am Praticing SetTime And SetInterval Code


console.log("Hello start")

setTimeout(()=>{
    console.log("It's Working Fine You Should See It")
},5000)

console.log("Hello proccess")

setTimeout(function(){
    console.log("These is also a SetTimeout function which is made throught old function methord")
},5000);

console.log("Hello end")


//!         Hear I Am Writing Code Of Set Interval

console.log("Start");

setInterval(() => {
    console.log("It's Working");
},5000);

setInterval(function(){
  console.log('its also working')
},5000)

console.log("End");
