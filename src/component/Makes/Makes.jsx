import React from 'react'
import './Makes.css'
import { useLayoutEffect } from 'react';
const Makes = () => {

    useLayoutEffect(()=>{
        // const startAnimation = (entries, observer) => {
        //     let previousTop = 0;
          
        //     entries.forEach(entry => {
        //       const currentTop = entry.boundingClientRect.top;
        //       const isIntersecting = entry.isIntersecting;
          
        //       if (isIntersecting && currentTop > previousTop) {
        //         entry.target.classList.add("imgAni");
        //       } else if (isIntersecting && currentTop < previousTop) {
        //         entry.target.classList.remove("imgAni");
        //       } else if (!isIntersecting) {
        //         entry.target.classList.remove("imgAni");
        //       }
          
        //       previousTop = currentTop;
        //     });
        //   };
          


    const startAnimation = (entries, observer) => {
        entries.forEach(entry => {
          entry.target.classList.toggle("imgAni", entry.isIntersecting);
          
        });
      };
    
      const observer = new IntersectionObserver(startAnimation);
      const options = { root: null, rootMargin: '0px', threshold: 0 };
      const elements = document.querySelectorAll('.image-container');
      elements.forEach(el => {
        observer.observe(el, options);
      });
    })
  return (
    <div>

<div class="container">
  <div class="image-wrapper">
  <div class="image-container imgDown">
		<img src="WhatWeMake/image1.png" alt="your-image-alt-text" />
	</div>
    <div class="text-box textInAnimation">
      <h1>Gates and Doors</h1>
    </div>
  </div>
  <div class="image-wrapper">
    <img src="WhatWeMake/image2.png" />
    <div class="text-box textInAnimation">
      <h1>Canopies</h1>
    </div>
  </div>
  <div class="image-wrapper">
    <img src="WhatWeMake/image3.png" />
    <div class="text-box">
      <h1>Staircase</h1>
    </div>
  </div>
  <div class="image-wrapper">
    <img src="WhatWeMake/image4.png" />
    <div class="text-box">
      <h1>Railings</h1>
    </div>
  </div>
  <div class="image-wrapper">
    <img src="WhatWeMake/image5.png" />
    <div class="text-box">
      <h1>Pergola and other projects</h1>
    </div>
  </div>
</div>


    </div>
  )
}

export default Makes