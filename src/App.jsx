import { useState,useEffect } from 'react'
import axios from 'axios'
import { Routes,Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './component/Home'
import Contact from './component/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
   <Routes>
    <Route index element={<Home/>} />
    <Route path='/contact' element={<Contact/>} />
   </Routes>
  )
}

export default App
