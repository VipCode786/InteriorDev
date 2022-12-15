import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './PortfolioComponents.scss'

const Cutout_Railing = () => {
  const [showSlider, setShowSlider] = useState(true);
  useEffect(() => {
    
        if(window.innerWidth < 1000)
        {
            setShowSlider(false)
        }
   
    }, []);
  return (
    <div>

{showSlider?( <div className='imageRow' > 
    <AwesomeSlider > 
    
         <div className='image4'>
            <div className='sliderBack'>
    
                <div className='imageBox'>
                <img src="/Cutout_Railing/11.jpg" alt="" />
                </div>
                <br/>
                <div  className='imageBox'>
                <img src="/Cutout_Railing/12.jpg" alt="" />
                </div>
            </div>
    
            <div className='sliderBack'>
                <div  className='imageBox'>
                <img src="/Cutout_Railing/13.jpg" alt="" />
                </div>
    
                <br/>
    
                <div  className='imageBox'>
                <img src="/Cutout_Railing/14.jpg" alt="" />
                </div>           
            </div>
        
    
    
        
        </div> 
    
        </AwesomeSlider>
         </div>):(
<div className='imageScroll'>
<img src="/Cutout_Railing/11.jpg" alt="" />
<img src="/Cutout_Railing/12.jpg" alt="" />
<img src="/Cutout_Railing/13.jpg" alt="" />
<img src="/Cutout_Railing/14.jpg" alt="" />


</div>



     )}
          </div>
  )
}

export default Cutout_Railing