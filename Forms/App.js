import React from 'react'

import Form1  from './Form1'
import Form2 from './Form2'
import Form3  from './Form3'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
    <Router>
   
    <Routes>
    <Route path='/' element={<Form1/>}/>
      <Route path='/form2' element={<Form2/>}/>
      <Route path='/form1' element={<Form1/>}/>
      <Route path='/form3' element={<Form3/>}/>
      <Route path='/form2' element={<Form2/>}/>
      </Routes>
    </Router>
  
    </div>
  )
}

export default App 


