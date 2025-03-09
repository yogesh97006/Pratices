import React, { useContext } from 'react'
import { context } from '../main'

function UseContect() {
const data = useContext(context)
    return (
    <div>
       <h1>{data}</h1>
    </div>
  )
}

export default UseContect