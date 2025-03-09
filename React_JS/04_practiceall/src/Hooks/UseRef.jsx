import React, { useEffect, useRef } from 'react'

function UseRef() {

    const GetUseRefElement = useRef(null)
        console.log(GetUseRefElement)
        console.log(GetUseRefElement.current)
    
    // useEffect(()=>{
    //     console.log(GetUseRefElement)
    //     console.log(GetUseRefElement.current)
    // })

  return (
    <div>
         <h1 ref={GetUseRefElement}>UseRef</h1>
    </div>
  )
}

export default UseRef