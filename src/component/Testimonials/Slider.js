import React, { useState, useEffect } from "react";
import "./Slider.scss";
import data from "../../data";

const Slider = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div>
       
    <section className="section">
      <div className="title">
        <h2 className="testimonialHeader textInAnimation">Client Testimonials</h2>
        <div className="subtestimonialHeader">What do our client says?</div>
      </div>
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              
              {/* <p className="title">{title}</p> */}
              <p className="text">{quote}</p>
              <div style={{display:"flex", flexDirection:"row" , justifyContent:"center" ,alignItems:"center"}}>
              <img src={image} alt={name} className="person-img" />
              &nbsp;&nbsp;&nbsp;&nbsp;<h4 className="nameTestimonial">{name}</h4>
              </div>
             
            </article>
          );
        })}
 
        <div className="prev" onClick={() => setIndex(index - 1)}>
          <img src="/images/LeftArrow.png" style={{marginLeft:"1rem"}}/>
          </div>
        <div className="next" onClick={() => setIndex(index + 1)}>
        <img src="/images/RightArrow.png" />
          </div>
          </div>
        
    </section>
      <div style={{ display:"flex", flexDirection:"row" , justifyContent:"center" ,alignItems:"center"}}>
      <div  className="dot" onClick={()=>setIndex(1)}></div>
      <div  className="dot" onClick={()=>setIndex(2)}></div>
      <div  className="dot" onClick={()=>setIndex(3)}></div>
      <div  className="dot" onClick={()=>setIndex(4)}></div>
     </div>
     <br/>
    
     </div>
  );
};

export default Slider;
