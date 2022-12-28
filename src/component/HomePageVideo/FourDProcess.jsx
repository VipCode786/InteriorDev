import React from 'react'
import './FourD.scss'
import data from './mockData'
// import HorizontalScroll from "react-scroll-horizontal";

import { useHorizontalScroll } from './useSlideScroll';
// import ScriptTag from 'react-script-tag';
import {Helmet} from "react-helmet";


const FourDProcess = () => {
      

      
  return (
    <div className='four'>
      <div class="div2">
      {/* <img src="Process/Group 45.png" alt="" /> */}
            <div class="div21"></div>
            <div class="div22">.</div>
            <div class="div23">.</div>
            <div class="div24">.</div>
      </div>
      <Helmet>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.2/plugins/animation.gsap.js'></script>
<script  src="./script.js"></script>


      </Helmet>
  
        
    </div>
  )
}

export default FourDProcess