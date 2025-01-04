import React from 'react'


function Greet(){
    return(
        <div>
            <h2>Hello MySelf!</h2>      {/* //todo this is a JSX Code => Javascript XML which allows HTML like Code in Javascript */}
        </div>
    )
}

function Place(props){
    return(
        <div>
            <h2> I Live in {props.lives}</h2>          {/*//? Hear I am Using This Component with custom values using props */}
        </div>
    )
}

const Name = ({name}) =>{
    return(
        <div>
            <h2>{name} and I am Software Engineer</h2>         
             {/*//? Hear I am using this component with custom values this time I am not using props instead I am Destructing It */}
        </div>
    )
}

let lives = "Hyderabad"



function Home() {
  return (
    <div>
        <Greet /><Name name = "Yogesh" /><Place lives={lives} />        {/* //!  This is a Functional Component  */}
    </div>
  )
}

export default Home