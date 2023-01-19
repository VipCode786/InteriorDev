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

  const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("tracking-in-contract", entry.isIntersecting);
    });
  };
  
  const observer = new IntersectionObserver(startAnimation);
  const options = { root: null, rootMargin: '0px', threshold: 1 }; 
  
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
    $(".scrollImg").on( 'scroll', function(){
      // console.log('Event Fired');
   });

 
     
 useEffect(()=>{
  console.log("sub",sub)
 },[sub])
 
    $(window).on('scroll',function(){
    //   var wer = $('.heeloo').is(":visible");
    //   if(wer)
    //   {
    //    $('html, body').animate({
    //      scrollTop: $(".heeloo").offset().top
    //  }, 1000)
    //   }
       er =  $('.scrollImg').offset().top;
       let one =  $('.scrollImg').offset().top;
      //  console.log("onenenenene",one)
      // console.log("er",er)

      var dim = $('.scrollImg').is(":visible");
      // if(dim)
      // {
      //   $('html, body').animate({
      //     scrollTop: $("#myDiv").offset().top
      // }, 1000);
      //      setFlage2(true) 
      // }
      // if (dim == false && setFlage2==true) {
      //       $('html, body').animate({
      //             scrollTop: $("#myDiv").offset().top
      //         }, 1000);
      //         setFlage2(false)
      //       }
      if(scrollPosition>600 && scrollPosition <1900)
      {
        //  console.log('Event Fired');
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

  //  const handleMouseEnter = () => {
  //     setIsHovering(true);
  //     setSub("sub-2")
  //   };
  
  //   const handleMouseLeave = () => {
  //     setIsHovering(false);
  //     setSub(null)
  //   };
   const scroll = useRef(null);

  const scrollClick = () => {
    scroll.current?.scrollIntoView({behavior: 'smooth'});
  };
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

      // xexjejhjhi

      // if(scrollPosition > 1000 && scrollPosition < 1005)
      // {
      //       setvalue(parseInt(2))
      // }
  
   
  
      // if(scrollPosition > 1005 && scrollPosition < 1015)
      // {
      //       setvalue(parseInt(3))
      // }
      // if(scrollPosition > 1015 && scrollPosition < 1020)
      // {
      //       setvalue(parseInt(4))
      // }
      // if(scrollPosition > 1020 && scrollPosition < 1025)
      // {
      //       setvalue(parseInt(5))
      // }
  
   
  
      // if(scrollPosition > 1025 && scrollPosition < 1030)
      // {
      //       setvalue(parseInt(6))
      // }
  
   
  
      // if(scrollPosition > 1030 && scrollPosition < 1035)
      // {
      //       setvalue(parseInt(7))
      // }
  
   
  
      // if(scrollPosition > 1035 && scrollPosition < 1040)
      // {
      //       setvalue(parseInt(8))
      // }
  
   
  
      // if(scrollPosition > 1040 && scrollPosition < 1045)
      // {
      //       setvalue(parseInt(9))
      // }
  
   
  
      // if(scrollPosition > 1045 && scrollPosition < 1050)
      // {
      //       setvalue(parseInt(10))
      // }
  
   
  
      // if(scrollPosition > 1050 && scrollPosition < 1055)
      // {
      //       setvalue(parseInt(11))
      // }
  
   
  
      // if(scrollPosition > 1055 && scrollPosition < 1060)
      // {
      //       setvalue(parseInt(12))
      // }
      // if(scrollPosition > 1060 && scrollPosition < 1065)
      // {
      //       setvalue(parseInt(13))
      // }
      // if(scrollPosition > 1065 && scrollPosition < 1070)
      // {
      //       setvalue(parseInt(14))
      // }
      // if(scrollPosition > 1070 && scrollPosition < 1075)
      // {
      //       setvalue(parseInt(15))
      // }
      // if(scrollPosition > 1075 && scrollPosition < 1080)
      // {
      //       setvalue(parseInt(16))
      // }
      // if(scrollPosition > 1080 && scrollPosition < 1085)
      // {
      //       setvalue(parseInt(17))
      // }
      // if(scrollPosition > 1085 && scrollPosition < 1090)
      // {
      //       setvalue(parseInt(18))
      // }
      // if(scrollPosition > 1090 && scrollPosition < 1095)
      // {
      //       setvalue(parseInt(19))
      // }
      // if(scrollPosition > 1095 && scrollPosition < 1100)
      // {
      //       setvalue(parseInt(20))
      // }
  
      // if(scrollPosition > 1100 && scrollPosition < 1105)
      // {
      //       setvalue(parseInt(21))
      // }
      // if(scrollPosition > 1105 && scrollPosition < 1110)
      // {
      //       setvalue(parseInt(22))
      // }
  
      // if(scrollPosition > 1110 && scrollPosition < 1115)
      // {
      //       setvalue(parseInt(23))
      // }
      // if(scrollPosition > 1115 && scrollPosition < 1120)
      // {
      //       setvalue(parseInt(24))
      // }
  
      // if(scrollPosition > 1120 && scrollPosition < 1125)
      // {
      //       setvalue(parseInt(25))
      // }
      // if(scrollPosition > 1125 && scrollPosition < 1130)
      // {
      //       setvalue(parseInt(26))
      // }
  
   
  
      // if(scrollPosition > 1130 && scrollPosition < 1135)
      // {
      //       setvalue(parseInt(27))
      // }
  
      // if(scrollPosition > 1135 && scrollPosition < 1140)
      // {
      //       setvalue(parseInt(28))
      // }
      // if(scrollPosition > 1140 && scrollPosition < 1145)
      // {
      //       setvalue(parseInt(29))
      // }
  
   
  
      // if(scrollPosition > 1145 && scrollPosition < 1150)
      // {
      //       setvalue(parseInt(30))
      // }
  
      // if(scrollPosition > 1150 && scrollPosition < 1155)
      // {
      //       setvalue(parseInt(31))
      // }
  
   
   
   
//     xhksxbjdbjksxjbxdjxdbj
   
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
   
//    const inputRef = useRef();
//    const scrollDirection = useScrollDirection(inputRef);
//    console.log("scrollDirection",scrollDirection)
 
//    const scrollHandler = _ => {
//      console.log(inputRef.current.getBoundingClientRect());
  
//      const rect=inputRef.current.getBoundingClientRect();
//      const isComponentInView = (
//                  rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
//                  rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
//              );
//      if(isComponentInView)
//      {
//              console.log("view is visibleuebicdbdb")
            

//             //  inputRef.current.scrollLeft += 10000;
//             //  
//             //  inputRef.current.scrollTo({left: 1000})
//      }
//     };

    // useEffect(()=>{
    //   inputRef.current.scrollLeft = 4000;
    // })
//    useEffect(() => {
//      window.addEventListener("scroll", scrollHandler, true);
//      return () => {
//        window.removeEventListener("scroll", scrollHandler, true);
//      };
//    }, []);
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
        {/* <HomeFirst/> */}
        <div className='video'>
       {/* <video width="100%" height="100%" class="videoInsert" loop autoPlay muted >
      <source src="onVideo.mp4" type="video/mp4"/>
     </video> */}
      {/* <video id="background-video" loop autoplay>
  <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4">
  <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg">
  Your browser does not support the video tag.
</video> */}
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
      <div className='centerScroll hideMobile'>
            <div className='arrowOne'></div>
      {/* <div className='arrow' onClick={scrollClick}>
          <img src="/headerImages/arrow.svg" alt="arrow" />
      </div> */}
      <div className="scroll">
          
            <div className='scrollContent' onClick={scrollClick}>Scroll to Explore</div>
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
      <div className='scrollImg hideMobile' style={{background:"#ffffff"}}>
      <div ref={scroll} className='whatWeMake'>
      <p class="aniheader textInAnimation">What WE MAKE</p>
      </div>
      <br/>
     
     
      {/* <ParallaxText>A Wild Sheep Chase</ParallaxText> */}
      <img   width="80%" height="600vh" style={{marginLeft:"10%",marginRight:"10%"}} src={`/frameBy/ezgif-frame-0${value}.jpg`} alt="" />
      
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

      <section class="First3" style={{background:"#ffffff"}}>
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
                     <p>
                    Being in the industry for over 4 <br/>decades,
                    
                     we have worked on designating a workforce who have the capabilities of delivering the best workmanship.
                    
                    We have more than 250 skilled artisans with many of them having 30+ years of experience working with us. Teamwork and Leadership plays a vital role at Interior Craft.

                    </p>
               </div> 
               
               <div className='meetButton'>
              <div className='boxView' >
              <Link to="myteam"><button className='boxButton' style={{fontSize: "25px",padding:"12px 20px 12px 20px"}}> Meet The Team</button></Link>
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
              <Link to="portfolio"><button className='boxButton'> View More </button></Link>
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