import React, { useEffect, useState } from 'react'
import HomeFirst from '../../component/HomePageVideo/HomeFirst'
import OnScrollVideo from '../../component/HomePageVideo/OnScrollVideo'
import CountUp from "react-countup"
import './scroll.css'
import './home.css'
import './home23.css'
// import Client from '../../component/HomePageVideo/Client'
import OurClients from '../../component/HomePageVideo/OurClients'
import FourDProcess from '../../component/HomePageVideo/FourDProcess'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Scrollv from '../../component/HomePageVideo/Scrollv'
// import gsap from "gsap";
import ScrollTrigger  from "react-scroll-trigger";

import useScrollPosition from "./useScrollPosition";
import HorizontalScroll from '../../component/HomePageVideo/HorizontalScroll'
import { useRef } from 'react'
import { useScrollDirection } from '../../useScrollDirection'
import Testimonials from '../../component/Testimonials/Testimonials'
import Clients from '../../component/HomePageVideo/Clients'
import Testimonials1 from '../../component/Testimonials/Testimonials1'
import Slider from '../../component/Testimonials/Slider'
import $ from 'jquery';
import Process from '../../component/Process/Process'
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const myHTML =
`<div class="container">
<p>Page Container of a ugly example</p>
<div class="sticky-container">
  <p>Sticky container</p>
  <div class="sticky">
    <p>Sticky</p>
    <div id="animation-container"></div>
  </div>
</div>
</div>
<script src="./scrollAnimate.min.js"></script>
      <script src="./script4.js"></script>`
{/* <script src="./scrollAnimate.min.js"></script>

<script>
var $aContainer = document.getElementById("animation-container");
var aContainerRect = $aContainer.getBoundingClientRect();
var start = aContainerRect.top;
var length = aContainerRect.height + 100; //Height of the container plus a offset for better presentation
scrollAnimate({
  frames: {
    path: "./frames/",
    prefix: "frame_",
    extension: "jpg",
    amount: 40,
    pad: "00"
  },
  parent: $aContainer,
  scroll: {
    start: start,
    length: length
  }
})'
</script> */}



