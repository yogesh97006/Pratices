
try{
    console.log(MaheshDalle);

}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

try{
    throw new Error('These Error is Throw Purposely')  //* custom errors

}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}