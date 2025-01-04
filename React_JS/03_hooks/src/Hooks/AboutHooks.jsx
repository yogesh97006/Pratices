import React, { useEffect, useState, useContext, useRef } from 'react'
import { Context } from '../main'
import './Hooks.css'

function AboutHooks() {

    const [count,setCount] = useState(0)
    console.log(count, " This is from ouy side of useeffect Hook" )

    
    useEffect(()=>{
        console.log(count, " This is from UseEffect Hook" )
    })
    
    const Value = useRef()
    console.log(Value)

    const Func1 = () =>{
        const Data = useContext(Context)
        return(
            <div>
                <h1> I am A {Data} Developer</h1>
            </div>
        )
    }

    const BigFunc = () =>{
        return(
            <Func1 />
        )
    }

    const Increment = () =>{
        setCount(count+1)
    }

    const Reset = () =>{
        setCount(0)
    }

    const Decrement = () =>{
        setCount(count-1)
    }
         
  return (
    <div className='count'>
        <BigFunc />
        <hi>This is a Simple Count Applicatin : {count}</hi>
        <div>
            <button onClick={Increment}>+</button>
            <button ref={Value} onClick={Reset}>RESET</button>
            <button onClick={Decrement}>-</button>
        </div>
    </div>
  )
}

export default AboutHooks