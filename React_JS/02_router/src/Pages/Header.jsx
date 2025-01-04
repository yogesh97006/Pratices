import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home.jsx'
import About from '../Pages/About.jsx'
import Project from '../Pages/Project.jsx'
import Contact from '../Pages/Contact.jsx'


function Header() {
  return (
    <div>
        <h1>Hiiiiiiiiiiiiiiiiiiiiiiiiiiii</h1>
        <Link to='/'><Home /></Link>
        <Link to='/About'><About /></Link>
        <Link to='/Contact'><Contact /></Link>
        <Link to='/Project'><Project /></Link>
    </div>
  )
}

export default Header