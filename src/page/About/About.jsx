import React from 'react'
import AboutUsAnimation from '../../component/AboutUs/AboutUsAnimation'
// import Pre from '../../component/AboutUs/Pre'
import './about.scss'
const About = () => {
  return (
    <div>
    <AboutUsAnimation/>
    {/* <Pre/> */}
    <div className='about'>
    <div className='head'>
      
    </div>

    <div className='heading'>
      About Us
    </div>

    <div className='aboutContent'>
    <p>Interior Craft was set up in the year 1977 to cater to a variety of Industrial sectors. Soon there was a huge boost in the demand of Metal fabrications. This prompted our founder Mr. Anis Ahmed to heavily invest in this field. Today, Interior Craft’s name is synonymous with metal fabrications of the highest caliber and craftsmanship of the best quality. We fabricate each and everything that can be crafted out of metal be it Gates, Staircases, Railings and much more. All the aspects of our projects are tailored to the clients’ needs. </p>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className='background1'>
      <div className='about1'>
          <p>
          Interior Craft helps you with your project at every level, from designing and generating a prototype to detailing, manufacturing, and finally delivering the finished product to your site and facilitating a seamless installation in the least amount of time.
          </p>
          <img src="/AboutUs/pic1.png" alt="1" />

      </div>

    </div>
    <br/>
    <br/>
    <div className='background2'>
    <div className='about1'>
    <img src="/AboutUs/pic2.png" alt="2" />

          <p>
          Interior Craft helps you with your project at every level, from designing and generating a prototype to detailing, manufacturing, and finally delivering the finished product to your site and facilitating a seamless installation in the least amount of time.
          </p>
         
      </div>
    </div>

    <br/>
    <br/>

    <div className='background3'>
    <div className='about1'>
          <p>
          Interior Craft helps you with your project at every level, from designing and generating a prototype to detailing, manufacturing, and finally delivering the finished product to your site and facilitating a seamless installation in the least amount of time.
          </p>
          <img src="/AboutUs/pic3.png" alt="3" />

      </div>
    </div>
    </div>
    </div>
  )
}

export default About