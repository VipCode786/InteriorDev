import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Header.scss'
const Header = () => {

     const[show,setShow] = useState(false);

     const handle = ()=>{ setShow(!show)}

  return (
     <div>
         
       <div className='header'>
       <div className='logo'>
          <a href="/">  <img src="/headerImages/logo.svg" alt="" /></a>
       </div>
       <div className='right-header'>
        <div className='gmp'>
            <img src="/headerImages/gmp.svg" alt="" />
       </div>
       <div className='iso'>
            <img src="/headerImages/iso.svg" alt="" />
       </div>
       <div className='menu' onClick={handle}>
            <img src="/headerImages/menu.svg" alt="" />
           
       </div>
      

       </div>

    </div>
    


{show &&<div className='menuItems'>

{/* <NavLink
  to="/faq"
  className={isActive =>
    "nav-link" + (!isActive ? " unselected" : "")
  }
>
  qwerty
</NavLink> */}
     <a href="/">Home</a>
     <a href="/about">About Us</a>
     <a href="/portfolio">Our Portfolio</a>
     <a href="/myteam">Meet Our Team</a>
     <a href="/career">Career</a>
     <a href="/contactpage">Contact Us</a>
     <br/>
    {/* <a href="/about">About</a>
     <a href="/about">Our Portfolio</a>
      <ul>
          <li></li>
          <li></li>
          <li></li>
     </ul> */}
     {/* <li>Meet Our Team</li>
     <li>Careers</li>
     <li>Contact us</li>
     <li></li>
     <li></li> */}

</div>}
</div>
  )
}

export default Header