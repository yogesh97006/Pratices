// let Value = prompt("Please Enter a Value")
// if(Value>5&&Value<10){
//  console.log("You are Small Child");
// }else if(Value>10&&Value<16){
//     console.log("You Can Not Drive Yet")                //todo this is if else if else
// }else if(Value>16&&Value<18){                                         
//     console.log("You Can Drive Gearless Vechiles")
// }else if(Value>18){
//     console.log("You Can Drive Any Vechile")
// }else{
//     console.log("please Enter a Valid Age");
// }


//! switch

let a = "apple"

switch (a) {
    case "banana":
        console.log("Banana");
        break;
    case "KIWI":
        console.log("KIWI");
        break;
    case "Graphes":
        console.log("Graphes");
        break;
    case "apple":                             //todo this is switch statement
        console.log("apple");
        break;
    case "Orange":
        console.log("Orange");
        break;
    default:
        console.log("Not Found 404");
        break;
}


let age = 20 
                         //todo this is called ternary operator
console.log(age>18?" You Can Get Licence ": " You Can Not Get Licence ")