import React from 'react'
import './Makes.css'
import { useLayoutEffect } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
const Makes = () => {

    const refs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
      ];
    
    //   useEffect(() => {
    //     const handleScroll = () => {
    //       refs.forEach((ref) => {
    //         const isVisible = ref.current.getBoundingClientRect().top < window.innerHeight;
    //         if (isVisible) {
    //           ref.current.classList.add('imgAni');
    //         } else {
    //           ref.current.classList.remove('imgAni');
    //         }
    //       });
    //     };
    
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    //   }, [refs]);
    


    useLayoutEffect(()=>{
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const square = entry.target.querySelector('#textbox1');
      
          if (entry.isIntersecting) {
            square.classList.add('textAni');
          return; // if we added the class, exit the function
          }
      
          // We're not intersecting, so remove the class!
          square.classList.remove('textAni');
        });


        entries.forEach(entry => {
          const square = entry.target.querySelector('#textbox2');
      
          if (entry.isIntersecting) {
            square.classList.add('textAni');
          return; // if we added the class, exit the function
          }
      
          // We're not intersecting, so remove the class!
          square.classList.remove('textAni');
        });

        entries.forEach(entry => {
          const square = entry.target.querySelector('#textbox3');
      
          if (entry.isIntersecting) {
            square.classList.add('textAni');
          return; // if we added the class, exit the function
          }
      
          // We're not intersecting, so remove the class!
          square.classList.remove('textAni');
        });


        entries.forEach(entry => {
          const square = entry.target.querySelector('#textbox4');
      
          if (entry.isIntersecting) {
            square.classList.add('textAni');
          return; // if we added the class, exit the function
          }
      
          // We're not intersecting, so remove the class!
          square.classList.remove('textAni');
        });

        entries.forEach(entry => {
          const square = entry.target.querySelector('#textbox5');
      
          if (entry.isIntersecting) {
            square.classList.add('textAni');
          return; // if we added the class, exit the function
          }
      
          // We're not intersecting, so remove the class!
          square.classList.remove('textAni');
        });

      });
      
      observer.observe(document.querySelector('.container'));
    })

    
  return (
    <div className='makes'>

<div class="container" >
  <div class="image-wrapper">
  <div class="image-container imgDown"  ref={refs[0]}>
		<img src="WhatWeMake/image1.png" alt="your-image-alt-text" />
	</div>
    <div class="text-box" id='textbox1'>
      <h1>Gates and Doors</h1>
      <p>Aluminium Doors</p>
      <p>Aliminium Door Cladding</p>
      <p>Swing Gates</p>
      <p>Aluminium Door Jambs</p>
      <p>Sliding Gate Wheels</p>
      <p>Gate Lock System </p>
     
    </div>
  </div>
  <div class="image-wrapper">
  <div class="image-container imgDown"  ref={refs[1]}>
		<img src="WhatWeMake/image2.png" alt="your-image-alt-text" />
	</div>
    <div class="text-box" id='textbox2'>
      <h1>Canopies</h1>
      <p>Supported Canopies</p>
      <p>Cantilevered Canopies</p>
      
    </div>
  </div>
  <div class="image-wrapper">
  <div class="image-container imgDown"  ref={refs[2]}>
		<img src="WhatWeMake/image3.png" alt="your-image-alt-text" />
	</div>
    <div class="text-box" id='textbox3'>
      <h1>Staircase</h1>
      
     
      <p> Central Stringer Staircase</p>
      <p>Side Stringer Staircase</p>
      <p>Spiral Staircase</p>
      <p>Cantilevered Spiral Staircase</p>
     

    </div>
  </div>
  <div class="image-wrapper">
  <div class="image-container imgDown"  ref={refs[3]}>
		<img src="WhatWeMake/image4.png" alt="your-image-alt-text" />
	</div>
        <div class="text-box" id='textbox4'>
      <h1>Railings</h1>
     
      <p> Staircase Railings</p>
      <p>Balcony Railings</p>
      <p>Cut Out Railings</p>
    </div>
  </div>
  <div class="image-wrapper">
  <div class="image-container imgDown"  ref={refs[4]}>
		<img src="WhatWeMake/image5.png" alt="your-image-alt-text" />
	</div>
    <div class="text-box" id='textbox5'>
      <h1>Pergola and other projects</h1>
      <p>Manhole Covers</p>
    <p>Drain Covers</p>
    <p>Multiple Aluminium Profiles</p>
    <p>Glass floors</p>
    <p>Flat and Pyramidical Skylights</p>
    <p>Planters</p>
    <p>Baffle ceilings</p>
    <p>Metal Jaali</p>
    <p>Pre-fab structures</p>
    </div>
  </div>
</div>


    </div>
  )
}

export default Makes