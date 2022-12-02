import React from 'react'
import './Header.scss'
const Header = () => {
  return (
    <div className='header'>
       <div className='logo'>
            <img src="/headerImages/logo.svg" alt="" />
       </div>
       <div className='right-header'>
        <div className='gmp'>
            <img src="/headerImages/gmp.svg" alt="" />
       </div>
       <div className='iso'>
            <img src="/headerImages/iso.svg" alt="" />
       </div>
       <div className='menu'>
            <img src="/headerImages/menu.svg" alt="" />
       </div>
       </div>

    </div>
  )
}

export default Header