const Home = () => {

     
  const scrollPosition = useScrollPosition();
  const [value,setvalue] = useState(1);
  const [flage,setFlage] = useState(true)
  const [flage2,setFlage2] = useState(false)
  const [isHovering, setIsHovering] = useState(false);
  let er;
  const [counterOn, setCounterOn] = useState(false);
  const [sub , setSub] = useState(null);
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("tracking-in-contract", entry.isIntersecting);
    });
  };
  
  const observer = new IntersectionObserver(startAnimation);
  const options = { root: null, rootMargin: '0px', threshold: 1 }; 
  const FourDProcess = useRef(null);
  const elements = document.querySelectorAll('.textInAnimation');
  elements.forEach(el => {
    observer.observe(el, options);
  });
  //  console.log("scrollPosition",scrollPosition);
   $(".buttonHover").on('mouseenter',function(){
      $(".discussProjects").css({ "background-size":" 0% 0%"});
    });
    $(".buttonHover").on('mouseleave',function(){
      $(".discussProjects").css({ "background-size":" 100% 100%"});
    });
  //   $(".scrollImg").on( 'scroll', function(){
  //     // console.log('Event Fired');
  //  });

  
     
 useEffect(()=>{
  console.log("sub",sub)
 },[sub])
 
    $(window).on('scroll',function(){
   
       er =  $('.scrollImg').offset().top;
       let one =  $('.scrollImg').offset().top;
   

      var dim = $('.scrollImg').is(":visible");
    
      if(scrollPosition>600 && scrollPosition <1900)
      {
            $(".scrollImg").css({ 
                  "top": "0",
                  "bottom":"0",
                  "position":"sticky",
                  "overflow-y":"hidden",
                  "overflow-x":"hidden",
                  "z-index": "10000",
                 
            });
      }
      if(scrollPosition>1900 || scrollPosition<600)
      {
            $(".scrollImg").css({ "position":"relative"});
          
      }
    });

 

   const scroll = useRef(null);
   const scrollBG = useRef(null)
  const scrollClick = () => {
    
    scrollBG.current.style.backgroundColor="#383838";
    scrollBG.current.style.backgroundColor=null
   
    scroll.current?.scrollIntoView({behavior: 'smooth'});
    

  };
  // useEffect(()=>{
   
  //   const imgScroll =  scroll.current.offsetTop ;
  //    console.log("imgscroll",imgScroll)
  //  },[])

   useEffect(()=>{
      if(scrollPosition > 1000 && scrollPosition < 1100)
      {
            setvalue(parseInt(2))
      }
  
   
  
      if(scrollPosition > 1100 && scrollPosition < 1200)
      {
            setvalue(parseInt(5))
      }
      if(scrollPosition > 1200 && scrollPosition < 1300)
      {
            setvalue(parseInt(10))
      }
      if(scrollPosition > 1300 && scrollPosition < 1400)
      {
            setvalue(parseInt(15))
      }
  
   
  
      if(scrollPosition > 1400 && scrollPosition < 1500)
      {
            setvalue(parseInt(20))
      }
  
   
  
      if(scrollPosition > 1500 && scrollPosition < 1600)
      {
            setvalue(parseInt(25))
      }
  
   
  
      if(scrollPosition > 1600 && scrollPosition < 1700)
      {
            setvalue(parseInt(30))
      }
  
   
  
      if(scrollPosition > 1700 && scrollPosition < 1800)
      {
            setvalue(parseInt(30))
      }
  
   
  
      if(scrollPosition > 1045 && scrollPosition < 1050)
      {
            setvalue(parseInt(30))
   
      }

     
     
   },[scrollPosition])
   

  return (
      <div>
 
        <div className='video'>
      
      <div className='box'>
        
        <div className='mainHeading'>
        
        <div>The </div>
        <div className='color'>Fabrication</div>
        <div> Expert</div>
        <div className='headingContent'>
        Over 4 Decades of <br/>Innovative Metal Artistry.
        </div>
        
        </div>
        
      </div>
      <div className='centerScroll ' >
            <div className='arrowOne'></div>
      {/* <div className='arrow' onClick={scrollClick}>
          <img src="/headerImages/arrow.svg" alt="arrow" />
      </div> */}
      <div className="scroll" ref={scrollBG}>
          
            <div className='scrollContent'  onClick={scrollClick}>Scroll to Explore</div>
      </div>
      </div>
    </div>
    {/* <section class="Frist">
    <h1 class="big-title">Text move left right Text move left right Text move left right Text move left right Text move left rightText move left right Text move left right Text move left right Text move left right Text move left rightText move left right Text move left right Text move left right Text move left right Text move left rightText move left right Text move left right Text move left right Text move left right Text move left rightText move left right Text move left right Text move left right Text move left right Text move left right</h1>
  </section> */}
  <section class="First1" style={{background:"#ffffff"}}>
      <div className='border big1' >
      
          <div className='borderSet'></div>
          <div className='borderText'>BESPOKE</div>
          <div className='borderSet'></div>
          <div className='borderText'>LUXE</div>
          <div className='borderSet'></div>
          <div className='borderText'>BESPOKE</div>
          <div className='borderSet'></div>
          <div className='borderText'>LUXE</div>
          <div className='borderSet'></div>
      </div>
      </section>
      <div className='home'>
        {/* <div style={{backgroundColor:"#ffffff", fontSize:"20px",display:"flex"}}  >
        <div style={{padding:"1vw"}}>Gates</div>
        <div style={{padding:"2vw"}}>Skylights</div>
        <div style={{padding:"0vw,4vw"}}>C-Channels</div>
        <div style={{padding:"1vw,5vw", fontSize:"30px",}}> Pergolas</div>
        <div style={{padding:"3vw,5vw"}}>Canopies</div>
        <div style={{padding:"4vw,5vw"}}> Staircase</div>
        <div style={{padding:"5vw,5vw"}}>  Aluminium</div>
        <div style={{padding:"6vw,5vw"}}>  doorsSwing</div>
        <div style={{padding:"7vw,5vw"}}>  PyramidicalSupported</div>
        <div style={{padding:"8vw,5vw"}}>Lock </div>
        <div style={{padding:"9vw,5vw"}}> SystemMultiple</div>
        <div style={{padding:"10vw,5vw"}}>ProfilesAluminium</div>
        <div style={{padding:"11vw,5vw"}}> Staircase</div>
        <div style={{padding:"3vw,5vw"}}>  Door</div>
        <div style={{padding:"3vw,5vw"}}>  CladdingsPre-Fab</div>
        
     
       
              
       
         Gates 
         
         
         Aluminium
          
          
        
         
      </div> */}
      <div className='scrollImg'  style={{background:"#ffffff"}} >
      <div  className='whatWeMake'>
      <p class="aniheader textInAnimation">What WE MAKE</p>
      </div>
      <br/>
     
     
      <img   ref={scroll} width="80%" height="600vh" style={{marginLeft:"10%",marginRight:"10%",height: "100vh"}} src={`/frameBy/ezgif-frame-0${value}.jpg`} alt="" />
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: myHTML }} />; */}

 
     
   {/* <Helmet> 
      <script src="scrollAnimate.min.js"></script>
      <script src="script2.js"></script>
      </Helmet> */}
      {/* <Scrollv/> */}
      {/* <OnScrollVideo/> */}
      
      

      {/* <img width="100%"  height="500vh" src={`/SCROLLFrame/${value}.jpg`} alt="" /> */}
      {/* <iframe height="600" width="100%" src="index1.html" ></iframe>  */}
      {/* <div dangerouslySetInnerHTML={{ __html: index1}} /> */}

      <section class="First3" id='sec2' style={{background:"#ffffff"}}>
      <div className='border big3' >
      
          <div className='borderSet'></div>
          <div className='borderText'>ELEGANCE</div>
          <div className='borderSet'></div>
          <div className='borderText'>INGENIOUS</div>
          <div className='borderSet'></div>
          <div className='borderText'>ELEGANCE</div>
          <div className='borderSet'></div>
          <div className='borderText'>INGENIOUS</div>
          <div className='borderSet'></div>
      </div>
      </section>

      {/* <div className='border' id='myDiv'>
          <div className='borderSet'></div>
          <div className='borderText'>ELEGANCE</div>
          <div className='borderSet'></div>
          <div className='borderText'>INGENIOUS</div>
          <div className='borderSet'></div>
      </div> */}
      <div>
     
     
      {/* <div className='whatWeMake'>
      <h2>Our 4D Approach</h2>
      </div> */}
      
  
      
      </div>
      <div ref={FourDProcess}></div>
      <Process/>
      
      {/* <HorizontalScroll/> */}
      {/* <Scrollv/>  */}
      <div className='Our4dProcess textInAnimation'> 
     
      {/* <Process/> */}
      {/* <Scrollv/>  */}
      </div>
      {/* <FourDProcess/> */}
      <div className='boxView'>
                    <div className='boxButton'>
                    <Link to="/about">About Us</Link>
                    </div>
      </div>
      
      <section class="First2" style={{background:"#ffffff"}}>
      <div className='border big2' >
      
          <div className='borderSet'></div>
          <div className='borderText'>MODERNITY</div>
          <div className='borderSet'></div>
          <div className='borderText'>VOUGE</div>
          <div className='borderSet'></div>
          <div className='borderText'>MODERNITY</div>
          <div className='borderSet'></div>
          <div className='borderText'>VOUGE</div>
          <div className='borderSet'></div>
      </div>
      </section>
      {/* <div className='border'>
          <div className='borderSet'></div>
          <div className='borderText'>MODERNITY</div>
          <div className='borderSet'></div>
          <div className='borderText'>VOUGE</div>
          <div className='borderSet'></div>
      </div> */}
      
      
      <div className='counter'>
     
      <div className='counter-box'>
      <p> Worked with </p>
      <div className='text-right'>
      <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(true)}>
      {counterOn &&
      <div  className="count">
      
         <CountUp  end={5000} duration={2}/>+
        
      </div>
       }
       </ScrollTrigger>
      <p>Clients</p>
      </div>
      </div>
     

      <div className='counter-box'>
      <p>Delivered</p>
      <div className='text-right'>
      <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(true)}>
      {counterOn &&
      <div  className="count">
      
         <CountUp  end={8000} duration={2}/> +
        
      </div>
       }
       </ScrollTrigger>
      <p>Projects</p>
      </div>
      </div>

      <div className='counter-box'>
      <p> Delivered & installed in</p>
      <div className='text-right'>
      <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(true)}>
      {counterOn &&
      <div  className="count">
      
         <CountUp  end={6} duration={2}/> 
        
      </div>
       }
       </ScrollTrigger>
      <p>Countries</p>
      </div>
      </div>
      </div>


      <div className='testimonial'> 
      {/* <Testimonials/>

      <Testimonials1/> */}
      <Slider/>
      </div>
      

      <div className='ourTeam'>
        <div className='ourteamInfo'>
              <div className='heading'>
                    Our Team
              </div>
              <br/>
              <div className='content'> 
              <Fade bottom>
                     <p>
                    Being in the industry for over 4 decades,
                    
                     we have worked on designating a workforce who have the capabilities of delivering the best workmanship.
                    
                    We have more than 250 skilled artisans with many of them having 30+ years of experience working with us. Teamwork and Leadership plays a vital role at Interior Craft.

                    </p>
                    </Fade>
               </div> 
               
               <div className='meetButton'>
              <div className='boxView ' style={{marginLeft:"0px",marginTop:"1rem"}} >
              <Link to="myteam"><button className='boxButton'> Meet The Team</button></Link>
              </div>
              </div>

             
              
        </div>
        {/* <div> */}
              <div className='imageOwner'>
              
            <div className='nameOwner'>
            <div className="ownerName">Anis Ahmed </div>
            <div className="ownedesignation">(Visionary & Founder)</div>
            </div>
          <img src="AnisAhmed.png" alt="pic" />

            </div>

      </div>

  <div className='ourClientsBack'>
      <br/>
      <br/>
      <br/>
