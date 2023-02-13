import axios from 'axios';
import React, { useState } from 'react'
import { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';
import './Career.css'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useEffect } from 'react';

const Career = () => {


    const [Name, setName] = useState();
    const [Vacancy, setVacancy] = useState();
    const [Email, setEmail] = useState();
    const [Phone, setPhone] = useState();
    const [Message, setMessage] = useState();
    const [File, setFile] = useState();
    const [recaptcha, setRecaptcha] = useState(null);

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
    
    const elements = document.querySelectorAll('.textInAnimation');
    elements.forEach(el => {
      observer.observe(el, options);
    });
    

    const scroll = useRef(null);

    const scrollClick = () => {
      scroll.current?.scrollIntoView({behavior: 'smooth'});
    };

    function onChange(value) {
   
      console.log('Captcha value:', value);
      setRecaptcha(value);
  
    }
    const upload = (e) => {
        e.preventDefault();
        // if(recaptcha==null){
        //     console.log("fill recapchta")
        // }
        // else{
        let formData = new FormData();
        formData.append("File", File);
        formData.append("Vacancy",Vacancy);
        formData.append("Name",Name);
        formData.append("Email",Email);
        formData.append("Phone",Phone);
        formData.append("Message",Message);
    
        axios.post("https://roaring-faloodeh-29cc69.netlify.app/.netlify/functions/api/career", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then((res) => {
          console.log("Success ", res);
          alert("Submitted")
        });
      // }
      };

    const hiddenFileInput = useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
      };

    
  return (
    <div className='career'>
        <div className='rowCareerfirst'>
            <p >
                    Career at <br/>Interior Crafts
            </p>
           {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}

            <p>
            As an ambitious business, Interior Craft seeks to hire talented and dedicated people who share our enthusiasm for high-quality work and excellent customer service. We take pride in our employee retention rate and in providing a friendly and excellent work atmosphere.
            </p>
        </div>
        <div className='rowCareer'>
        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                <div className='grey-bg'>
                    <div className='heading'>
                    CNC Press Brake <br/> Operator
                    </div>
            
                    <div className='rowCareerButtonfix'>
                    <div className='boxViewCareer' style={{width:"20rem"}}>
                    <Link to="/Interior_Design_Brochure.pdf" target="_blank" download> <div className='boxButtonCareer' style={{padding:"1rem"}}>
                    Job Description (Download)
                    </div></Link>
                    </div>&nbsp;&nbsp;
                    <div className='boxViewCareer' onClick={scrollClick}>
                      <div className='boxButtonCareer'style={{padding:"1rem 2rem 1rem 2rem"}}>
                    Apply
                    </div>
                    
                    </div>
                    </div>
                   
                </div>

                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}

                <div className='orange-bg'>
                    <div className='heading '>
                    Architect
                    </div>
                    
                    <br/>
                    <br/>
                    <br/>
                    
                    
                   
                    <div className='rowCareerButtonfix'>
                    <div className='boxViewCareer'>
                    <Link to="/Interior_Design_Brochure.pdf" target="_blank" download> <div className='boxButtonCareer' style={{padding:"1rem"}}>
                    Job Description (Download)
                    </div></Link>
                    </div>
                    &nbsp;&nbsp;
                    <div className='boxViewCareer' onClick={scrollClick}>
                      <div className='boxButtonCareer'style={{padding:"1rem 2rem 1rem 2rem"}}>
                    Apply
                    </div>
                    
                    </div>
                    </div>
                    
                    {/* <br/>
                    <br/>
                    <br/>
                    <br/> */}
                </div>
        </div>

        <div className='FromBG' ref={scroll}>
        <div className='careerForm'>
            
            <p >Careers at Interior Crafts</p>
            <br/>
            <p>If you'd like to join our team, please fill out <br/>
            the short form below. Don't forget to include<br/> a copy of your resume.</p>
            
           <form onSubmit={(e) => upload(e)}>
            <div className='row-wrapForm'>
                <div className='cloumnForm marginq' >
                        <input className="formInput" type="text" required placeholder='Name'                  onChange={(e)=>setName(e.target.value)}   />
                        <input className="formInput" type="text" required placeholder='Vacancy Applied For'   onChange={(e)=>setVacancy(e.target.value)}/>
                        <input className="formInput" type="email" required placeholder='Email Address'         onChange={(e)=>setEmail(e.target.value)}  />
                        {/* <input className="formInput" type="number"   placeholder='Phone Number'          onChange={(e)=>setPhone(e.target.value)}  /> */}
                        
                        <PhoneInput
  disabled={false}
  containerClass={"containerClass"}
  countryCode="in"
  country={'in'}
  value={Phone}
                      onChange={setPhone}
  placeholder={"placeholder"}
/>
                        {/* <PhoneInput
          country={'us'}
          value={Phone}
          onChange={(e)=>setPhone(e.target.value)}
        /> */}
                        {/*<PhoneInput
                        
                      defaultCountry="IN"
                      value={Phone}
                      onChange={setPhone}/> */}
                </div>
                <div className='career-column'>
                        <textarea placeholder='Your Message' type="text" className='message' onChange={(e)=>setMessage(e.target.value)}/>
                        <div className='career-row' >  
                        <ReCAPTCHA
        sitekey="6Lckg3cjAAAAAAPGpyDl4BrPM0F_4GvahyHyJWQh"
        onChange={onChange}
        required
         style={{marginTop:"-0.5rem"}}
         className="captchaa"
      />
      
                       
                      
                        <div className='careerFIx'>

                        <div className='marginButton'>
                       
                        <div style={{display:"block",width:"120px", height:"40px",marginTop:"-0.1rem" ,textAlign:"center" }} className="attach" onClick={handleClick}> Attach </div>
                        <div className='careerFIx2'>
                        <div className='c2'>Max file size of 8mb</div><br/>
                        <div className='c2'> {File?.name} </div>
                        </div>
                        <input type='file' id="getFile"  accept=".docs , .pdf" style={{display:"none"}} ref={hiddenFileInput}   onChange={(e) => {
                            setFile(e.target.files[0]);
                            }} />&nbsp;&nbsp;
                            
                        <button type="submit" style={{display:"block",width:"120px", height:"45px" }} className="attach"> Submit </button>
                        </div>
                        {/* <input type="file" className='attach'  />
                        <button>Attach</button>
                        &nbsp;&nbsp;
                        <button className='attach'>Submit</button> */}
                          <div className='careerFIx'>
                        <span >Max file size of 8mb</span>
                        <span > {File?.name} </span>
                        </div>
                </div>
                        
            </div>
             
                </div>
            </div>
            <br/>
            <br/>
            </form>

            </div>
          
        </div>
        <br/>
        <Link to="/" style={{color:"#000000",textAlign:'center'}}><h3>Back To Home Page</h3></Link>
    </div>
  )
}

export default Career