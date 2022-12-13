import axios from 'axios';
import React, { useState } from 'react'
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Career.scss'
const Career = () => {


    const [Name, setName] = useState();
    const [Vacancy, setVacancy] = useState();
    const [Email, setEmail] = useState();
    const [Phone, setPhone] = useState();
    const [Message, setMessage] = useState();
    const [File, setFile] = useState();
    

    const upload = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("File", File);
        formData.append("Vacancy",Vacancy);
        formData.append("Name",Name);
        formData.append("Email",Email);
        formData.append("Phone",Phone);
        formData.append("Message",Message);
    
        axios.post("https://funny-caramel-8a4b98.netlify.app/.netlify/functions/api/career1", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then((res) => {
          console.log("Success ", res);
          alert("Submitted")
        });
      };

    const hiddenFileInput = useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
      };

    
  return (
    <div className='career'>
        <div className='rowCareer'>
            <p>
                    Career at Interior Crafts
            </p>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <p>
            As an ambitious business, Interior Craft seeks to hire talented and dedicated people who share our enthusiasm for high-quality work and excellent customer service. We take pride in our employee retention rate and in providing a friendly and excellent work atmosphere.
            </p>
        </div>
        <div className='rowCareer'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='grey-bg'>
                    <div className='heading'>
                    CNC Press Brake <br/> Operator
                    </div>
                    <br/>
                    
                    <div className='boxView'>
                    <div className='boxButton'>
                    Job Description (Download)
                    </div>
                    </div>
                    <div className='boxView'>
                    <div className='boxButton'>
                    Apply
                    </div>
                    
                    </div>
                    
                </div>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <div className='orange-bg'>
                    <div className='heading'>
                    Architect
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className='boxView'>
                    <div className='boxButton'>
                    Job Description (Download)
                    </div>
                    </div>
                    <div className='boxView'>
                    <div className='boxButton'>
                    Apply
                    </div>
                    
                    </div>
                </div>
        </div>

        <div className='FromBG'>
        <div className='careerForm'>
            
            <p>Careers at Interior Crafts</p>
            <br/>
            <p>If you'd like to join our team, please fill out the short form below. Don't forget to include a copy of your resume.</p>
           <form onSubmit={(e) => upload(e)}>
            <div className='row-wrap'>
                <div className='cloumn'>
                        <input className="formInput" type="text" required placeholder='Name'                  onChange={(e)=>setName(e.target.value)}   />
                        <input className="formInput" type="text" required placeholder='Vacancy Applied For'   onChange={(e)=>setVacancy(e.target.value)}/>
                        <input className="formInput" type="text" required placeholder='Email Address'         onChange={(e)=>setEmail(e.target.value)}  />
                        <input className="formInput" type="text"   placeholder='Phone Number'          onChange={(e)=>setPhone(e.target.value)}  />
                </div>
                <div className='career-column'>
                        <textarea placeholder='Your Message' type="text"  onChange={(e)=>setMessage(e.target.value)}/>
                        <div className='career-row'>
                        <div>
                        <span>Max file size of 8mb, for larger enquiries please contact the team</span>
                        </div>
                        <div>

                        <button style={{display:"block",width:"120px", height:"50px" }} className="attach" onClick={handleClick}> Attach </button>
                        <input type='file' id="getFile" style={{display:"none"}} ref={hiddenFileInput}   onChange={(e) => {
                            setFile(e.target.files[0]);
                            }} />&nbsp;&nbsp;
                        <button type="submit" style={{display:"block",width:"120px", height:"50px" }} className="attach"> Submit </button>
                       
                        {/* <input type="file" className='attach'  />
                        <button>Attach</button>
                        &nbsp;&nbsp;
                        <button className='attach'>Submit</button> */}
                </div>
                        
            </div>
             <span style={{marginLeft:"2rem"}}> {File?.name} </span>
                </div>
            </div>
            </form>

            </div>
          
        </div>
        <Link to="/" style={{color:"#000000",textAlign:'center'}}><h3>Back To Home Page</h3></Link>
    </div>
  )
}

export default Career