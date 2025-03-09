import React, { useState } from 'react'

function UseState() {
    
    const [ Value, setValue] = useState(0)

    const increment = () =>{
        setValue(Value+1)
    }
    const reset = () =>{
        setValue(0)
    }
    const decrement = () =>{
        setValue(Value-1)
    }

  return (
    <>

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

export default UseState