import React from 'react'

function Component() {
    
    const Styles = {
        backgroundColor:"black",   //! you can write like this also */
        color:'white'
    }

  return (
    <div>
        <input style={Styles} type='text' placeholder='Hii You Can Write Any Thing Hear'  onChange={(e)=>{  {/*//! this is called as line style */}
            console.log(e.target.value)
        }}/>
    </div>
  )
}

export default Component