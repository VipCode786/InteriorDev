import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Header.scss'
const Header = () => {

     const[show,setShow] = useState(false);

     const handle = ()=>{ setShow(!show)}

  return (
     <div>
         
       <div className='header'>
       <div className='logo'>
          <Link to="/">  <img src="/headerImages/logo.svg" alt="" /></Link>
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
     <Link to="/">Home</Link>
     <Link to="/about">About Us</Link>
     <Link to="/portfolio">Our Portfolio</Link>
     <Link to="/myteam">Meet Our Team</Link>
     <Link to="/career">Career</Link>
     <Link to="/contactpage">Contact Us</Link>
     <br/>
    {/* <Link to="/about">About</Link>
     <Link to="/about">Our Portfolio</Link>
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