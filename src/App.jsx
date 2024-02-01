import { useState,useEffect } from 'react'
import axios from 'axios'
import { Routes,Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './component/Home'
import Contact from './component/Contact'
import Resume from './component/Resume'
import Services from './component/Services'
import Blog from './component/Blog'


function App() {
  const [count, setCount] = useState(0)

  return (
   <Routes>
    <Route index element={<Home/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/resume' element={<Resume/>} />
    <Route path='/service' element={<Services/>} />
    <Route path='/blog' element={<Blog/>} />
   </Routes>
  )
}

export default App
