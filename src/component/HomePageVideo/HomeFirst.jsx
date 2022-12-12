import { isCancel } from 'axios'
import React from 'react'
import './video.scss'
const HomeFirst = () => {
  return (
    <div className='video'>
       {/* <video width="100%" height="100%" class="videoInsert" loop autoPlay muted >
      <source src="onVideo.mp4" type="video/mp4"/>
     </video> */}
      {/* <video id="background-video" loop autoplay>
  <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4">
  <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg">
  Your browser does not support the video tag.
</video> */}
      <div className='box'>
        
        <div className='mainHeading'>
        <div>The </div>
        <div className='color'>Fabrication</div>
        <div> Expert</div>
        </div>
        <div className='headingContent'>
        Over 4 Decades of Innovative Metal Artistry.
        </div>
      </div>
      <div className='centerScroll'>
      <div className='arrow'>
          <img src="/headerImages/arrow.svg" alt="arrow" />
      </div>
      <div className="scroll">
          
            <div className='scrollContent'>Scroll to Explore</div>
      </div>
      </div>
    </div>
  )
}

export default HomeFirst