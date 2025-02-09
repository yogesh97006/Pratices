//! Every file In A node js is called as module and those modules are known as custom modules

function add(v1,v2){
  return v1+v2       
  // console.log(v1+v2)
}

function sub(v1,v2){
  return v1-v2
}

function mult(v1,v2){
  return v1*v2
}

// module.exports.a =add            
// //* hear you are kind of passing key value pair. hear u can pass any keys but value should be same as variable names
// module.exports.s = sub              //?  this is the one way to export the modules
// module.exports.m = mult

module.exports = {add,sub,mult}             //? this is the another methord for exporting modules