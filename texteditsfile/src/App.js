import Navbar from './components/Navbar'
import Input from './components/input'
import './App.css'
import Alert from './components/alert'
import About from './components/About'
import React,{useState} from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'


export default function App() {
  const [alert, setalert]=useState(null)

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      typ:type
    })
  }
  setTimeout(() => {
    setalert(null)
  }, 2000);
  
  return (
    <div>
      <HashRouter>
            <Routes>
              <Route path="/" element={<Navbar/>}/>
              <Route path="/About" element={<About/>}/>
            </Routes>
            <div className='my-5'>
            <Routes>
              <Route path="/" element={<Input showalert={showalert} alert={alert}/>}/>
            </Routes>
            </div>
        <Alert alert={alert}/> 
      /</HashRouter>
    </div>
  )
}
