 import React from 'react'
 import Header from './Components/Onboarding.jsx'
 import Home from './Components/Home.jsx';
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Boarding from './Components/Boarding.jsx';
function App() {
 

  return (
    <>

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Boarding />} />
    <Route path="/boarding" element={<Boarding/>} />
    
  </Routes>
</BrowserRouter>
      
    </>
  )
}

export default App
