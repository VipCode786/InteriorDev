import React, { useEffect, useState } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './PortfolioComponents.scss'

const Balcony_Railing = () => {
    // function getWindowSize() {
    //     const {innerWidth, innerHeight} = window;
    //     return {innerWidth, innerHeight};
    //   }
    
      const [showSlider, setShowSlider] = useState(true)
    // const [windowSize, setWindowSize] = useState(getWindowSize());


    // function show(){
    //     console.log("windowSize.innerWidth",windowSize.innerWidth)
    //     if(windowSize.innerWidth < 1000)
    //     {
    //         setShowSlider(false)
    //     }
    // }
    useEffect(() => {
    //   function handleWindowResize() {
        // setWindowSize(getWindowSize());
        if(window.innerWidth < 1000)
        {
            setShowSlider(false)
        }
    //   }
  
    //   window.addEventListener('resize', handleWindowResize);
   
    //   return () => {
    //     window.removeEventListener('resize', handleWindowResize);
    //   };
    }, []);
    
    
  return (
    <div>

{showSlider?(
<div className='imageRow' > 
<AwesomeSlider > 

     <div className='image4'>
        <div className='sliderBack'>

            <div className='imageBox'>
            <img src="/Balcony_Railing/11.jpg" alt="" />
            </div>
            <br/>
            <div  className='imageBox'>
            <img src="/Balcony_Railing/12.jpg" alt="" />
            </div>
        </div>

        <div className='sliderBack'>
            <div  className='imageBox'>
            <img src="/Balcony_Railing/13.jpg" alt="" />
            </div>

            <br/>

            <div  className='imageBox'>
            <img src="/Balcony_Railing/14.jpg" alt="" />
            </div>           
        </div>
    </div>


    <div className='image4'>
    <div className='sliderBack'>

            <div className='imageBox'>
            <img src="/Balcony_Railing/21.jpg" alt="" />
            </div>
            <br/>
            <div  className='imageBox'>
            <img src="/Balcony_Railing/22.jpg" alt="" />
            </div>
        </div>

        <div className='sliderBack'>
            <div  className='imageBox'>
            <img src="/Balcony_Railing/23.jpg" alt="" />
            </div>

            <br/>

            <div  className='imageBox'>
            <img src="/Balcony_Railing/24.jpg" alt="" />
            </div>           
        </div>
    </div>


    <div className='image4'>
    <div className='sliderBack'>

            <div className='imageBox'>
            <img src="/Balcony_Railing/31.jpg" alt="" />
            </div>
            <br/>
            <div  className='imageBox'>
            <img src="/Balcony_Railing/32.jpg" alt="" />
            </div>
        </div>

        <div className='sliderBack'>
            <div  className='imageBox'>
            <img src="/Balcony_Railing/33.jpg" alt="" />
            </div>

            <br/>

            <div  className='imageBox'>
            <img src="/Balcony_Railing/34.jpg" alt="" />
            </div>           
        </div>
    </div>


    <div className='image4'>
    <div className='sliderBack'>

            <div className='imageBox'>
            <img src="/Balcony_Railing/41.jpg" alt="" />
            </div>
            <br/>
            <div  className='imageBox'>
            <img src="/Balcony_Railing/42.jpg" alt="" />
            </div>
        </div>

        <div className='sliderBack'>
            <div  className='imageBox'>
            <img src="/Balcony_Railing/43.jpg" alt="" />
            </div>

            {/* <br/>

            <div  className='imageBox'>
            <img src="/Balcony_Railing/11jpg" alt="" />
            </div>            */}
        </div>
    </div> 

    </AwesomeSlider>
     </div>):(
<div className='imageScroll'>
<img src="/Balcony_Railing/11.jpg" alt="" />
<img src="/Balcony_Railing/12.jpg" alt="" />
<img src="/Balcony_Railing/13.jpg" alt="" />
<img src="/Balcony_Railing/14.jpg" alt="" />
<img src="/Balcony_Railing/21.jpg" alt="" />
<img src="/Balcony_Railing/23.jpg" alt="" />
<img src="/Balcony_Railing/24.jpg" alt="" />
<img src="/Balcony_Railing/31.jpg" alt="" />
<img src="/Balcony_Railing/32.jpg" alt="" />
<img src="/Balcony_Railing/33.jpg" alt="" />
<img src="/Balcony_Railing/34.jpg" alt="" />
<img src="/Balcony_Railing/41.jpg" alt="" />
<img src="/Balcony_Railing/42.jpg" alt="" />
<img src="/Balcony_Railing/43.jpg" alt="" />

</div>



     )}
      </div>
  )
}

export default Balcony_Railing