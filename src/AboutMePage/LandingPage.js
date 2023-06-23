import React from 'react'
import Projects from "./Projects"
import NavBar from "./NavBar"
import Education from './Education'
import Internship from './Internship'
import Break from './Break'
import Skills from './Skills'
import Achivements from './achivements'
import Sidebar from './Sidebar'

const LandingPage = () => {
  return (
    <div>
        <NavBar />
        <Sidebar />
        <Education />
        <Projects />
        <Internship />
        <Skills />
        <Achivements />
        

    </div>
  )
}

export default LandingPage