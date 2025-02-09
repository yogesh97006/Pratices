//!         In JS There Are Three Variable Declartion which are used to declare a variable ( Var, Let, Const ) 
//?           They have different Behaviour in terms of scope , reassignment and hoisting

// console.log(var1);                          //*  var has a functional scope  if it declared inside function it cannot access 
// console.log(var2);                       //*  value outside but it written inside the block scope it can access values
// console.log(var3);

var var1 = "JS"
                                         //+  var and let can be reassigned and u can intiliaze without values
// let var2 = "Node"
let var2
console.log(var2);
var2 = "Node"                                   //* let and const has a block scope
console.log(var2);

const var3 = 'react'
// const var3
console.log(var3);
// var3 = 'react'
// console.log(var3);

console.log(var1,var2,var3);


//!   DataTypes there are two types primitive and non-primitive Datatypes

let var4 = [ true, BigInt(123456789123456789), 2000, null, "JavaScript", undefined]     //! can not access symbol it making some problem

for(let i in var4){
    console.log(` The Value of ${i} place and the Value is ${var4[i]} and with the DataType of ${typeof var4[i]}`);
}

console.log(null==null);
console.log(typeof null);
console.log(typeof null);

//? So primitive DataTypes Are Boolean, Bigint, Number, Null, String, Symbol, Undefined
//todo  ==>  if you try to find null type with help of typeof then you will get the object as it type

//?  Non-primitive Datatype are Arrays, Objects, Functions, Date
//* This are Mutable there are saved by reference  


