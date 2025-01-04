import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home.jsx'
import About from '../Pages/About.jsx'
import Project from '../Pages/Project.jsx'
import Contact from '../Pages/Contact.jsx'

function Routers() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Project' element={<Project />}/>
            <Route path='/Contact' element={<Contact />}/>
        </Routes>
    </Router>
  )
}

export default Routers