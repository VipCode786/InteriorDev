import React from 'react'
import { useEffect } from 'react';
import {useRef} from 'react';
import { useLocation } from 'react-router-dom'

import './Portfolio12.css'


const Portfolio = () => {
  const gate = useRef(null);
  const mobgate = useRef(null);
  const canopy = useRef(null);
  const staircase = useRef(null);
  const railing = useRef(null);
  const pergola = useRef(null);
  const otherProjects = useRef(null);
  const propRef = useRef(railing)
  const location = useLocation();
  let  from 

  useEffect(()=>{
    if(location.state !== null)
    {
      from  = location.state
      console.log("from",from)
       let a = from.from
      console.log("type of a",a)
      
      if (a == "railing")
      {
        railing.current?.scrollIntoView({behavior: 'smooth'});
      }

      else if(a=="canopy"){
        canopy.current?.scrollIntoView({behavior: 'smooth'});
      }
      else if(a=="staircase"){
        staircase.current?.scrollIntoView({behavior: 'smooth'});
      }
      else if(a=="pergola"){
        pergola.current?.scrollIntoView({behavior: 'smooth'});
      }
      else if(a=="otherProjects"){
        otherProjects.current?.scrollIntoView({behavior: 'smooth'});
      }
      else if(a=="gate"){
        otherProjects.current?.scrollIntoView({behavior: 'smooth'});
      }
      else{
        window.scrollTo(0,0)
      }
      // if(a)
      // {
      //   propRef.current=a;
      //   console.log("type of a",propRef)
      // }
      // propRef?.scrollIntoView({behavior: 'smooth'});
    }
  })
  
  //
  


  const handleClick = (a) => {
    a.current?.scrollIntoView({behavior: 'smooth'});
  };
  // useEffect(() => {
  //   window.scrollTo(0,0)
  // }, []);
  
  return (
    <div>
           {/* <div className='portfolio'>
        <div className='background'>
        <div>
        <p> Our portfolio consists of projects
          from all over the globe
        </p>
        <img src="/portfolio/portfolio.png" alt="" />
        </div>
        <div style={{overflow:"hidden"}}>
        <div className='whiteCircle'>
        <div className='portfolioName'>
        <a className='ref' onClick={()=>handleClick(gate)}>Gates</a>
        <a className='ref' onClick={()=>handleClick(canopy)}>Canopy</a>
        <a className='ref' onClick={()=>handleClick(staircase)}>Staircase</a>
        <a className='ref' onClick={()=>handleClick(railing)}>Railing</a>
        <a className='ref' onClick={()=>handleClick(pergola)}>Pergola</a>
        <a className='ref' onClick={()=>handleClick(otherProjects)}>Other Projects</a>

        </div>

             Gates<br/>
              Canopy<br/>
              Staircase<br/>
              Railing<br/>
              Pergola<br/>
              OtherProjects<br/> 
              

             </div> 
        
        </div> 
       </div>
       </div>   */}
       {/* <div className='portfolioNameMob'>
       <a className='ref' onClick={()=>handleClick(gate)}>Gates</a>
        <a className='ref' onClick={()=>handleClick(canopy)}>Canopy</a>
        <a className='ref' onClick={()=>handleClick(staircase)}>Staircase</a>
        <a className='ref' onClick={()=>handleClick(railing)}>Railing</a>
        <a className='ref' onClick={()=>handleClick(pergola)}>Pergola</a>
        <a className='ref' onClick={()=>handleClick(otherProjects)}>Other Projects</a>
            </div> 
      <div ref={gate}></div> */} 
       
    <div class="container">
            <div class="gate" >
                <figure class="gate0_item--1" >
                    <img src="/portfolio/bgport.png"  class="gate__img" alt="" />
                </figure>
                <figure class="gate0_item--link" >
                <a className='ref' onClick={()=>handleClick(gate)}>Gates</a><br/>
                <a className='ref' onClick={()=>handleClick(canopy)}>Canopy</a><br/>
                <a className='ref' onClick={()=>handleClick(staircase)}>Staircase</a><br/>
                <a className='ref' onClick={()=>handleClick(railing)}>Railing</a><br/>
                <a className='ref' onClick={()=>handleClick(pergola)}>Pergola</a><br/>
                <a className='ref' onClick={()=>handleClick(otherProjects)}>Other Projects</a><br/>
                </figure>
                <figure class="gate0_item--p" >
                <p > Our portfolio consists of projects
                    from all over the globe
                </p>
                </figure>
                <figure class="gate0_item--img" >
                <img src="/portfolio/portfolio.png" class="gate__img" alt="" />
                </figure>
                <figure class="gate0_item--circle" >
                
                </figure>
              
                
                <figure class="gate__item gate__item--1" >
                    <p style={{ color:"#ffffff"}}>GATES</p>
                </figure>
                <figure class="gateScroll">
                    <div ref={gate}></div>
                </figure>
                 <figure class="gate__item gate__item--2">
                
                 
                    <img src="/portfolio/gate5.png" alt="gate image 2" class="gate__img" style={{zIndex:"1000"}}/>
                </figure>
                <figure class="gate__item gate__item--3">
               
                    <img src="/portfolio/gate1.jpg" alt="gate image 3" class="gate__img" style={{zIndex:"1000"}}/>
                </figure>
                <figure class="gate__item gate__item--4">
                    <img src="/portfolio/gate2.jpg" alt="gate image 4" class="gate__img" />
                </figure>
                <figure class="gate__item gate__item--5">
                    <img src="/portfolio/gate6.png" alt="gate image 5" class="gate__img" />
                </figure>
               
              
            </div>
        </div>
<br/>
        <div class="container" style={{background:"#383838"}}>
            <div class="canopy">
                <figure class="canopyScroll">
                    <div ref={canopy}></div>
                </figure>
                <figure class="canopy__item canopy__item--1">
                    <p style={{ color:"#ffffff"}}>CANOPY</p>
                </figure>
                 <figure class="canopy__item canopy__item--2">
                    <img src="/portfolio/canopy1.jpg" alt="canopy image 2" class="canopy__img" style={{zIndex:"1000"}}/>
                </figure>
                 <figure class="canopy__item canopy__item--3">
                    <img src="/portfolio/canopy3.jpg" alt="canopy image 3" class="canopy__img" style={{zIndex:"1000"}}/>
                </figure>
                <figure class="canopy__item canopy__item--4">
                    <img src="/portfolio/canopy5.png" alt="canopy image 4" class="canopy__img" />
                </figure>
                <figure class="canopy__item canopy__item--5">
                    <img src="/portfolio/canopy4.jpg" alt="canopy image 5" class="canopy__img" />
                </figure>
               
              
            </div>
        </div>
        <br/>

        <div class="container" style={{background:"#383838"}}>
            <div class="staircase">
            <figure class="staircase__item staircase__item--0">
                    
                </figure>
                <figure class="staircaseScroll">
                    <div ref={staircase}></div>
                </figure>
                <figure class="staircase__item staircase__item--1">
                    <p style={{ color:"#ffffff"}}>STAIRCASE</p>
                </figure>
                  <figure class="staircase__item staircase__item--2">
                    <img src="/portfolio/staircase1.jpg" alt="staircase image 2" class="staircase__img" style={{zIndex:"1000"}}/>
                </figure>
                <figure class="staircase__item staircase__item--3">
                    <img src="/portfolio/staircase2.jpg" alt="staircase image 3" class="staircase__img" style={{zIndex:"1000"}}/>
                </figure>
                 <figure class="staircase__item staircase__item--4">
                    <img src="/portfolio/staircase4.jpg" alt="staircase image 4" class="staircase__img" />
                </figure>
               <figure class="staircase__item staircase__item--5">
                    <img src="/portfolio/staircase3.jpg" alt="staircase image 5" class="staircase__img" />
                </figure>
                <figure class="staircase__item staircase__item--6">
                    <img src="/portfolio/staircase5.jpg" alt="staircase image 3" class="staircase__img" style={{zIndex:"1000"}}/>
                </figure>
               
              
            </div>
        </div>
        

<div class="container" >
    <div class="railing">
    <figure class="railing__item railing__item--0">
            
        </figure>
        <figure class="railingScroll">
                    <div ref={railing}></div>
        </figure>
        <figure class="railing__item railing__item--1">
            <p style={{ color:"#ffffff"}}>RAILING</p>
        </figure>
          <figure class="railing__item railing__item--2">
            <img src="/portfolio/railing1.png" alt="railing image 2" class="railing__img" style={{zIndex:"1000"}}/>
        </figure>
         <figure class="railing__item railing__item--3">
            <img src="/portfolio/railing2.png" alt="railing image 3" class="railing__img" style={{zIndex:"1000"}}/>
        </figure>
        <figure class="railing__item railing__item--4">
            <img src="/portfolio/railing3.jpg" alt="railing image 4" class="railing__img" />
        </figure>
        <figure class="railing__item railing__item--5">
            <img src="/portfolio/railing4.jpg" alt="railing image 5" class="railing__img" />
        </figure>
        
       
      
    </div>
</div><br/>
<div class="container" >
    <div class="pergola" >
    <figure class="pergola__item pergola__item--0">
            
        </figure>
        <figure class="pergola__item pergola__item--1">
            <p style={{ color:"#ffffff"}}>PERGOLA</p>
        </figure>
        <figure class="pergolaScroll">
                    <div ref={pergola}></div>
        </figure>
           <figure class="pergola__item pergola__item--2">
            <img src="/portfolio/pergola1.jpg" alt="pergola image 2" class="pergola__img" style={{zIndex:"1000"}}/>
        </figure>
         <figure class="pergola__item pergola__item--3">
            <img src="/portfolio/pergola2.jpg" alt="pergola image 3" class="pergola__img" style={{zIndex:"1000"}}/>
        </figure>
        <figure class="pergola__item pergola__item--4">
            <img src="/portfolio/pergola3.jpg" alt="pergola image 4" class="pergola__img" />
        </figure>
      
   
    <figure class="other__item other__item--0"  >
            
        </figure>
        <figure class="other__item other__item--1" >
            <p style={{ color:"#ffffff"}}>OTHER PROJECTS</p>
        </figure>
        <figure class="perBack" >
                
                </figure>
        <figure class="otherScroll">
                    <div ref={otherProjects}></div>
        </figure>
           <figure class="other__item other__item--2" s>
            <img src="/portfolio/other1.jpg"  alt="other image 2" class="other__img" style={{zIndex:"1000"}}/>
        </figure>
         <figure class="other__item other__item--3">
            <img src="/portfolio/other2.jpg" alt="other image 3" class="other__img" style={{zIndex:"1000"}}/>
        </figure>
        <figure class="other__item other__item--4">
            <img src="/portfolio/other3.jpg" alt="other image 4" class="other__img" />
        </figure>
        <figure class="other__item other__item--5">
            <img src="/portfolio/other4.jpg" alt="other image 5" class="other__img" />
        </figure>
        <figure class="other__item other__item--6">
            <img src="/portfolio/other5.jpg" alt="other image 3" class="other__img" style={{zIndex:"1000"}}/>
        </figure>
        <figure class="other__item other__item--7">
            <img src="/portfolio/other6.jpg" alt="other image 3" class="other__img" style={{zIndex:"1000"}}/>
        </figure> 
       </div>
      
    </div>
</div>
       
 
  )
}

export default Portfolio;