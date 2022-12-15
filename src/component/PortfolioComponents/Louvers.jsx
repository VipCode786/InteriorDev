import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './PortfolioComponents.scss'

const Louvers = () => {
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
                <img src="/Louvers/11.jpg" alt="" />
                </div>
                <br/>
                <div  className='imageBox'>
                <img src="/Louvers/12.jpg" alt="" />
                </div>
            </div>
    
            <div className='sliderBack'>
                <div  className='imageBox'>
                <img src="/Louvers/13.jpg" alt="" />
                </div>
    
                <br/>
    
                <div  className='imageBox'>
                <img src="/Louvers/14.jpg" alt="" />
                </div>           
            </div>
        </div>
    
    
        <div className='image4'>
        <div className='sliderBack'>
    
                <div className='imageBox'>
                <img src="/Louvers/21.jpg" alt="" />
                </div>
                <br/>
                <div  className='imageBox'>
                <img src="/Louvers/22.jpg" alt="" />
                </div>
            </div>
    
            <div className='sliderBack'>
                <div  className='imageBox'>
                <img src="/Louvers/23.jpg" alt="" />
                </div>
    
                <br/>
    
                <div  className='imageBox'>
                <img src="/Louvers/24.jpg" alt="" />
                </div>           
            </div>
        </div>
    
    
        <div className='image4'>
        <div className='sliderBack'>
    
                <div className='imageBox'>
                <img src="/Louvers/31.jpg" alt="" />
                </div>
                <br/>
                <div  className='imageBox'>
                <img src="/Louvers/32.jpg" alt="" />
                </div>
            </div>
    
            <div className='sliderBack'>
                <div  className='imageBox'>
                <img src="/Louvers/33.jpg" alt="" />
                </div>
    
                <br/>
    
                <div  className='imageBox'>
                <img src="/Louvers/34.jpg" alt="" />
                </div>           
            </div>
        </div>
    
    
        
    
        </AwesomeSlider>
         </div>):(
<div className='imageScroll'>
<img src="/Louvers/11.jpg" alt="" />
<img src="/Louvers/12.jpg" alt="" />
<img src="/Louvers/13.jpg" alt="" />
<img src="/Louvers/14.jpg" alt="" />
<img src="/Louvers/21.jpg" alt="" />
<img src="/Louvers/23.jpg" alt="" />
<img src="/Louvers/24.jpg" alt="" />
<img src="/Louvers/31.jpg" alt="" />
<img src="/Louvers/32.jpg" alt="" />
<img src="/Louvers/33.jpg" alt="" />
<img src="/Louvers/34.jpg" alt="" />

</div>



     )}
          </div>
  )
}

export default Louvers