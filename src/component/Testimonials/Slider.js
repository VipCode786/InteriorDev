import React, { useState, useEffect } from "react";
import "./Slider.css";
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
    }, 80000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  let position;
  

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
           position = "nextSlide";
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
              
              {/* <p className="title">{id}</p> */}
              <p className="text">{quote}</p>
              <div style={{display:"flex", flexDirection:"row" , justifyContent:"center" ,alignItems:"center"}}>
              <img src={image} alt={name} className="person-img" />
              &nbsp;&nbsp;&nbsp;&nbsp;<h4 className="nameTestimonial">{name}</h4>
              </div>
              <div style={{ marginLeft:"30px",display:"flex", flexDirection:"row" , justifyContent:"center" ,alignItems:"center"}}>
            <div  className={id == 1 ? "dot dotBG" : "dot"} onClick={() => setIndex(0)} ></div>
            <div  className={id == 2 ? "dot dotBG" : "dot"}  onClick={() => setIndex(1)} ></div>
            <div  className={id == 3 ? "dot dotBG" : "dot"} onClick={() => setIndex(2)}></div>
            <div className={id == 4 ? "dot dotBG" : "dot"} onClick={() => setIndex(3)}></div>
          </div>  
          <br/>
            </article>
          );
        })}
 
        <div className="prev" onClick={() => setIndex(index - 1)}>
          <img src="/images/LeftArrow.png" style={{marginLeft:"1rem"}}/>
          </div>
        <div className="next" style={{marginLeft:"30px",}} onClick={() => setIndex(index + 1)}>
        <img src="/images/RightArrow.png" />
          </div>
          </div>
         
    </section>
 
     <br/>
    
     </div>
  );
};

export default Slider;
