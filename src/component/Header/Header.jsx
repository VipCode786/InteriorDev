import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import'./headerToggle.css'
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {

     const[show,setShow] = useState(false);
     const[changeShow,setChangeShow] = useState(false);
     const[changeNav,setChangeNav] = useState(false);
     const[changeBG,setChangeBG] = useState(false);
     const[positionChange, setPositionChange] = useState(false)
    useEffect(() => {
      setShow(false)
    }, [])
    

    const handle = ()=>{ setShow(!show)}

    function menuOnClick(){
        // setChangeShow(!changeShow)
        setChangeNav(!changeNav)
        setChangeBG(!changeBG)
        setPositionChange(!positionChange)
    }

    function outsideOnClick(){
      setChangeShow(false)
      setChangeNav(false)
      setChangeBG(false)
      setPositionChange(false)
  }

  return (
     <div>
         {/* <div className='toggleHeader'>
         <div id="menu">
        <div id="menu-bar" className={changeShow ? "change" : "null"} onClick={()=>menuOnClick()}>
          <div id="bar1" class="bar"></div>
          <div id="bar2" class="bar"></div>
          <div id="bar3" class="bar"></div>
        </div>
        <nav class={changeNav ? "nav change" : "nav"} id="nav">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Blog</a></li>
    </ul>
  </nav> 
</div>

<div class={changeNav ? "menu-bg change-bg" : "menu-bg"} id="menu-bg"></div>
         </div> */}
       <div className='header'>
       <div className='logo'>
          <Link to="/">  <img src="/headerImages/logoB.png" alt="" /></Link>
       </div>
       <div className='right-header'>
        <div className='gmp '>
            <img src="/headerImages/gmp1.png" alt="" />
       </div>
       <div className='iso '>
            <img src="/headerImages/iso2.png" alt="" />
       </div>
       
       {/* <div className='menu' onClick={handle}>
            <img src="/headerImages/menu.svg" alt="" />
           
       </div> */}
       <OutsideClickHandler
      onOutsideClick={() => {
        outsideOnClick();
      }}
    >
       <div className='toggleHeader' >
         <div id="menu" >
        <div id="menu-bar"  className={changeShow ? "change" : "null"} onClick={()=>menuOnClick()}>
          <div id="bar1" class="bar"></div>
          <div id="bar2" class="bar"></div>
          <div id="bar3" class="bar"></div>
        </div>
        
        <nav class={changeNav ? "nav change" : "nav"} id="nav">
        <div className='menuItems'>
        

<Link to="/" onClick={()=>menuOnClick()}>Home &nbsp;</Link>
<Link to="/about"  onClick={()=>menuOnClick()}>About Us &nbsp;</Link>
<Link to="/portfolio"  onClick={()=>menuOnClick()}>Our Portfolio &nbsp;</Link>
<Link to="/myteam"  onClick={()=>menuOnClick()}>Meet Our Team &nbsp;</Link>
<Link to="/career"  onClick={()=>menuOnClick()}>Career &nbsp;</Link>
<Link to="/contactpage"  onClick={()=>menuOnClick()}>Contact Us &nbsp;</Link>

<br/>


</div>
  </nav> 
 
</div>

<div class={changeNav ? "menu-bg change-bg posAbslt" : "menu-bg"} id="menu-bg" ></div>
         </div>
         </OutsideClickHandler>
       </div>

    </div>
    


{/* {show &&<div className='menuItems'>


     <Link to="/" onClick={()=>setShow(false)}>Home</Link>
     <Link to="/about"  onClick={()=>setShow(false)}>About Us</Link>
     <Link to="/portfolio"  onClick={()=>setShow(false)}>Our Portfolio</Link>
     <Link to="/myteam"  onClick={()=>setShow(false)}>Meet Our Team</Link>
     <Link to="/career"  onClick={()=>setShow(false)}>Career</Link>
     <Link to="/contactpage"  onClick={()=>setShow(false)}>Contact Us</Link>
     <br/>
   

</div>} */}

</div>
  )
}

export default Header