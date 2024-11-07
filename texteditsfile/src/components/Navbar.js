import React from 'react'
import './navcss.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const nav=useNavigate()
  return (
    <>
      <nav className="nav">
        <ul className="nava">
        <li className="bba bb">TextEditz</li>
        <li className="bb bbm" onClick={()=>{nav("/About")}} aria-current="page" to="/About">About</li>
        </ul>
      </nav>
    </>
  )
}
