import React, { useLayoutEffect } from 'react'
import "./mobMake.css"
const MakeMobile = () => {
  useLayoutEffect(()=>{
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const square = entry.target.querySelector('#right1');
    
        if (entry.isIntersecting) {
          square.classList.add('textRight');
        return; // if we added the class, exit the function
        }
    
        // We're not intersecting, so remove the class!
        square.classList.remove('textRight');
      });

      entries.forEach(entry => {
        const square = entry.target.querySelector('#right2');
    
        if (entry.isIntersecting) {
          square.classList.add('textRight');
        return; // if we added the class, exit the function
        }
    
        // We're not intersecting, so remove the class!
        square.classList.remove('textRight');
      });

      entries.forEach(entry => {
        const square = entry.target.querySelector('#right3');
    
        if (entry.isIntersecting) {
          square.classList.add('textRight');
        return; // if we added the class, exit the function
        }
    
        // We're not intersecting, so remove the class!
        square.classList.remove('textRight');
      });
     

      entries.forEach(entry => {
        const square = entry.target.querySelector('#left1');
    
        if (entry.isIntersecting) {
          square.classList.add('textLeft');
        return; // if we added the class, exit the function
        }
    
        // We're not intersecting, so remove the class!
        square.classList.remove('textLeft');
      });

      entries.forEach(entry => {
        const square = entry.target.querySelector('#left2');
    
        if (entry.isIntersecting) {
          square.classList.add('textLeft');
        return; // if we added the class, exit the function
        }
    
        // We're not intersecting, so remove the class!
        square.classList.remove('textLeft');
      });
    });
    
    observer.observe(document.querySelector('.mobmakes'));
  })

 
  return (
    <div className='mobmakes'>
      <div class="mobContainer">
        <img src="WhatWeMake/imageBG1.png" alt="Snow" />
        <div class="mobContent" style={{right:"0%"}} id='right1'>
          <h1>Gates <br /> and <br />Doors</h1>
          <div >
            <p>Aluminium Doors</p>
            <p>Aliminium Door Cladding</p>
            <p>Swing Gates</p>
            <p>Aluminium Door Jambs</p>
            <p>Sliding Gate Wheels</p>
            <p>Gate Lock System</p>
          </div>
        </div>
      </div>

      <div class="mobContainer">
        <img src="WhatWeMake/imageBG2.png" alt="Snow" />
        <div class="mobContent" style={{flexDirection:"row-reverse"}} id='left1'>
          <h1>Canopies</h1>
          <div>
            <p>Supported Canopies</p>
            <p>Cantilevered Canopies</p>

          </div>
        </div>
      </div>

      <div class="mobContainer">
        <img src="WhatWeMake/imageBG3.png" alt="Snow" />
        <div class="mobContent" style={{right:"0%"}} id='right2'>
          <h1>Staircase</h1>
          <div>
            <p>Central Stringer Staircase</p>
            <p>Side Stringer Staircase</p>
            <p>Spiral Staircase</p>
            <p>Cantilevered Spiral Staircase</p>

          </div>
        </div>
      </div>

      <div class="mobContainer">
        <img src="WhatWeMake/imageBG4.png" alt="Snow" />
        <div class="mobContent" style={{flexDirection:"row-reverse"}} id='left2'>
          <h1>Railings</h1>
          <div>
            <p>Staircase Railings</p>
            <p>Balcony Railings</p>
            <p>Cut Out Railings</p>

          </div>
        </div>
      </div>

      <div class="mobContainer">
        <img src="WhatWeMake/imageBG5.png" alt="Snow" />
        <div class="mobContent" style={{right:"0%"}} id='right3'>
          <h1>Pergola <br /> and other<br />projects</h1>
          <div>
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

export default MakeMobile