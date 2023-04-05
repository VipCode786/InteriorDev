
import React from 'react'
import { useEffect } from 'react';
import {useRef} from 'react';
import { useLocation } from 'react-router-dom'

import './Portfolio.css'


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
        otherProjects.current?.scrollIntoView({top:100,behavior: 'smooth'});
       
      }
      else if(a=="gate"){
        gate.current?.scrollIntoView({behavior: 'smooth'});
       
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
  


//   useLayoutEffect(() => {
//     first
  
//     return () => {
//       second
//     };
//   }, [third])
  let handleClick = (a) => {
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
       
    <div className="container">
            <div className="gate" >
                <figure className="gate0_item--1"  >
                    <img src="/portfolio/bgport.png"  className="gate__img" alt="" />
                </figure>
                <figure className="gate0_item--link" >
                 <div style={{display:"flex",flexWrap:"nowrap"}}>   
                <a className='ref' onClick={()=>handleClick(gate)}><div className='btnLink'>Gates</div></a>
                <a className='ref' onClick={()=>handleClick(canopy)}><div className='btnLink'>Canopy</div></a>
                <a className='ref' onClick={()=>handleClick(staircase)} ><div className='btnLink'>Staircase</div></a>
                </div>
                <div style={{display:"flex",flexWrap:"nowrap"}}>   
                <a className='ref' onClick={()=>handleClick(railing)} ><div className='btnLink'>Railing</div></a>
                <a className='ref' onClick={()=>handleClick(pergola)} ><div className='btnLink'>Pergola</div></a>
                </div>
                <a className='ref' onClick={()=>handleClick(otherProjects)}><div className='btnLink'>Other Projects</div></a>
                </figure>
                <figure className="gate0_item--p" >
                    <h1>Our portfolio</h1>
                <p >  consists of projects
                    from all over the globe
                </p>
                </figure>
                <figure className="gate0_item--bg" >
                <img src="/portfolio/gate5.png" />
                <img src="/portfolio/canopy3.jpg" />
                <img src="/portfolio/staircase5.png"/>
                <img src="/portfolio/railing3.jpg" />
                <img src="/portfolio/pergola2.jpg" />
                <img src="/portfolio/other2.jpg" />
                </figure>
                <figure className="gate0_item--img" >
                {/* <img src="/portfolio/portfolio.png" className="gate__img" alt="" /> */}
                </figure>
                <figure className="gate0_item--circle" >
                
                </figure>
              
                
                <figure className="gate__item gate__item--1" >
                    <p style={{ color:"#ffffff"}}>GATES</p>
                </figure>
                <figure className="gateScroll">
                    <div ref={gate}  id='gateLink'></div>
                </figure>
                 <figure className="gate__item gate__item--2">
                
                 
                    <img src="/portfolio/gate5.png" alt="gate image 2" className="gate__img" style={{zIndex:"1000"}}/>
                </figure>
                <figure className="gate__item gate__item--3">
               
                    <img src="/portfolio/gate1.jpg" alt="gate image 3" className="gate__img" style={{zIndex:"1000"}}/>
                </figure>
                <figure className="gate__item gate__item--4">
                    <img src="/portfolio/gate2.jpg" alt="gate image 4" className="gate__img" />
                </figure>
                <figure className="gate__item gate__item--5">
                    <img src="/portfolio/gate6.png" alt="gate image 5" className="gate__img" />
                </figure>
               
              
            </div>
        </div>
<br/>
        <div className="container" style={{background:"#383838"}}>
            <div className="canopy">
                <figure className="canopyScroll">
                    <div ref={canopy} id="canopyLink"></div>
                </figure>
                <figure className="canopy__item canopy__item--1">
                    <p style={{ color:"#ffffff"}}>CANOPY</p>
                </figure>
                 <figure className="canopy__item canopy__item--2">
                    <img src="/portfolio/canopy1.jpg" alt="canopy image 2" className="canopy__img" style={{zIndex:"1000"}}/>
                </figure>
                 <figure className="canopy__item canopy__item--3">
                    <img src="/portfolio/canopy3.jpg" alt="canopy image 3" className="canopy__img" style={{zIndex:"1000"}}/>
                </figure>
                <figure className="canopy__item canopy__item--4">
                    <img src="/portfolio/canopy5.png" alt="canopy image 4" className="canopy__img" />
                </figure>
                <figure className="canopy__item canopy__item--5">
                    <img src="/portfolio/canopy8.png" alt="canopy image 5" className="canopy__img" />
                </figure>
               
              
            </div>
        </div>
        <br/>

        <div className="container" style={{background:"#383838"}}>
            <div className="staircase">
            <figure className="staircase__item staircase__item--0">
                    
                </figure>
                <figure className="staircaseScroll">
                    <div ref={staircase} id="staircaseLink"></div>
                </figure>
                <figure className="staircase__item staircase__item--1">
                    <p style={{ color:"#ffffff"}}>STAIRCASE</p>
                </figure>
                  <figure className="staircase__item staircase__item--2">
                    <img src="/portfolio/staircase1.png" alt="staircase image 2" className="staircase__img" style={{zIndex:"1000"}}/>
                </figure>
                <figure className="staircase__item staircase__item--3">
                    <img src="/portfolio/staircase2.png" alt="staircase image 3" className="staircase__img" style={{zIndex:"1000"}}/>
                </figure>
                 <figure className="staircase__item staircase__item--5">
                    <img src="/portfolio/staircase5.png" alt="staircase image 4" className="staircase__img" />
                </figure>
               <figure className="staircase__item staircase__item--4">
                    <img src="/portfolio/staircase4.png" alt="staircase image 5" className="staircase__img" />
                </figure>
                <figure className="staircase__item staircase__item--6">
                    <img src="/portfolio/staircase3.png" alt="staircase image 3" className="staircase__img" style={{zIndex:"1000"}}/>
                </figure>
               
              
            </div>
        </div>
        

<div className="container" >
    <div className="railing">
    <figure className="railing__item railing__item--0">
            
        </figure>
        <figure className="railingScroll">
                    <div ref={railing} id="railingLink"></div>
        </figure>
        <figure className="railing__item railing__item--1">
            <p style={{ color:"#ffffff"}}>RAILING</p>
        </figure>
          <figure className="railing__item railing__item--2">
            <img src="/portfolio/railing1.png" alt="railing image 2" className="railing__img" style={{zIndex:"1000"}}/>
        </figure>
         <figure className="railing__item railing__item--3">
            <img src="/portfolio/railing2.png" alt="railing image 3" className="railing__img" style={{zIndex:"1000"}}/>
        </figure>
        <figure className="railing__item railing__item--4">
            <img src="/portfolio/railing3.jpg" alt="railing image 4" className="railing__img" />
        </figure>
        <figure className="railing__item railing__item--5">
            <img src="/portfolio/railing4.jpg" alt="railing image 5" className="railing__img" />
        </figure>
        
       
      
    </div>
</div><br/>
<div className="container" >
    <div className="pergola" >
    <figure className="pergola__item pergola__item--0">
            
        </figure>
        <figure className="pergola__item pergola__item--1">
            <p style={{ color:"#ffffff"}}>PERGOLA</p>
        </figure>
        <figure className="pergolaScroll">
                    <div ref={pergola} id="pergolaLink"></div>
        </figure>
           <figure className="pergola__item pergola__item--2">
            <img src="/portfolio/pergola1.jpg" alt="pergola image 2" className="pergola__img" style={{zIndex:"1000"}}/>
        </figure>
         <figure className="pergola__item pergola__item--3">
            <img src="/portfolio/pergola2.jpg" alt="pergola image 3" className="pergola__img" style={{zIndex:"1000"}}/>
        </figure>
        <figure className="pergola__item pergola__item--4">
            <img src="/portfolio/pergola3.jpg" alt="pergola image 4" className="pergola__img" />
        </figure>
      
   
    <figure className="other__item other__item--0"  >
            
        </figure>
         
        <figure className="other__item other__item--1" ref={otherProjects} id="otherscrollLink" >
        {/* <div ref={otherProjects} id="otherscrollLink"></div> */}
            <p style={{ color:"#ffffff"}}>OTHER PROJECTS</p>
        </figure>
        <figure className="perBack" >
                
                </figure>
        <figure className="other__item otherScroll">
                  
        </figure>
     
           <figure className="other__item other__item--2" s>
            <img src="/portfolio/other1.jpg"  alt="other image 2" className="other__img" style={{zIndex:"1000"}}/>
        </figure>
         <figure className="other__item other__item--3">
            <img src="/portfolio/other2.jpg" alt="other image 3" className="other__img" style={{zIndex:"1000"}}/>
        </figure>
        <figure className="other__item other__item--4">
            <img src="/portfolio/other3.jpg" alt="other image 4" className="other__img" />
        </figure>
        <figure className="other__item other__item--5">
            <img src="/portfolio/other4.jpg" alt="other image 5" className="other__img" />
        </figure>
        <figure className="other__item other__item--6">
            <img src="/portfolio/other5.jpg" alt="other image 3" className="other__img" style={{zIndex:"1000"}}/>
        </figure>
        <figure className="other__item other__item--7">
            <img src="/portfolio/other6.jpg" alt="other image 3" className="other__img" style={{zIndex:"1000"}}/>
        </figure> 
       </div>
      
    </div>
</div>
       
 
  )
}

export default Portfolio;
