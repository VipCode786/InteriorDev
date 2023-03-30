import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <div>

<div className='footer'>

<div>
 <span>Find Us</span>
 <a href="tel:0120-3110478">
      <div className='contactDetails'>
        <img src="/contactUs/phone.svg" alt="" /> &nbsp; &nbsp; <p>0120-3110478</p>
      </div>
 </a>
   
    <a href="mailto:info@interiorcraft.in">
      <div className='contactDetails' >
      <img src="/contactUs/email.svg" alt="" /> &nbsp; &nbsp; <p>info@interiorcraft.in</p>
      </div>
    </a>
   
    <a href="https://www.google.com/maps/place/Interior+Craft/@28.5225138,77.3935619,17z/data=!4m5!3m4!1s0x390ce9d48b8267cd:0xb8ae7c7899c59509!8m2!3d28.5233434!4d77.3962656">
      <div className='contactDetails'>
      <img src="/contactUs/address.svg" alt="" /> &nbsp; &nbsp; <p>A-218, 219, Sector-83,<br/> Phase-II, Noida-201305</p>
      </div>
      </a>
    
      <div>
      
        {/* <a href='Interior_Design_Brochure.pdf' download> 
        <img width="70%" src="Download brochure.png" alt="" />
        </a> */}
      </div>
 </div>

<div className='resource'>
 <span>Resources</span>
 <Link to="portfolio" state={{ from: "railing" }}>
 <p>Railing</p>
    </Link>
<Link to="portfolio" state={{ from: "staircase" }}>
 <p>Staircase</p>
 </Link>

 <Link to="portfolio" state={{ from: "pergola" }}>
 <p>Pergolas</p>
 </Link>

 <Link to="portfolio" state={{ from: "canopy" }}>
 <p>Canopy</p>
 </Link>

 <Link to="portfolio" state={{ from: "gate" }}>
 <p>Gates</p>
 </Link>

 <Link to="portfolio" state={{ from: "otherProjects" }}>
 <p>Other Projects</p>
 </Link>
 
</div>
<div>
  <span>Instagram</span>
<br/>
<br/>
<div className='row1'>
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
  
   <div className='row1' style={{marginTop:"15px"}}>
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
  <div className='fab'>#TheFabExperts</div>
  <br/>
  <p className='fabInfo'>
      Copyright Interior Craft 2022<br/>
      All Rights Reserved<br/>
      All Regular Disclaimer Apply<br/>
      <Link to="/policy">Privacy Policy &nbsp;</Link>
</p><br/>
<div className='boxView' style={{justifyContent:"flex-start",margin:"0px"}} >
                    <div className='boxButton row1 buttonPadding' >
                    <a href='Interior_Design_Brochure.pdf' download className='downloadImg'>Download Brochure</a>
                    <img src="downloadImg.png"  alt="" />
                    </div>
      
      </div>
   {/* <img src="/Footer/logo.svg" className="ICLogo" alt="" /> */}
  </div>
  </div>
  </div>

    </div>
  )
}

export default Footer