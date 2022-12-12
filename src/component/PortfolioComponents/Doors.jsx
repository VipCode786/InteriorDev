import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './PortfolioComponents.scss'

const Doors = () => {
  return (
    <div>

    <div className='imageRow' > 
    <AwesomeSlider > 
    
         <div className='image4'>
            <div className='sliderBack'>
    
                <div className='imageBox'>
                <img src="/Doors/11.jpg" alt="" />
                </div>
                {/* <br/>
                <div  className='imageBox'>
                <img src="/Canopy/12.jpg" alt="" />
                </div> */}
            </div>
    
            <div className='sliderBack'>
                <div  className='imageBox'>
                <img src="/Doors/12.jpg" alt="" />
                </div>
    
                {/* <br/>
    
                <div  className='imageBox'>
                <img src="/Canopy/14.jpg" alt="" />
                </div>            */}
            </div>
        
    
    
        
        </div> 
    
        </AwesomeSlider>
         </div>
          </div>
  )
}

export default Doors