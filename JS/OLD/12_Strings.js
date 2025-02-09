let Cource = "JavaScript"                //? This is a string with Double Quotes
 
let Role = ' Web-Developer '             //? This is a String With Single Quotes

let Cource_Role = ` With ${Cource} cource you can become a ${Role}`    //? This is a String With backticks

//? this is also called string iterpolation you can insert the js variables in it 
 
console.log(Cource);
console.log(Role);
console.log(Cource_Role);

//* You can not use double quotes inside of double quotes it will consider that much part as string 
// * if you want to use double quotes inside double quotes then use escape sequence  same has single quotes


let tell_1 = ' see hear Let\'s go we should enjoy there!'
let tell_2 = " see hear Let\"s go we should enjoy there!"
let tell_3 = ` see hear Let\`s go we should enjoy there!`

//* You Can Use Single Quotes inside Double and Double inside Single And Back Ticks Too

console.log(tell_1);
console.log(tell_2);
console.log(tell_3);

//!                         String    Methords


console.log(Cource.length)
console.log(Cource.toUpperCase())
console.log(Cource.toLowerCase())
// console.log(Cource.indexOf("s",10))
console.log(Cource.concat(tell_1,Role))
console.log(Cource.slice(0,4))
console.log(tell_1.trim())
