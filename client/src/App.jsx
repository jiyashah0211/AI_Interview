import React  from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import TechnicalSetup from './Pages/TechnicalSetup'
import BehavioralSetup from './Pages/BehavioralSetup'
import MixedSetup from './Pages/MixedSetup'
import Dashboard from './Pages/Dashboard'
import About from './Pages/About'
import Pricing from './Pages/Pricing'
import InterviewSession from './Pages/InterviewSession'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path = '/' element = {<HomePage />} />
        <Route path = '/technical' element = {<TechnicalSetup />} />
        <Route path = '/behavioral' element = {<BehavioralSetup />} />
        <Route path = '/mixed' element = {<MixedSetup/>} />
        <Route path = '/dashboard' element = {<Dashboard />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/pricing' element = {<Pricing />} />
        <Route path = '/interview-session' element = {<InterviewSession />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
