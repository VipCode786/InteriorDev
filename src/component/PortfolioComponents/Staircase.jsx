import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './PortfolioComponents.scss'

const Staircase = () => {
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
            <img src="/Staircase/11.jpg" alt="" />
            </div>
            <br/>
            <div  className='imageBox'>
            <img src="/Staircase/12.jpg" alt="" />
            </div>
        </div>

        <div className='sliderBack'>
            <div  className='imageBox'>
            <img src="/Staircase/13.jpg" alt="" />
            </div>

            <br/>

            <div  className='imageBox'>
            <img src="/Staircase/14.jpg" alt="" />
            </div>           
        </div>
    </div>


    <div className='image4'>
    <div className='sliderBack'>

            <div className='imageBox'>
            <img src="/Staircase/21.jpg" alt="" />
            </div>
            <br/>
            <div  className='imageBox'>
            <img src="/Staircase/22.jpg" alt="" />
            </div>
        </div>

        <div className='sliderBack'>
            <div  className='imageBox'>
            <img src="/Staircase/23.jpg" alt="" />
            </div>

            <br/>

            <div  className='imageBox'>
            <img src="/Staircase/24.jpg" alt="" />
            </div>           
        </div>
    </div>


    <div className='image4'>
    <div className='sliderBack'>

            <div className='imageBox'>
            <img src="/Staircase/31.jpg" alt="" />
            </div>
            <br/>
            <div  className='imageBox'>
            <img src="/Staircase/32.jpg" alt="" />
            </div>
        </div>

        <div className='sliderBack'>
            <div  className='imageBox'>
            <img src="/Staircase/33.jpg" alt="" />
            </div>

            <br/>

            <div  className='imageBox'>
            {/* <img src="/Staircase/11.jpg" alt="" /> */}
            </div>           
        </div>
    </div>


    

    </AwesomeSlider>
     </div>):(
<div className='imageScroll'>
<img src="/Staircase/11.jpg" alt="" />
<img src="/Staircase/12.jpg" alt="" />
<img src="/Staircase/13.jpg" alt="" />
<img src="/Staircase/14.jpg" alt="" />
<img src="/Staircase/21.jpg" alt="" />
<img src="/Staircase/23.jpg" alt="" />
<img src="/Staircase/24.jpg" alt="" />
<img src="/Staircase/31.jpg" alt="" />
<img src="/Staircase/32.jpg" alt="" />
<img src="/Staircase/33.jpg" alt="" />


</div>



     )}
      </div> )
}

export default Staircase