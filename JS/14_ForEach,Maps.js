let Arr1 = [ 10, 20, 30 , 40, 50, 60, 70, 80, 90]

for( let x=0;x<Arr1.length;++x){
      console.log(Arr1[x]*Arr1[x])
}

for(let y in Arr1 ){
    console.log(y , ' and ', Arr1[y]*Arr1[y])
}

for(let z of Arr1){
    console.log(z*z)
}

Arr1.forEach((item)=>{                 //* it changes on original array
    console.log(item*item)
})

console.log("=====================================> ",Arr1);


let ArrToString = Arr1.toString()
console.log(ArrToString, typeof ArrToString);

let StingToArray = Array.from(ArrToString)
console.log(StingToArray, typeof StingToArray)



//!            Maps

let Arr2 = [ 2, 4, 6, 100, 8, 10 ]
delete Arr2[3]
console.log(Arr2);

let Arr3 = Arr2.map((v)=>{
   return v
})
console.log(Arr3)

let Arr4 = [ 10, 15, 20, 25, 30 ]

let Arr5 = Arr4.filter((v)=>{
    return v 
})
console.log(Arr5);

let Arr6 = Arr2.concat(Arr4)
console.log(Arr6);

let arr7 = Arr6.reduce((a,b) => a+b)
console.log(arr7)
