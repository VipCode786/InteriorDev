import React, { useRef } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './PortfolioComponents.scss'
const Gate = () => {
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
            <img src="/Gate/11.jpg" alt="" />
            </div>
            <br/>
            <div  className='imageBox'>
            <img src="/Gate/12.jpg" alt="" />
            </div>
        </div>

        <div className='sliderBack'>
            <div  className='imageBox'>
            <img src="/Gate/13.jpg" alt="" />
            </div>

            <br/>

            <div  className='imageBox'>
            <img src="/Gate/14.jpg" alt="" />
            </div>           
        </div>
    </div>


    <div className='image4'>
    <div className='sliderBack'>

            <div className='imageBox'>
            <img src="/Gate/21.jpg" alt="" />
            </div>
            <br/>
            <div  className='imageBox'>
            <img src="/Gate/22.jpg" alt="" />
            </div>
        </div>

        <div className='sliderBack'>
            <div  className='imageBox'>
            <img src="/Gate/23.jpg" alt="" />
            </div>

            <br/>

            <div  className='imageBox'>
            <img src="/Gate/24.jpg" alt="" />
            </div>           
        </div>
    </div>


    <div className='image4'>
    <div className='sliderBack'>

            <div className='imageBox'>
            <img src="/Gate/31.jpg" alt="" />
            </div>
            <br/>
            <div  className='imageBox'>
            <img src="/Gate/32.jpg" alt="" />
            </div>
        </div>

        <div className='sliderBack'>
            <div  className='imageBox'>
            <img src="/Gate/33.jpg" alt="" />
            </div>

            <br/>

            <div  className='imageBox'>
            <img src="/Gate/34.jpg" alt="" />
            </div>           
        </div>
    </div>


    

    </AwesomeSlider>
     </div>):(
<div className='imageScroll'>
<img src="/Gate/11.jpg" alt="" />
<img src="/Gate/12.jpg" alt="" />
<img src="/Gate/13.jpg" alt="" />
<img src="/Gate/14.jpg" alt="" />
<img src="/Gate/21.jpg" alt="" />
<img src="/Gate/23.jpg" alt="" />
<img src="/Gate/24.jpg" alt="" />
<img src="/Gate/31.jpg" alt="" />
<img src="/Gate/32.jpg" alt="" />
<img src="/Gate/33.jpg" alt="" />
<img src="/Gate/34.jpg" alt="" />

</div>



     )}
      </div>
  )
}

export default Gate