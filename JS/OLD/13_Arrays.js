let Arr1 = [ 10, true, null, BigInt(1233333), undefined, "JavaScript"]

console.log(Arr1);
console.log("The Arr1 Array Length Is => ",Arr1.length);

console.log(Arr1[0]);
console.log(Arr1[6]=Symbol('ab123'));     //? this is how you can put or add new value inside a array

console.log(Arr1);
console.log("The Arr1 Array Length Is => ",Arr1.length);

Arr1[0] = BigInt(1233333)                    //? this is how you change a value inside the array
Arr1[3] = 10
console.log(Arr1);
console.log(["BigInt","Boolean","Null","Number","Undefined","String","Symbol"])      //? these are the 7 primitaive data types
console.log(["BigInt","Boolean","Null","Number","Undefined","String","Symbol"].length)
console.log("The Arr1 Array Length Is => ",Arr1.length);



//!                                   Array Methords

console.log(Arr1.length)
console.log(["BigInt","Boolean","Null","Number","Undefined","String","Symbol"].join(" => DataType, "))
console.log(Arr1.concat(["BigInt","Boolean","Null","Number","Undefined","String","Symbol"]));

let ArrValue1 = Arr1.pop()
console.log(Arr1);
console.log(ArrValue1);

let ArrValue2 = Arr1.push(Symbol("123n"))
console.log(Arr1);
console.log(ArrValue2);

let ArrValue3 = Arr1.shift()
console.log(Arr1);
console.log(ArrValue3);

let ArrValue4 = Arr1.unshift("1237e")
console.log(Arr1);
console.log(ArrValue4);


let ArrValue5 = Arr1.pop()
console.log(Arr1);
console.log(ArrValue5);

for( let a in Arr1.toString()){
    console.log(a,Arr1.toString()[a]);
}


let undefValue;
let nullValue = null;
console.log(undefValue,nullValue);


Arr1.splice(1,0,10,20,30,40,50,)         
 
//?  splice is different then slice because slice create new array and splice changes existing array

console.log(Arr1)

let delval = delete Arr1[0] 

//?  It Delete's the Value inside the array at the given index and it shows 1 empty item and put the length of the array same

console.log(Arr1, " ", delval)

let sliceval = Arr1.slice(1,6)
console.log(sliceval)

console.log(Arr1.sort());
console.log(Arr1.reverse());






