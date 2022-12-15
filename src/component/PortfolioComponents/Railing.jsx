import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './PortfolioComponents.scss'

const Railing = () => {
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
            <img src="/Railing/11.jpg" alt="" />
            </div>
            <br/>
            <div  className='imageBox'>
            <img src="/Railing/12.jpg" alt="" />
            </div>
        </div>

        <div className='sliderBack'>
            <div  className='imageBox'>
            <img src="/Railing/13.jpg" alt="" />
            </div>

            <br/>

            <div  className='imageBox'>
            <img src="/Railing/14.jpg" alt="" />
            </div>           
        </div>
    </div>


    <div className='image4'>
    <div className='sliderBack'>

            <div className='imageBox'>
            <img src="/Railing/21.jpg" alt="" />
            </div>
            <br/>
            <div  className='imageBox'>
            <img src="/Railing/22.jpg" alt="" />
            </div>
        </div>

        <div className='sliderBack'>
            <div  className='imageBox'>
            <img src="/Railing/23.jpg" alt="" />
            </div>

            <br/>

            <div  className='imageBox'>
            <img src="/Railing/24.jpg" alt="" />
            </div>           
        </div>
    </div>


    <div className='image4'>
    <div className='sliderBack'>

            <div className='imageBox'>
            <img src="/Railing/31.jpg" alt="" />
            </div>
            <br/>
            <div  className='imageBox'>
            <img src="/Railing/32.jpg" alt="" />
            </div>
        </div>

        <div className='sliderBack'>
            <div  className='imageBox'>
            <img src="/Railing/33.jpg" alt="" />
            </div>

            <br/>

            <div  className='imageBox'>
            <img src="/Railing/34.jpg" alt="" />
            </div>           
        </div>
    </div>

    <div className='image4'>
    <div className='sliderBack'>

            <div className='imageBox'>
            <img src="/Railing/41.jpg" alt="" />
            </div>
            <br/>
            <div  className='imageBox'>
            <img src="/Railing/42.jpg" alt="" />
            </div>
        </div>

        <div className='sliderBack'>
            <div  className='imageBox'>
            <img src="/Railing/43.jpg" alt="" />
            </div>

            <br/>

            <div  className='imageBox'>
            <img src="/Railing/44.jpg" alt="" />
            </div>           
        </div>
    </div>
    

    </AwesomeSlider>
     </div>):(
<div className='imageScroll'>
<img src="/Railing/11.jpg" alt="" />
<img src="/Railing/12.jpg" alt="" />
<img src="/Railing/13.jpg" alt="" />
<img src="/Railing/14.jpg" alt="" />
<img src="/Railing/21.jpg" alt="" />
<img src="/Railing/23.jpg" alt="" />
<img src="/Railing/24.jpg" alt="" />
<img src="/Railing/31.jpg" alt="" />
<img src="/Railing/32.jpg" alt="" />
<img src="/Railing/33.jpg" alt="" />
<img src="/Railing/34.jpg" alt="" />
<img src="/Railing/41.jpg" alt="" />
<img src="/Railing/42.jpg" alt="" />
<img src="/Railing/43.jpg" alt="" />
<img src="/Railing/44.jpg" alt="" />

</div>



     )}
      </div>
  )
}

export default Railing