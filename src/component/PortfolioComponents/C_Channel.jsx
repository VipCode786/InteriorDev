import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './PortfolioComponents.scss'

const C_Channel = () => {
  return (
    <div>

    <div className='imageRow' > 
    <AwesomeSlider > 
    
         <div className='image4'>
            <div className='sliderBack'>
    
                <div className='imageBox'>
                <img src="/C_Channel/11.jpg" alt="" />
                </div>
                <br/>
                <div  className='imageBox'>
                <img src="/C_Channel/12.jpg" alt="" />
                </div>
            </div>
    
            <div className='sliderBack'>
                <div  className='imageBox'>
                <img src="/C_Channel/13.jpg" alt="" />
                </div>
    
                <br/>
    
                <div  className='imageBox'>
                <img src="/C_Channel/14.jpg" alt="" />
                </div>           
            </div>
        
    
    
        
        </div> 
    
        </AwesomeSlider>
         </div>
          </div>
  )
}

export default C_Channel