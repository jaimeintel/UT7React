import React from 'react'
import './HeaderComponent.css'
import logo from "../assets/logo-viajes.jpg";
function HeaderComponent() {
  return (
    <header className='Header'>
      <div className='logo'>
         <img src={logo}/>
        <h3>ChatbotViajes.es</h3>
      </div>
    </header>
  )
}

export default HeaderComponent;