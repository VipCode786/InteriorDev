import React from 'react'
import { Helmet } from 'react-helmet'
import './Horizontal.scss'
const HorizontalScroll = () => {
  return (
    <div className='scrolling'>  
   
   
   
   
  <div className="sticky-parent">
  
  <div className="sticky">
 
  {/* <h2 style={{position:"fixed"}} >Our 4D Approach</h2> */}
  
  <h2 className='fixedHeader' style={{backgroundColor: "#959595"}}>Our 4D Approach</h2>

  
  
    <div className="horizontal">
    
    <div className="dim" >
    <div className="four-d-process four-d-process1">
        <div className="four-d-process-column1">
            <h1><span>D</span>esign</h1>
            <p>We build you a concept and a solution that addresses your unique needs.</p>
        </div>
        <div className="four-d-process-column2">
            <img src="design.png" alt="" srcset=""/>
        </div>
    </div>
    </div>
    
     <div className="dim" >
   <div className="four-d-process four-d-process2">
        <div className="four-d-process-column1">
            <h1><span>D</span>etail</h1>
            <p>Our team of architects and designersthen work on creating a structure and implementing the
                concept by working on the profiling of your project.</p>
        </div>
        <div className="four-d-process-column2">
            <img src="detail.png" alt="" srcset=""/>
        </div>
    </div>
    </div>
    
    <div className="dim" >
    <div className="four-d-process four-d-process3">
        <div className="four-d-process-column1">
            <h1><span>D</span>evelop</h1>
            <p>We start the fabrication of your product once we've agreed on the project's specifics and
                have finalized the specifications.</p>
        </div>
        <div className="four-d-process-column2">
            <img src="develop.png" alt="" srcset=""/>
        </div>
    </div>
    </div>
    
    <div className="dim" >

    <div className="four-d-process four-d-process4">
        <div className="four-d-process-column1">
            <h1><span>D</span>eliver</h1>
            <p>Our team of architects and designers then work on creating a structure and implementing the
                concept by working on the profiling of your project.</p>
        </div>
        <div className="four-d-process-column2">
            <img src="deliver.png" alt="" srcset=""/>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <Helmet>
  <script  src="script2.js"></script>
  </Helmet>
    </div>
  )
}

export default HorizontalScroll