import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
const Footer = () => {
  return (
    <div>

<div className='footer'>

<div>
 <span>Find Us</span>
 <a href="tel:0120-3110478">
      <div className='contactDetails'>
        <img src="/contactUs/phone.svg" alt="" /> &nbsp; &nbsp; &nbsp; <p>0120-3110478</p>
      </div>
 </a>
<br/>
   
    <a href="mailto:info@interiorcraft.in">
      <div className='contactDetails' >
      <img src="/contactUs/email.svg" alt="" /> &nbsp; &nbsp; <p>info@interiorcraft.in</p>
      </div>
    </a>
    <br/>
    <a href="https://www.google.com/maps/place/Interior+Craft/@28.5225138,77.3935619,17z/data=!4m5!3m4!1s0x390ce9d48b8267cd:0xb8ae7c7899c59509!8m2!3d28.5233434!4d77.3962656">
      <div className='contactDetails'>
      <img src="/contactUs/address.svg" alt="" /> &nbsp; &nbsp; <p>A-218, 219, Sector-83,<br/> Phase-II, Noida-201305</p>
      </div>
      </a>
      <br/>
      <div>
      <div className='boxView' style={{justifyContent:"flex-start",margin:"0px"}} >
                    <div className='boxButton row' style={{paddingTop:"5px",paddingBottom:"5px", paddingRight:"15px",paddingLeft:"18px"}}>
                    <a href='Interior_Design_Brochure.pdf' download className='downloadImg'>Download Brochure</a>
                    <img src="downloadImg.png" width="20px" alt="" />
                    </div>
      
      </div>
        {/* <a href='Interior_Design_Brochure.pdf' download> 
        <img width="70%" src="Download brochure.png" alt="" />
        </a> */}
      </div>
 </div>

<div className='resource'>
 <span>Resources</span>
 <p>Railing</p>
 <p>Staircase</p>
 <p>Pergolas</p>
 <p>Canopy</p>
 <p>Gates</p>
 <p>Lift jambs</p>
</div>
<div>
  <span>Instagram</span>
<br/>
<br/>
<div className='row'>
 <div>
 <div className='resoucesBox'> 
   <img src="/FeaturedProjects/door.png" alt="" />
 </div><br/>
 <div className='resoucesBox'> 
 <img src="/FeaturedProjects/gate.png" alt="" /></div>
 </div>
 &nbsp;&nbsp;&nbsp;&nbsp;
 <div>
 <div className='resoucesBox'> 
 <img src="/FeaturedProjects/outdoor.png" alt="" /></div><br/>
 <div className='resoucesBox'>
 <img src="/FeaturedProjects/stairs.png" alt="" /> </div>
 </div>
 </div>
</div>
<div>
 <div className='footerLogo ' >
  <br/>
  <br/>
   <div className='row'>
    <a href='https://instagram.com/best.interior.designer?igshid=N2ZiY2E3YmU='>
   <img src="/Footer/Vector (5).svg" alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
   </a>
   <a href='https://www.youtube.com/watch?v=7FVaxc-4-FQ&list=RD7FVaxc-4-FQ&start_radio=1'>
   <img src="/Footer/Vector (8).svg" alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
   </a>
   <a href='https://www.linkedin.com/company/make-my-house/'>
   <img src="/Footer/Vector (9).svg" alt="" />
   </a>
  </div>
  <br/>
  <div className='fab'>#TheFabExperts</div>
  <br/>
  <p className='fabInfo'>
      Copyright Interior Craft 2022<br/>
      All Rights Reserved<br/>
      All Regular Disclaimer Apply<br/>
      Privacy Policy
</p>
   {/* <img src="/Footer/logo.svg" className="ICLogo" alt="" /> */}
  </div>
  </div>
  </div>

    </div>
  )
}

export default Footer