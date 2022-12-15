import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './PortfolioComponents.scss'

const Manhole_Covers = () => {
    const [showSlider, setShowSlider] = useState(true);
    useEffect(() => {
      
          if(window.innerWidth < 1000)
          {
              setShowSlider(false)
          }
     
      }, []);
  return (
    <div>
{showSlider?(
    <div className='imageRow' > 
    <AwesomeSlider > 
    
         <div className='image4'>
            <div className='sliderBack'>
    
                <div className='imageBox'>
                <img src="/Manhole_Covers/11.jpg" alt="" />
                </div>
            </div>
        </div> 
    
        <div className='image4'>
            <div className='sliderBack'>
    
                <div className='imageBox'>
                <img src="/Manhole_Covers/12.jpg" alt="" />
                </div>
                
            </div>
        </div>

        <div className='image4'>
            <div className='sliderBack'>
    
                <div className='imageBox'>
                <img src="/Manhole_Covers/13.jpg" alt="" />
                </div>
            </div>
        </div> 
        </AwesomeSlider>
         </div>):(
<div className='imageScroll'>
<img src="/Manhole_Covers/11.jpg" alt="" />
<img src="/Manhole_Covers/12.jpg" alt="" />
<img src="/Manhole_Covers/13.jpg" alt="" />


</div>



     )}
          </div>
  )
}

export default Manhole_Covers