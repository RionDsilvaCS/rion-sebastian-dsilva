import React from 'react'
import { Navbar } from './components/Navbar/Navbar.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import {Home} from './components/Home/Home.jsx'
import { Project } from './components/Projects/Project.jsx'
import { Hackathon } from './components/Hackathons/Hackathon.jsx'
import { Experience } from './components/Experience/Experience.jsx'
import { About } from './components/About/About.jsx'
function App() {

  return (
    <React.Fragment>
      <div className='main'>
        <Navbar/>
        <Routes>
          <Route 
          path='/' 
          element={
          <React.Fragment>
            <Home />
            <Project />
            <Hackathon />
            <Experience />
            <About />
            </React.Fragment>
          }
          />
          {/* <Route path='/projects' element={}/>
          <Route path='/hackathons' element={}/>
          <Route path='/experience' element={}/> */}

        </Routes>
        </div>
    </React.Fragment>
  )
}

export default App