<div className='ourClients_Heading textInAnimation' >
      Our Clients
</div>


      
      <br/>
<div className='ourClients_Text'>
Worked with and Gained Trust of Market-Leading Companies

</div>
<br/>
<br/>
</div>

   {/* <Clients/>    */}
<OurClients></OurClients>
        <div className='heeloo'></div>
        <div className='featuredProjects'>
        <br/>
        <br/>
              <p className='textInAnimation'>Featured Projects</p>
              <br/>
              <br/>
              <div className='picRow'>
              <Pulse>
                <img src="/FeaturedProjects/gate.png" alt="gate" />
              </Pulse>
              <Pulse>
                <img src="/FeaturedProjects/outdoor.png" alt="outdoor" />
              </Pulse>
              <Pulse>
                <img src="/FeaturedProjects/railing.png" alt="railing" />
              </Pulse>
              {/* </div>
              <br/>
              <div className='picRow' > */}
              <Pulse>
                <img src="/FeaturedProjects/pergola.png" alt="pergola" />
                </Pulse>
                <Pulse>
                <img src="/FeaturedProjects/stairs.png" alt="stairs" />
                </Pulse>
                <Pulse>
                <img src="/FeaturedProjects/door.png" alt="door" />
                </Pulse>
              </div>
              <br/>
              <div className='boxView'>
              <Link to="portfolio" onClick={() => window.scrollTo(0, 0)}><button className='boxButton'> View More </button></Link>
              </div>
        </div>
      <br/>
      <br/>
      {/* hovicon effect-2 sub-b */}
      <div className= {isHovering ? "hovicon effect-2 sub-b" : "hovicon effect-2"}>
          <div className='dream textInAnimation' style={{
           color: isHovering ? '#000000' : '',
          }}>
          DISCUSS YOUR DREAM PROJECTS
          </div>
          
          <Link to="contactpage" className='center'  onMouseEnter={() => (setIsHovering(true),setSub("sub-b"))}
                   onMouseLeave={() => (setIsHovering(false))}>  <button className='boxButton'> CONTACT US</button></Link>
        </div>




        {/* <div >
          <div 
             className='discussProjects '
          >
            <p style={{
           color: isHovering ? '#000000' : '',
          }}
          >DISCUSS YOUR DREAM PROJECTS</p>
            <div className='boxView buttonHover'
                   onMouseEnter={() => (setIsHovering(true),setSub("sub-b"))}
                   onMouseLeave={() => (setIsHovering(false))}
                   
                   >
               
              
                  
            <Link to="contactpage">  <button className='boxButton'> CONTACT US</button></Link>
              </div>
          </div>
        </div> */}
            
      
      </div>
      <Helmet>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>
    <script src='scriptTextMove.js'></script>
    </Helmet> 
      </div>
    
  )
}

export default Home