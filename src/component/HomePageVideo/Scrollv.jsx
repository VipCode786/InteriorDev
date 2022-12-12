import React from 'react'
import { Helmet } from 'react-helmet'
import './scrollv.scss'
// import index1 from './index1.html'
const Scrollv = () => {
  return (
    <div  className='scrollDiv'>
    {/* <div style={{height: "100vh", width: "100vw"}} className="br"> */}
{/* </div>  */}


  <div className="sticky-parent">
  
    <div className="sticky">
   
    {/* <h2 style={{position:"fixed"}} >Our 4D Approach</h2> */}
     <br/>
    <h2 className='fixedHeader' >Our 4D Approach</h2>

     <br/>
     <br/>
      <div className="horizontal">
      

        <div className="dim " >
        
          <img src="/Process/Group44.png" width="100%" height="100%" alt="" />
        </div>
        <div className="dim " >
        <img src="/Process/Group45.png" width="100%" height="100%" alt="" />
        </div>
        <div className="dim " >
        <img src="/Process/Group46.png" width="100%" height="100%" alt="" />
        </div>
        <div className="dim " >
          <img src="/Process/Group67.png" width="100%" height="100%"alt="" />
        </div>
        {/* <div className="dim"  style={{backgroundColor: "yellow"}}></div>
        <div className="dim"  style={{backgroundColor: "black"}}></div> */}

      </div>
    </div>
  </div>
  {/* <div style={{height: "100vh", width: "100vw"}}></div>  */}
  <Helmet>
  <script  src="script2.js"></script>
  </Helmet>
    </div>
    
  )
}

export default Scrollv