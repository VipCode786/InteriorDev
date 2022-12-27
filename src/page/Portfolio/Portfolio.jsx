import React from 'react'
import './portfolio.scss'
const Portfolio = () => {
  return (
    <div className='portfolio'>
        <div className='background'>
       <p> Our portfolio consists of projects
          from all over the globe
        </p>
        <img src="/portfolio/portfolio.png" alt="" />
        <div style={{overflow:"hidden", height:"699px"}}>
        <div className='whiteCircle'>
          <p className='portfolioName'>
              Gates<br/>
              Canopy<br/>
              Railing<br/>
              C channels
            </p>
        </div>
        </div>
       </div>

        <p className='portfolioNameMob'>
              Gates<br/>
              Canopy<br/>
              Railing<br/>
              C channels
            </p>

      <br/>
      <br/>
      <div>
        <div >
      <div className='gates'>
        <div className='gate'><p>Gates</p></div>
        {/* <img src="/portfolio/portfolio.png" alt=""  /> */}
        {/* <div className='start' > */}

       <img src="/portfolio/gate1.jpg" alt="" className='img1 start'  />
       <img src="/portfolio/gate2.jpg" alt="" className='img2 start' />
       <img src="/portfolio/gate3.jpg" alt="" className='img3 '  />
       <img src="/portfolio/gate4.jpg" alt="" className='img4 ' />
       {/* </div> */}
      </div>
      </div>
      
      </div>
    <br/>
      <div className='canopy'>
        <p className="mobileView">Canopy</p>
        <div className='rowCanopy'>
        <img src="/portfolio/canopy1.jpg" alt="" className='canopy1'  />
        <div className='columnCanopy marginLeft2'>
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
      
      <div className='staircase'>
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

      <div className='railing'>
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


      <div className='pergola '>
      
      <div className='columnCanopy marginTop2'>
        <p style={{marginTop:"0px"}}>Pergola</p>
      <div className='rowCanopy'>
      <div className='columnCanopy'>
      <img src="/portfolio/pergola1.jpg" className='paragola1' alt="" />
      <img src="/portfolio/pergola2.jpg" className='paragola2' alt="" />
      </div>
      <img src="/portfolio/pergola3.jpg" className='paragola3' alt="" />
      </div>
     
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='rowCanopy  '>
      <img src="/portfolio/other1.jpg" className='other1' alt="" />
      <img src="/portfolio/other2.jpg" className='other2' alt="" />
      <p style={{marginLeft:"20%"}}>OTHER <br/>
         PROJECTS</p>
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