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
    <div className='portfolio'>
        <div className='background'>
        <div>
        <p> Our portfolio consists of projects
          from all over the globe
        </p>
        <img src="/portfolio/portfolio.png" alt="" />
        </div>
        <div style={{overflow:"hidden", height:"699px"}}>
        <div className='whiteCircle'>
        <div className='portfolioName'>
        <a className='ref' onClick={()=>handleClick(gate)}>Gates</a>
        <a className='ref' onClick={()=>handleClick(canopy)}>Canopy</a>
        <a className='ref' onClick={()=>handleClick(staircase)}>Staircase</a>
        <a className='ref' onClick={()=>handleClick(railing)}>Railing</a>
        <a className='ref' onClick={()=>handleClick(pergola)}>Pergola</a>
        <a className='ref' onClick={()=>handleClick(otherProjects)}>Other Projects</a>

        </div>

              {/* Gates<br/>
              Canopy<br/>
              Staircase<br/>
              Railing<br/>
              Pergola<br/>
              OtherProjects<br/>
              

            </p> */}
          
        </div>
        
        </div>
       </div>
       <div className='portfolioNameMob'>
       <a className='ref' onClick={()=>handleClick(gate)}>Gates</a>
        <a className='ref' onClick={()=>handleClick(canopy)}>Canopy</a>
        <a className='ref' onClick={()=>handleClick(staircase)}>Staircase</a>
        <a className='ref' onClick={()=>handleClick(railing)}>Railing</a>
        <a className='ref' onClick={()=>handleClick(pergola)}>Pergola</a>
        <a className='ref' onClick={()=>handleClick(otherProjects)}>Other Projects</a>
            </div>
       <div ref={gate}></div>
        

      <br/>
      <br/>
      <div >
        <div ><div ref={gate}></div>
      <div className='gates' >
        <div className='gate'><p>Gates</p></div>
        {/* <img src="/portfolio/portfolio.png" alt=""  /> */}
        <div  className='best'>
        <div className='start' >

        <div className='rowCanopy'>
       <img src="/portfolio/gate1.jpg" alt="" className='img1 '  />
       <img src="/portfolio/gate2.jpg" alt="" className='img2 ' />
       </div>
       <div className='rowCanopy'>
       <img src="/portfolio/gate3.jpg" alt="" className='img3 '  />
       <img src="/portfolio/gate4.jpg" alt="" className='img4 ' />
       </div>
       </div>
       </div>
      </div>
      </div>
      
      </div>
    <br/>
      <div className='canopy' ref={canopy}>
        <p className="mobileView">Canopy</p>
        <div className='rowCanopy'>
        <img src="/portfolio/canopy1.jpg" alt="" className='canopy1'  />
        <div className='columnCanopy ' >
        <div className='rowCanopy '>
         <img src="/portfolio/canopy2.jpg" alt="" className='canopy2' />
         <p>Canopy</p>
         </div>
         <div className='rowCanopy marginTop2'>
       <img src="/portfolio/canopy3.jpg" alt="" className='canopy3 '  />
       <img src="/portfolio/canopy4.jpg" alt="" className='canopy4 marginLeft2' />
       </div>
       </div>
       </div>
      </div>
      
      <div className='staircase' ref={staircase}>
        <p>StairCase</p>
      <div className='rowCanopy'>
      <img src="/portfolio/staircase1.jpg" alt="" className='staircase1'  />
      <div className='columnCanopy'>
      <img src="/portfolio/staircase2.jpg" alt="" className='staircase2'  />
      <img src="/portfolio/staircase3.jpg" alt="" className='staircase3'  />
      </div>
      <div className='columnCanopy'>
      <img src="/portfolio/staircase4.jpg" alt="" className='staircase4'  />
      <img src="/portfolio/staircase5.jpg" alt="" className='staircase5'  />
      </div>
      </div>
      </div>

      <div className='railing' ref={railing} >
        <p>Railing</p>
      <div className='rowCanopy'>
      <img src="/portfolio/railing11.jpg" alt="" className='railing1'  />
      <div className='columnCanopy'>
      <div className='rowCanopy'>
      <img src="/portfolio/railing2.jpg" alt="" className='railing2'  />
      <img src="/portfolio/railing3.jpg" alt="" className='railing3'  />
      </div>
      <img src="/portfolio/railing4.jpg" alt="" className='railing4'  />
      </div>

      </div>
      </div>


      <div className='pergola ' ref={pergola}>
      
      <div className='columnCanopy marginTop2'>
        <div style={{marginTop:"0px"}} className="pergolatext">Pergola</div>
        
      <div className='rowCanopy'>
      <div className='columnCanopy'>
      <img src="/portfolio/pergola1.jpg" className='paragola1' alt="" />
      <img src="/portfolio/pergola2.jpg" className='paragola2' alt="" />
      </div>
      <br/>
      <br/>
      <img src="/portfolio/pergola3.jpg" className='paragola3' alt="" />
      </div>
      <br/>
      <br/>
      
      {/* <br/>
      <br/> */}
      <div ref={otherProjects}>
      {/* <p  className="mobileView marginLeft-20 marginTop-4">OTHER <br/>
         PROJECTS</p> */}
      
      </div>
      <p className="desktopView">OTHER <br/>
         PROJECTS</p>
      <div className='rowCanopy otherMar' >
      <img src="/portfolio/other1.jpg" className='other1' alt="" />
      <img src="/portfolio/other2.jpg" className='other2' alt="" />
      <br/>
      <br/>
      <br/>
      {/* <p style={{marginLeft:"20%"}} className="desktopView">OTHER <br/>
         PROJECTS</p> */}
      </div>
      <div className='rowCanopy'>
      <img src="/portfolio/other3.jpg" className='other3' alt="" />

      <img src="/portfolio/other4.jpg" className='other4' alt="" />

      <img src="/portfolio/other5.jpg" className='other5' alt="" />

      <img src="/portfolio/other6.jpg" className='other6' alt="" />
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default Portfolio