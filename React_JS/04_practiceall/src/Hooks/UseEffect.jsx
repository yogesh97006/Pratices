import React, { useEffect } from 'react'

function UseEffect() {
   // const [ Value, setValue] = useState(0)

   let Value = 0

   const increment = () =>{
       // setValue(Value+1)
       Value=Value+1
    //    console.log(Value)
   }
   const reset = () =>{
       // setValue(0)
       Value=0
    //    console.log(Value)
   }
   const decrement = () =>{
       // setValue(Value-1)
       Value=Value-1
    //    console.log(Value)
   }

   useEffect(() => {
     console.log(Value)
   },[Value])
   

 return (
   <>
     {/* <h1>hiiiiiiiiiiiiiiiii</h1> */}
     <h1>This is a simple useState Hook file</h1>
       <h2>{Value}</h2>
       <div>
           <button className="btns" onClick={decrement}>-</button>
           <button className="btns" onClick={reset}>Reset</button>
           <button className="btns" onClick={increment}>+</button>
       </div>
   </>
 )
}

export default UseEffect