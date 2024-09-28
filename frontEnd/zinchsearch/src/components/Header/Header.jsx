import React from 'react'
import email from './../../assets/email.png'
import gopher from './../../assets/gopher2.png'
import zincsearch from './../../assets/zinc.png'
import './Header.css'


function Header() {
  return (
    <div className='container'>
      <div className='header_left'>
          <img className='imagen3' src={zincsearch} alt='Correo'></img>
          <img className='imagen2' src={gopher} alt='Correo'></img>
          
          <span>Email@Search </span>
      </div>
      <div className='header_rigth'>
        <img className='imagen1' src={email} alt='Correo'></img>
      </div>  
    </div>

  )
}

export default Header