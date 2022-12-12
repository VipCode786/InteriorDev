import React, { useEffect, useState } from 'react'
import HomeFirst from '../../component/HomePageVideo/HomeFirst'
import OnScrollVideo from '../../component/HomePageVideo/OnScrollVideo'
import CountUp from "react-countup"

import './home.scss'
// import Client from '../../component/HomePageVideo/Client'
import OurClients from '../../component/HomePageVideo/OurClients'
import FourDProcess from '../../component/HomePageVideo/FourDProcess'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Scrollv from '../../component/HomePageVideo/Scrollv'
import gsap from "gsap";
import ScrollTrigger  from "react-scroll-trigger";

import useScrollPosition from "./useScrollPosition";
import HorizontalScroll from '../../component/HomePageVideo/HorizontalScroll'
import { useRef } from 'react'
import { useScrollDirection } from '../../useScrollDirection'
import Testimonials from '../../component/Testimonials/Testimonials'
import Clients from '../../component/HomePageVideo/Clients'

// import index1 from './index1.html'
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
  const [value,setvalue] = useState(501);
  const [flage,setFlage] = useState(true)
  const [flage2,setFlage2] = useState(false)
  const [counterOn, setCounterOn] = useState(false)
   console.log(scrollPosition);
   useEffect(()=>{


     if(scrollPosition > 501 && scrollPosition < 644)
    {
          setvalue(parseInt(scrollPosition))
    }
    
    // if(scrollPosition > 900 && scrollPosition < 950)
    // {
    //      setvalue(15)
    // }

    // if(scrollPosition > 950 && scrollPosition < 1000)
    // {
    //      setvalue(20)
    // }

    // if(scrollPosition > 1000 && scrollPosition < 1050)
    // {
    //      setvalue(25)
    // }
    // if(scrollPosition > 817 ){
    //  if(scrollPosition < 827 )
    // {

    //   setvalue(parseInt(scrollPosition))
    //   console.log("setValue",setvalue)
    // }
  // }  
  //   if(scrollPosition > 818 && scrollPosition < 909 )
  //   {
  //     setvalue(scrollPosition)
  //   }

  //   if(flage)
  //   {
  //   if(value==38 || value < 38)
  //   {
  //   if(scrollPosition > 1000 && scrollPosition < 2000 )
  //   {
  //       setvalue(value+1)
  //       if(value==37)
  //       {
  //         setFlage(false)
  //         setFlage2(true)
  //       }
  //   }
  //   }
  // }

  // if(flage2)
  // {
  //  if( value==38 || value < 38 )
  //  {
  //   if(scrollPosition > 1000 && scrollPosition < 2000 )
  //   {
  //       setvalue(value-1)
  //       if(value==12)
  //       {
  //         setFlage(true)
  //         setFlage2(false)
  //       }
  //   }  
  //  }
  // }
//  console.log("value",value)
   },[scrollPosition])
   
   const inputRef = useRef();
   const scrollDirection = useScrollDirection(inputRef);
   console.log("scrollDirection",scrollDirection)
 
   const scrollHandler = _ => {
     console.log(inputRef.current.getBoundingClientRect());
  
     const rect=inputRef.current.getBoundingClientRect();
     const isComponentInView = (
                 rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
                 rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
             );
     if(isComponentInView)
     {
             console.log("view is visibleuebicdbdb")
            

            //  inputRef.current.scrollLeft += 10000;
            //  
            //  inputRef.current.scrollTo({left: 1000})
     }
    };

    // useEffect(()=>{
    //   inputRef.current.scrollLeft = 4000;
    // })
   useEffect(() => {
     window.addEventListener("scroll", scrollHandler, true);
     return () => {
       window.removeEventListener("scroll", scrollHandler, true);
     };
   }, []);
  //  const ref1 = useRef();
  //  const ctrRef =ref1;
  //  const rect=ref1.current.getBoundingClientRect();
//    const isComponentInView = (
//     rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
// );

