import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AboutUsAnimation from '../../component/AboutUs/AboutUsAnimation'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

// import Pre from '../../component/AboutUs/Pre'
import './about.css'
const About = () => {
  const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("tracking-in-contract", entry.isIntersecting);
    });
  };
  
  const observer = new IntersectionObserver(startAnimation);
  const options = { root: null, rootMargin: '0px', threshold: 1 }; 
  
  const elements = document.querySelectorAll('.textInAnimation');
  elements.forEach(el => {
    observer.observe(el, options);
  });
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  
  return (
    <div>

<div class="video-wrapper">
  {/* <video autoPlay muted  playsinline preload="metadata" > */}
  <video autoPlay muted playsInline preload="metadata" >

	  <source src="about12.mp4" type="video/mp4" width="100vw"/>
  </video>
</div>
    {/* <AboutUsAnimation/> */}
    {/* <Pre/> */}
    <div className='about'>
    <div className='head'>
      
    </div>
    {/* <br/>
    <br/> */}
    <div className='heading textInAnimation'>
      About Us
    </div>
    {/* <br/> */}
    <div className='aboutContent'>
    <p>
      Interior Craft was set up in the year 1977 to cater to a variety of Industrial sectors. Soon there was a huge boost in the demand of Metal fabrications. This prompted our founder <b style={{color:
      "#000000"}}>  Mr. Anis Ahmed </b>to heavily invest in this field. Today, Interior Craft’s name is synonymous with metal fabrications of the highest caliber and craftsmanship of the best quality. We fabricate each and everything that can be crafted out of metal be it Gates, Staircases, Railings and much more. All the aspects of our projects are tailored to the clients’ needs. </p>
    </div>
    {/* <br/>
    <br/>
    <br/>
    <br/> */}
    <div className='background1'>
      <div className='about1'>
        <Fade left>
          <p className='margin3rem'>
          Interior Craft helps you with your project at every level, from designing and generating a prototype to detailing, manufacturing, and finally delivering the finished product to your site and facilitating a seamless installation in the least amount of time.
          </p>
          </Fade>
          
          <img src="/AboutUs/pic1.png" alt="1" />
      
      </div>

    </div>
    <br/>
    <br/>
    <div className='background2'>
    <div className="about2 mobileResponsive">
    <img src="/AboutUs/pic2.png" alt="2" />
    &nbsp;&nbsp;
    <Fade right>
          <p>
          We currently run our business out of an 80,000 square foot premises in Noida, Uttar Pradesh. Our workforce of more than 250 artisans have been trained extensively in fabrication and carpentry to deliver the highest level of metal artistry.
          </p>
          </Fade>    
      </div>
    </div>

    {/* <br/>
    <br/> */}
   
    <div className='background3'>
    <div className='about1'>
    <Fade left>
          <p>
          To ensure that we provide the best quality we have a practice of utilizing our capital in buying new tech that helps us to have an edge in the market. Our factory is equipped with: -
           <br/> 1) Multiple CNC Machines
           <br/> 2) Semi-Automatic Machines
           <br/> 3) Press Brakes
           <br/> 4) Welding equipment and machines
           <br/> 5) Shearing Machines
           <br/> 6) Powder Coating Facility
           <br/> 7) Paint Booths
          </p>
      </Fade>
          <img src="/AboutUs/pic3.png" alt="3" />

      </div>
    </div>
    <Link to="/" style={{color:"#000000",textAlign:'center'}}><h3>Back To Home Page</h3></Link>
    </div>
    </div>
  )
}

export default About