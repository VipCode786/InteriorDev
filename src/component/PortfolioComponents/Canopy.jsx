import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './PortfolioComponents.scss'

const Canopy = () => {
  const [showSlider, setShowSlider] = useState(true);
  useEffect(() => {
    
        if(window.innerWidth < 1000)
        {
            setShowSlider(false)
        }
   
    }, []);
  return (
    <div>

{showSlider?(  <div className='imageRow' > 
        <AwesomeSlider > 
        
             <div className='image4'>
                <div className='sliderBack'>
        
                    <div className='imageBox'>
                    <img src="/Canopy/11.jpg" alt="" />
                    </div>
                    <br/>
                    <div  className='imageBox'>
                    <img src="/Canopy/12.jpg" alt="" />
                    </div>
                </div>
        
                <div className='sliderBack'>
                    <div  className='imageBox'>
                    <img src="/Canopy/13.jpg" alt="" />
                    </div>
        
                    <br/>
        
                    <div  className='imageBox'>
                    <img src="/Canopy/14.jpg" alt="" />
                    </div>           
                </div>
            
        
        
            
            </div> 
        
            </AwesomeSlider>
             </div>):(
<div className='imageScroll'>
<img src="/Canopy/11.jpg" alt="" />
<img src="/Canopy/12.jpg" alt="" />
<img src="/Canopy/13.jpg" alt="" />
<img src="/Canopy/14.jpg" alt="" />


</div>



     )}
              </div>
  )
}

export default Canopy