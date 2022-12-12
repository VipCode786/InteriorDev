import React, { useEffect } from 'react'
import HomeFirst from '../../component/HomePageVideo/HomeFirst'
import OnScrollVideo from '../../component/HomePageVideo/OnScrollVideo'
import CountUp from "react-countup"

import './home.scss'
// import Client from '../../component/HomePageVideo/Client'
import OurClients from '../../component/HomePageVideo/OurClients'
import FourDProcess from '../../component/HomePageVideo/FourDProcess'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Scrollv from '../../component/HomePageVideo/Scrollv'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import index1 from './index1.html'
const myHTML =
`<div class="container">
<p>Page Container of a ugly example</p>
<div class="sticky-container">
  <p>Sticky container</p>
  <div class="sticky">
    <p>Sticky</p>
    <div id="animation-container"></div>
  </div>
</div>
</div>
<script src="./scrollAnimate.min.js"></script>
      <script src="./script4.js"></script>`
{/* <script src="./scrollAnimate.min.js"></script>

<script>
var $aContainer = document.getElementById("animation-container");
var aContainerRect = $aContainer.getBoundingClientRect();
var start = aContainerRect.top;
var length = aContainerRect.height + 100; //Height of the container plus a offset for better presentation
scrollAnimate({
  frames: {
    path: "./frames/",
    prefix: "frame_",
    extension: "jpg",
    amount: 40,
    pad: "00"
  },
  parent: $aContainer,
  scroll: {
    start: start,
    length: length
  }
})'
</script> */}
const Home = () => {
  
  return (
      <div>
        <HomeFirst/>
       
       
        
      <div className='border'>
          <div className='borderSet'></div>
          <div className='borderText'>BESPOKE</div>
          <div className='borderSet'></div>
          <div className='borderText'>LUXE</div>
          <div className='borderSet'></div>
      </div>
      <div className='home'>
      <div className='whatWeMake'>
      <p>What WE MAKE</p>
      
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: myHTML }} />; */}

 <div>     
<div class="container">
<p>Page Container of a ugly example</p>
<div class="sticky-container">
  <p>Sticky container</p>
  <div class="sticky">
    <p>Sticky</p>
    <div id="animation-container"></div>
    <p>Sticky</p>
  </div>
</div>
</div>
<script src="scrollAnimate.min.js"></script>
      <script src="script2.js"></script>
</div>
     
   {/* <Helmet> 
      <script src="scrollAnimate.min.js"></script>
      <script src="script2.js"></script>
      </Helmet> */}
      <Scrollv/>
      {/* <OnScrollVideo/> */}
      <iframe height="500" width="100%" src="index1.html" ></iframe> 
      {/* <div dangerouslySetInnerHTML={{ __html: index1}} /> */}
      <div className='border'>
          <div className='borderSet'></div>
          <div className='borderText'>ELEGANCE</div>
          <div className='borderSet'></div>
          <div className='borderText'>INGENIOUS</div>
          <div className='borderSet'></div>
      </div>
      <div>
     
     
      <div className='whatWeMake'>
      <p>Our 4D Approach</p>
      </div>
      
  
      
      </div>

      <div className='Our4dProcess'> 
      <FourDProcess/>
      <div className='boxView'>
                    <div className='boxButton'>
                    <Link to="/about">About</Link>
                    </div>
                    </div>
      <div className='border'>
          <div className='borderSet'></div>
          <div className='borderText'>MODERNITY</div>
          <div className='borderSet'></div>
          <div className='borderText'>VOUGE</div>
          <div className='borderSet'></div>
      </div>
       </div>
      
      <div className='counter'>

      <div className='counter-box'>
      <p> Worked with us</p>
      <div className='text-right'>
      <div  className="count">
      <CountUp  end={1000} duration={3}/> +
      </div>
      <p>hello</p>
      </div>
      </div>

      <div className='counter-box'>
      <p> Worked wit us</p>
      <div className='text-right'>
      <div  className="count">
      <CountUp  end={1000} duration={3}/> +
      </div>
      <p>hello</p>
      </div>
      </div>

      <div className='counter-box'>
      <p> Worked wit us</p>
      <div className='text-right'>
      <div  className="count">
      <CountUp  end={1000} duration={3}/> +
      </div>
      <p>hello</p>
      </div>
      </div>
      </div>


      <div className='testimonial'>
         
      </div>


      <div className='ourTeam'>
        <div>
              <div className='heading'>
                    Our Team
              </div>
              <div className='content'>
                    <p>
                    Being in the industry for over 4 decades, we have worked on designating a workforce who have the capabilities of delivering the best workmanship.
                    We have more than 250 skilled artisans with many of them having 30+ years of experience working with us. Teamwork and Leadership plays a vital role at Interior Craft.

                    </p>
              </div>
              <div className='boxView'>
              <button className='boxButton'><Link to="myteam"> Meet The Team</Link></button>
              </div>
          
             
              
        </div>
        {/* <div> */}
              <div>
              
               <img src="AnisAhmed.png" alt="pic" />
               <h2 style={{color:"#ffffff"}}>
            Anish Ahmed <br/>
            (Visionary & Founder)
          </h2>
            </div>

      </div>

      

      
<OurClients></OurClients>

        <div className='featuredProjects'>
              <p>Featured Projects</p>
              <br/>
              <br/>
              <div className='picRow'>
                <img src="/FeaturedProjects/gate.png" alt="gate" />
                <img src="/FeaturedProjects/outdoor.png" alt="outdoor" />
                <img src="/FeaturedProjects/railing.png" alt="railing" />
              </div>
              <br/>
              <div className='picRow' >
                <img src="/FeaturedProjects/pergola.png" alt="pergola" />
                <img src="/FeaturedProjects/stairs.png" alt="stairs" />
                <img src="/FeaturedProjects/door.png" alt="door" />
              </div>
              <br/>
              <div className='boxView'>
              <button className='boxButton'> View More</button>
              </div>
        </div>
      <br/>
        <div>
          <div className='discussProjects'>
            <p>DISCUSS YOUR DREAM PROJECTS</p>
            <div className='boxView'>
              <button className='boxButton'><Link to="contactpage"> CONTACT US</Link></button>
              </div>
          </div>
        </div>
            
      
      </div>
      </div>
    
  )
}

export default Home