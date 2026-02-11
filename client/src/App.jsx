import React  from 'react'
import {   useState } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

import HomePage from './Pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path = '/' element = {<HomePage />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
