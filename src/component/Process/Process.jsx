import React from 'react'
import './process.css';
import Zoom from 'react-reveal/Zoom';

const Process = () => {

    window.onscroll = function() {
        var theta = document.documentElement.scrollTop / 50 % Math.PI;

document.getElementById('js-logo1').style.transform ='rotate(' + theta + 'rad)';
document.getElementById('js-logo2').style.transform ='rotate(' + theta + 'rad)';
document.getElementById('js-logo3').style.transform ='rotate(' + theta + 'rad)';
document.getElementById('js-logo4').style.transform ='rotate(' + theta + 'rad)';
document.getElementById('js-logo5').style.transform ='rotate(' + theta + 'rad)';
document.getElementById('js-logo6').style.transform ='rotate(' + theta + 'rad)';
document.getElementById('js-logo7').style.transform ='rotate(' + theta + 'rad)';
document.getElementById('js-logo8').style.transform ='rotate(' + theta + 'rad)';
document.getElementById('js-logo9').style.transform ='rotate(' + theta + 'rad)';
document.getElementById('js-logo10').style.transform ='rotate(' + theta + 'rad)';


}

  return (
    <div className='process'>
        <div className='header4d'>Our 4D Approach</div>
        <br/>
        <div className='rowProcess'>
            <div className='columnProcess marginMob'>
            <img src="design.png" alt="" />
            <Zoom>
                <div className='heading'>Design</div>
                <p>We build you a concept and a solution that addresses your unique needs.</p>
                </Zoom>
            </div>
            
            <div className='images marginTop10 bgVector1'>
            <i class = "fa fa-cog fa-5x slow-spin gear1"></i>
            <i class = "fa fa-cog fa-5x slow-spin gear2"></i>
            

                {/* <img src="gear.png" alt="" className='gear1' id="js-logo1"  />
                <img src="gear.png" alt="" className='gear2' id="js-logo2"/>
                <img src="gear.png" alt="" className='gear3' id="js-logo3"/>*/}

                {/* <img className='Vector' src="rightVector.png" alt="" />  */}
            </div>
        </div>

        <div className='rowProcess1 ' >
           
            <div className='images  bgVector2' >
            <i class = "fa fa-cog fa-5x slow-spin gear3"></i>
            <i class = "fa fa-cog fa-5x slow-spin gear4"></i>
            
                {/* <img src="gear.png" alt="" className='gear4' id="js-logo4"  />
                <img src="gear.png" alt="" className='gear5' id="js-logo5"/>
                <img src="gear.png" alt="" className='gear6' id="js-logo6"/> */}
                {/* <img className='Vector' src="leftVector.png" alt="" /> */}
            </div>
            <div className='columnProcess mobMargin1'>
            <img src="detail.png" alt="" />
            <Zoom>
                <div className='heading'>Detail</div>
                <p>Our team of architects and designers then work on creating a structure and implementing the
                    concept by working on the profiling of your project.</p>
                    </Zoom>
            </div>
           
        </div>

        <div className='rowProcess' >
            <div className='columnProcess mobMargin2'>
            <img src="develop.png" alt="" />
            <Zoom>
                <div className='heading'>Develop</div>
                <p>We start the fabrication of your product once we’ve agreed on the project’s specifics and
                    have finalized the specifications.</p>
                    </Zoom>
            </div>

            <div className='images  bgVector1'>
            <i class = "fa fa-cog fa-5x slow-spin gear5"></i>
            <i class = "fa fa-cog fa-5x slow-spin gear6"></i>
            <i class = "fa fa-cog fa-5x slow-spin gear7"></i>

                {/* <img src="gear.png" alt="" className='gear1' id="js-logo1"  />
                <img src="gear.png" alt="" className='gear2' id="js-logo2"/>
                <img src="gear.png" alt="" className='gear3' id="js-logo3"/>*/}

                {/* <img className='Vector' src="rightVector.png" alt="" />  */}
            </div>
            {/* <div className='images margin123'>
                 <img src="gear.png" alt="" className='gear7' id="js-logo7"  />
                <img src="gear.png" alt="" className='gear8' id="js-logo8"/>
                <img src="gear.png" alt="" className='gear9' id="js-logo9"/>
                <img src="gear.png" alt="" className='gear10' id="js-logo10"/>

                <img className='Vector' src="rightVector.png"  alt="" />
            </div> */}
        </div>

        <div className='rowProcess3' >
           
        <div className='images  bgVector2 noneProcesslast'  style={{background:"none"}} >
        {/* <i class = "fa fa-cog fa-5x slow-spin gear3"></i>
            <i class = "fa fa-cog fa-5x slow-spin gear4"></i> */}
                {/* <img src="gear.png" alt="" className='gear4' id="js-logo4"  />
                <img src="gear.png" alt="" className='gear5' id="js-logo5"/>
                <img src="gear.png" alt="" className='gear6' id="js-logo6"/> */}
                {/* <img className='Vector' src="leftVector.png" alt="" /> */}
            </div>
            <div className='columnProcess mobMargin3' >
            <img src="deliver.png" alt="" />
            <Zoom>
                <div className='heading'>Deliver</div>
                <p>Our team of architects and designers then work on creating a structure and implementing the
                    concept by working on the profiling of your project.</p>
                    </Zoom>
            </div>
        </div>
    </div>
  )
}

export default Process