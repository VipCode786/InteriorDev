import React, { useEffect, useMemo, useRef, useState } from 'react';  
// import 'bootstrap/dist/css/bootstrap.css';  
// import Carousel from 'react-bootstrap/Carousel';  
import "./WhatWeMake.css"
const WhatWeMake = () => {
    
    
    
    const messages = [ "Gates","Skylights","C-Channels","Pergolas","Canopies","Staircase","Pyramidical","Supported","Gates","Lock System","Pre-Fab Structures","Elevation Louvers","Canopies","Flat Skylights","Planters","Cantilevered" ,"Staircase","Railings","Manhole Covers","Drain Covers","Metal Jaali","Glass Floors","Lift Jambs","Baffle Ceilings"  ];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < messages[currentMessageIndex].length) {
        setText(text + messages[currentMessageIndex][index]);
        setIndex(index + 1);
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setText('');
          setIndex(0);
          setCurrentMessageIndex((currentMessageIndex + 1) % messages.length);
        }, 1000);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [index, currentMessageIndex, text]);
    
    
    
    
    
    
//   const [text, setText] = useState('');
//   const [index, setIndex] = useState(0);
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       if (index < message.length) {
//         setText(text + message[index]);
//         setIndex(index + 1);
//       }
//       else if(index == message.length){
//         setText("");
//         setIndex(0);
//       }
//     }, 500);

    
//     return () => clearInterval(intervalId);
//   }, [index]);

//   const message = 'Aluminium';
  return (
    <div style={{ display: 'block', width: "100vw" }}>  
     <p className='textCarousel' >We Make {text}</p>
     {/* {text} */}
    {/* <Carousel>  
      <Carousel.Item interval={1500} >  
        <img  
          className="d-block w-100"  
src="WhatWeMake/aluminium.png"  
          alt="Image One"  
        />  
        <Carousel.Caption>  
           
        </Carousel.Caption>  
      </Carousel.Item>  
      <Carousel.Item interval={1500}>  
        <img  
          className="d-block w-100"  
src="WhatWeMake/canopies.png"  
          alt="Image Two"  
        />  
        <Carousel.Caption>  
           
         
        </Carousel.Caption>  
      </Carousel.Item>  
      <Carousel.Item interval={1500}>  
        <img  
          className="d-block w-100"  
src="WhatWeMake/pergols.png"  
          alt="Image Two"  
        />  
        <Carousel.Caption>  
           
         
        </Carousel.Caption>  
      </Carousel.Item>  
      <Carousel.Item interval={1500}>  
        <img  
          className="d-block w-100"  
src="WhatWeMake/railing.png"  
          alt="Image Two"  
        />  
        <Carousel.Caption>  
           
         
        </Carousel.Caption>  
      </Carousel.Item>  
      <Carousel.Item interval={1500}>  
        <img  
          className="d-block w-100"  
src="WhatWeMake/staircase.png"  
          alt="Image Two"  
        />  
        <Carousel.Caption>  
           
         
        </Carousel.Caption>  
      </Carousel.Item>  
      
      <Carousel.Item interval={1500}>  
        <img  
          className="d-block w-100"  
src="WhatWeMake/others.png"  
          alt="Image Two"  
        />  
        <Carousel.Caption>  
           
         
        </Carousel.Caption>  
      </Carousel.Item>  
    </Carousel>   */}
   
  </div>  

  )
}

export default WhatWeMake
