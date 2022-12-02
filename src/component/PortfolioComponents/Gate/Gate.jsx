import React, { useRef } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Carousel from '../../Carousel/Carousel'
import '../../PortfolioComponents/PortfolioComponents.scss'
const Gate = () => {

        const ref = useRef();
        const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };
  return (
<div>
{/* <button onClick={() => scroll(-1200)}>LEFT</button>
          <button onClick={() => scroll(1200)}>RIGHT</button> */}
<div className='imageRow' ref={ref}>

<AwesomeSlider className='aws-btn' >        

    <div className='image4'>
        <div className='sliderBack'>

            <div className='imageBox'>
            <img src="/Gate/IMG_1 1.PNG" alt="" />
            </div>
            <br/>
            <div  className='imageBox'>
            <img src="/Gate/IMG_1 1.PNG" alt="" />
            </div>
        </div>

        <div className='sliderBack'>
            <div  className='imageBox'>
            <img src="/Gate/IMG_1 1.PNG" alt="" />
            </div>

            <br/>

            <div  className='imageBox'>
            <img src="/Gate/IMG_1 1.PNG" alt="" />
            </div>           
        </div>
    </div>


    <div className='image4'>
    <div className='sliderBack'>

            <div className='imageBox'>
            <img src="/Gate/IMG_2 1.PNG" alt="" />
            </div>
            <br/>
            <div  className='imageBox'>
            <img src="/Gate/IMG_2 1.PNG" alt="" />
            </div>
        </div>

        <div className='sliderBack'>
            <div  className='imageBox'>
            <img src="/Gate/IMG_2 1.PNG" alt="" />
            </div>

            <br/>

            <div  className='imageBox'>
            <img src="/Gate/IMG_2 1.PNG" alt="" />
            </div>           
        </div>
    </div>


    <div className='image4'>
    <div className='sliderBack'>

            <div className='imageBox'>
            <img src="/Gate/IMG_1 2.PNG" alt="" />
            </div>
            <br/>
            <div  className='imageBox'>
            <img src="/Gate/IMG_1 2.PNG" alt="" />
            </div>
        </div>

        <div className='sliderBack'>
            <div  className='imageBox'>
            <img src="/Gate/IMG_1 2.PNG" alt="" />
            </div>

            <br/>

            <div  className='imageBox'>
            <img src="/Gate/IMG_1 2.PNG" alt="" />
            </div>           
        </div>
    </div>


    <div className='image4'>
    <div className='sliderBack'>

            <div className='imageBox'>
            <img src="/Gate/IMG_2 2.PNG" alt="" />
            </div>
            <br/>
            <div  className='imageBox'>
            <img src="/Gate/IMG_2 2.PNG" alt="" />
            </div>
        </div>

        <div className='sliderBack'>
            <div  className='imageBox'>
            <img src="/Gate/IMG_2 2.PNG" alt="" />
            </div>

            <br/>

            <div  className='imageBox'>
            <img src="/Gate/IMG_2 2.PNG" alt="" />
            </div>           
        </div>
    </div>

    </AwesomeSlider>
     </div>
     </div>
  )
}

export default Gate