import React from 'react'
import './process.css'
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
            <div className='columnProcess'>
            <img src="design.png" alt="" />
                <div className='heading'>Design</div>
                <p>We build you a concept and a solution that addresses your unique needs.</p>
            </div>
            
            <div className='images marginTop5 '>
                <img src="gear.png" alt="" className='gear1' id="js-logo1"  />
                <img src="gear.png" alt="" className='gear2' id="js-logo2"/>
                <img src="gear.png" alt="" className='gear3' id="js-logo3"/>

                <img src="rightVector.png" alt="" />
            </div>
        </div>

        <div className='rowProcess1 marginLeft-13 marginTop-2' >
           
            <div className='images margin123' >
                <img src="gear.png" alt="" className='gear4' id="js-logo4"  />
                <img src="gear.png" alt="" className='gear5' id="js-logo5"/>
                <img src="gear.png" alt="" className='gear6' id="js-logo6"/>
                <img src="leftVector.png" alt="" />
            </div>
            <div className='columnProcess '>
            <img src="detail.png" alt="" />
                <div className='heading'>Detail</div>
                <p>Our team of architects and designers then work on creating a structure and implementing the
                    concept by working on the profiling of your project.</p>
            </div>
        </div>

        <div className='rowProcess' >
            <div className='columnProcess marginTop-6 '>
            <img src="develop.png" alt="" />
                <div className='heading'>Develop</div>
                <p>We start the fabrication of your product once we’ve agreed on the project’s specifics and
                    have finalized the specifications.</p>
            </div>
            <div className='images margin123'>
                 <img src="gear.png" alt="" className='gear7' id="js-logo7"  />
                <img src="gear.png" alt="" className='gear8' id="js-logo8"/>
                <img src="gear.png" alt="" className='gear9' id="js-logo9"/>
                <img src="gear.png" alt="" className='gear10' id="js-logo10"/>

                <img src="rightVector.png"  alt="" />
            </div>
        </div>

        <div className='rowProcess1 marginLeft-35 marginTop-2' >
           
            {/* <div style={{background:"none",   width: "279px" ,height: "205px"}}>
              
            </div> */}
            <div className='columnProcess ' >
            <img src="deliver.png" alt="" />
                <div className='heading'>Deliver</div>
                <p>Our team of architects and designers then work on creating a structure and implementing the
                    concept by working on the profiling of your project.</p>
            </div>
        </div>
    </div>
  )
}

export default Process