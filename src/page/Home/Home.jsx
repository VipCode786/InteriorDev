import React, { useEffect } from 'react'
import HomeFirst from '../../component/HomePageVideo/HomeFirst'
import OnScrollVideo from '../../component/HomePageVideo/OnScrollVideo'
import CountUp from "react-countup"

import './home.scss'
// import Client from '../../component/HomePageVideo/Client'
import OurClients from '../../component/HomePageVideo/OurClients'
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
      {/* <OnScrollVideo/> */}
      <div className='border'>
          <div className='borderSet'></div>
          <div className='borderText'>ELEGANCE</div>
          <div className='borderSet'></div>
          <div className='borderText'>INGENIOUS</div>
          <div className='borderSet'></div>
      </div>
      <div className='whatWeMake'>
      <p>Our 4D Approach</p>
      </div>

      {/* <div className='Our4dProcess'>

      </div> */}
      <div className='border'>
          <div className='borderSet'></div>
          <div className='borderText'>MODERNITY</div>
          <div className='borderSet'></div>
          <div className='borderText'>VOUGE</div>
          <div className='borderSet'></div>
      </div>
      <div className='counter'>

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
              <button>Meet The Team</button>
        </div>
        <div>
              <div>
              
               <img src="AnisAhmed.png" alt="pic" />
            </div>
            <h2>
            Anish Ahmed <br/>
            (Visionary & Founder)
          </h2>
          
        </div>  
      </div>

      {/* our clients */}
{/* <Client/> */}
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
              <button className='boxButton'> CONTACT US</button>
              </div>
          </div>
        </div>
            
      
      </div>
      </div>
    
  )
}

export default Home