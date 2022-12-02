import React, { useEffect } from 'react'
import { VideoScroll } from 'react-video-scroll'
 import './videoOnScroll.scss'


const OnScrollVideo = () => {
  useEffect(()=>{
    const registerVideo = (bound, video) => {
      bound = document.querySelector(bound);
      video = document.querySelector(video);
      const scrollVideo = ()=>{
        if(video.duration) {
          const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
          const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
          const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
          
          video.currentTime = video.duration * percentScrolled;
        }
        requestAnimationFrame(scrollVideo);
      }
      requestAnimationFrame(scrollVideo);
    }
    
    
   
    
    registerVideo("#bound-two", "#bound-two video")
    
   
  })
     return (
   
<div>
<div id="bound-two" class="scroll-bound">
		<div class="content">
			<p></p>
 			<video width="600" muted preload>
   			<source src="IC.mp4" type="video/mp4"/>
    		<p>Your user agent does not support the HTML5 Video element.</p>
      </video>
		</div>
	</div>
</div>
  )
}

export default OnScrollVideo