// if(isComponentInView){
//  console.log("Scroll isin view")
// }
//   // const getscroll = () => {
  //   const scroll = Math.abs(ref.current.getBoundingClientRect().top - ref.current.offsetTop);
  //   console.log("asdfghjk",scroll);
  // };

  // useEffect(()=>{
  //   getscroll();
  //   ref.current.scrollRight = 1000
  // })

  return (
      <div>
        <HomeFirst/>
       
       
        
      <div className='border' >
      
          <div className='borderSet'></div>
          <div className='borderText'>BESPOKE</div>
          <div className='borderSet'></div>
          <div className='borderText'>LUXE</div>
          <div className='borderSet'></div>
      </div>
      <div className='home'>
      <div className='scrollImg'>
      <div className='whatWeMake'>
      <p >What WE MAKE</p>
      </div>
      {/* <ParallaxText>A Wild Sheep Chase</ParallaxText> */}
      <img   width="100%"   src={`/frames/${value}.jpg`} alt="" />
      
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
      <div className='border'>
          <div className='borderSet'></div>
          <div className='borderText'>ELEGANCE</div>
          <div className='borderSet'></div>
          <div className='borderText'>INGENIOUS</div>
          <div className='borderSet'></div>
      </div>
      <div>
     
     
      {/* <div className='whatWeMake'>
      <h2>Our 4D Approach</h2>
      </div> */}
      
  
      
      </div>
      <HorizontalScroll/>
      {/* <Scrollv/>  */}
      <div className='Our4dProcess'> 
      {/* <Scrollv/>  */}
      </div>
      {/* <FourDProcess/> */}
      <div className='boxView'>
                    <div className='boxButton'>
                    <Link to="/about">About</Link>
                    </div>
      </div>
      <div className='border'>
          <div className='borderSet'></div>
          <div className='borderText'>MODERNITY</div>
          <div className='borderSet'></div>
          <div className='borderText'>VOUGE</div>
          <div className='borderSet'></div>
      </div>
      
      
      <div className='counter'>
     
      <div className='counter-box'>
      <p> Worked with us</p>
      <div className='text-right'>
      <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(true)}>
      {counterOn &&
      <div  className="count">
      {/* <CountUp end={100} /> */}
      
         <CountUp  end={1000} duration={2}/> +
        
      </div>
       }
       </ScrollTrigger>
      <p>hello</p>
      </div>
      </div>
     

      <div className='counter-box'>
      <p> Worked wit us</p>
      <div className='text-right'>
      <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(true)}>
      {counterOn &&
      <div  className="count">
      {/* <CountUp end={100} /> */}
      
         <CountUp  end={1000} duration={2}/> +
        
      </div>
       }
       </ScrollTrigger>
      <p>hello</p>
      </div>
      </div>

      <div className='counter-box'>
      <p> Worked wit us</p>
      <div className='text-right'>
      <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(true)}>
      {counterOn &&
      <div  className="count">
      {/* <CountUp end={100} /> */}
      
         <CountUp  end={1000} duration={2}/> +
        
      </div>
       }
       </ScrollTrigger>
      <p>hello</p>
      </div>
      </div>
      </div>


      <div className='testimonial'> 
      <Testimonials/>
      </div>
      

      <div className='ourTeam'>
        <div className='ourteamInfo'>
              <div className='heading'>
                    Our Team
              </div>
              <div className='content'> 
                     <p>
                    Being in the industry for over 4 decades,
                    
                     we have worked on designating a workforce who have the capabilities of delivering the best workmanship.
                    
                    We have more than 250 skilled artisans with many of them having 30+ years of experience working with us. Teamwork and Leadership plays a vital role at Interior Craft.

                    </p>
               </div> 
              <div className='boxView' style={{width:"65%"}}>
              <button className='boxButton'><Link to="myteam" style={{fontSize:"2.2vw"}}> Meet The Team</Link></button>
              </div>
          
             
              
        </div>
        {/* <div> */}
              <div className='imageOwner'>
              
               <img src="AnisAhmed.png" alt="pic" />
               <h2 style={{color:"#ffffff"}}>
            Anish Ahmed <br/>
            (Visionary & Founder)
          </h2>
            </div>

      </div>

      

   {/* <Clients/>    */}
<OurClients></OurClients>

        <div className='featuredProjects'>
              <p>Featured Projects</p>
              <br/>
              <br/>
              <div className='picRow'>
                <img src="/FeaturedProjects/gate.png" alt="gate" />
                <img src="/FeaturedProjects/outdoor.png" alt="outdoor" />
                <img src="/FeaturedProjects/railing.png" alt="railing" />
              {/* </div>
              <br/>
              <div className='picRow' > */}
                <img src="/FeaturedProjects/pergola.png" alt="pergola" />
                <img src="/FeaturedProjects/stairs.png" alt="stairs" />
                <img src="/FeaturedProjects/door.png" alt="door" />
              </div>
              <br/>
              <div className='boxView'>
              <button className='boxButton'><Link to="portfolio"> View More </Link></button>
              </div>
        </div>
      <br/>
        <div>
          <div className='discussProjects'>
            <p>DISCUSS YOUR DREAM PROJECTS</p>
            <div className='boxView'>
              <button className='boxButton'><Link to="contactpage"> CONTACT US</Link></button>
              </div>
          </div>
        </div>
            
      
      </div>
      </div>
    
  )
}

export default Home