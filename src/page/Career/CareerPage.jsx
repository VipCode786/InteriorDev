import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./careerPage.css"
const CareerPage = () => {
    const [Name, setName] = useState();
    const [Vacancy, setVacancy] = useState();
    const [Email, setEmail] = useState();
    const [Phone, setPhone] = useState();
    const [Message, setMessage] = useState();
    const [File, setFile] = useState();

     console.log("value",File?.name)
    
    const upload = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("File", File);
        formData.append("Vacancy",Vacancy);
        formData.append("Name",Name);
        formData.append("Email",Email);
        formData.append("Phone",Phone);
        formData.append("Message",Message);
      
        axios.post("https://beamerlaw.onrender.com/api/interior/career", formData, {
            
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then((res) => {
         
          alert("Submitted")
        });
      };
  return (
    <div className='careerdiv'>
        <div className="careerbg">
                {/* <img src="/careerPage/bgCareer.png" alt="" /> */}
        </div>
        <div>
        <div className='afterBg'>
            <div className="aboutCareer">
            Join us and become part of our team!
            </div>

            <div className="contentCareer">
                <div>
                    <div className="contentCareerImg">
                    <img src="/careerPage/ep_opportunity.png" alt="" />
                    </div>
                    <div className="contentP">
                    we offer exciting <b>opportunities</b> for career growth and development. We provide our employees with the training and tools they need to succeed in their roles and achieve their career goals.
                    </div>
                </div>

                <div>
                    <div className="contentCareerImg">
                    <img src="/careerPage/fluent_people-team-20-filled.png" alt="" />
                    </div>
                    <div className="contentP">
                    We value <b>teamwork,</b> collaboration, and innovation. Our team members come from diverse backgrounds and bring unique perspectives that help us drive our business forward.
                    </div>
                </div>

                <div>
                    <div className="contentCareerImg">
                    <img src="/careerPage/healthicons_social-work.png" alt="" />
                    </div>
                    <div className="contentP">
                     We strive to create a <b>diverse and inclusive work environment</b> where everyone can thrive and contribute to our success.
                    </div>
                </div>

            </div>
            </div>
        </div>

        <div className="careerFormDiv">
           <div className='heading'>
            Careers at Interior Crafts
            </div>
            <div className="formP">
            If you'd like to join our team, please fill out the short form below. Don't forget to include a copy of your resume.
            </div>

            <div className='careerStart'>
            <div className="careerForm">
            <form onSubmit={(e) => upload(e)}>
                <input type="text" required placeholder='Name'  onChange={(e)=>setName(e.target.value)}/><br/>
                <input type="text" required placeholder='Vacancy Applied For'onChange={(e)=>setVacancy(e.target.value)} /><br/>
                <input type="email" required placeholder='Email Address'  onChange={(e)=>setEmail(e.target.value)}/><br/>
                <input type="text" required placeholder='Phone Number' onChange={(e)=>setPhone(e.target.value)}/><br/>
                <div className='file'>
                <span className="btn btn-file">
                    <i className="fa fa-paperclip"></i> &nbsp;  
                    Attach CV<input type="file" required  onChange={(e) => {
                            setFile(e.target.files[0])}}/> 
                </span><br/>
                    <p style={{marginTop:"20px"}}>{File?.name}</p>
                </div>
                <input type="submit" value="SUBMIT"  /><br/>
            </form>
            </div>
           
            <div className='rightCareer'>
                    <p> Opening</p>
                    <hr/>
                    <div className='downloadJob'>
                        <h1>Architect</h1>
                        
                       <div className='buttons'>
                       <Link to="/Interior_Design_Brochure.pdf" target="_blank" download> <button>
                            Download Job Description
                      
                       
                            <img src="/careerPage/Vector.svg" alt="" />
                        </button></Link>
                        <div style={{ borderStyle:"4px #CB572C"}}>
                        <div className='applyButton'>
                            Apply
                        </div>
                        </div>
                        </div>
                       
                    </div>
                    <hr/>
                    <div className='downloadJob'>
                        <h1>CNC Press Brake Operator</h1>
                        
                       <div className='buttons'>
                       <Link to="/Interior_Design_Brochure.pdf" target="_blank" download>   <button>
                            Download Job Description
                      
                       
                            <img src="/careerPage/Vector.svg" alt="" />
                        </button></Link>
                        <div className='applyButton'>
                            Apply
                        </div>
                        </div>
                       
                    </div>
                    <hr/>
            </div>
            </div>
        </div>


        <div className="careerFormDivTab">
            <div className='tab'>
           <div className='heading'>
            Careers at Interior Crafts
            </div>
            <div className="formP">
            If you'd like to join our team, please fill out the short form below. Don't forget to include a copy of your resume.
            </div>

            <div className="careerForm">
            <form onSubmit={(e) => upload(e)}>
                <input type="text" required placeholder='Name'  onChange={(e)=>setName(e.target.value)}/><br/>
                <input type="text" required placeholder='Vacancy Applied For' onChange={(e)=>setVacancy(e.target.value)}/><br/>
                <input type="email" required placeholder='Email Address' onChange={(e)=>setEmail(e.target.value)}/><br/>
                <input type="text" required placeholder='Phone Number' onChange={(e)=>setPhone(e.target.value)}/><br/>
                <div className='file'>
                <span className="btn btn-file">
                    <i className="fa fa-paperclip"></i> &nbsp;  
                    Attach CV<input type="file" onChange={(e) => {
                            setFile(e.target.files[0])}} />
                </span>
                </div>
                <input type="submit" value="SUBMIT"/><br/>
            </form>
            </div>
           </div>
            <div className='rightCareer'>
                    <p> Opening</p>
                    <hr/>
                    <div className='downloadJob'>
                        <h1>Architect</h1>
                        
                       <div className='buttons'>
                       <Link to="/Interior_Design_Brochure.pdf" target="_blank" download> <button>
                            Download Job Description
                      
                       
                            <img src="/careerPage/Vector.svg" alt="" />
                        </button></Link>
                        <div style={{ borderStyle:"4px #CB572C"}}>
                        <div className='applyButton'>
                            Apply
                        </div>
                        </div>
                        </div>
                       
                    </div>
                    <hr/>
                    <div className='downloadJob'>
                        <h1>CNC Press Brake Operator</h1>
                        
                       <div className='buttons'>
                        <button>
                            Download Job Description
                      
                       
                            <img src="/careerPage/Vector.svg" alt="" />
                        </button>
                        <div className='applyButton'>
                            Apply
                        </div>
                        </div>
                       
                    </div>
                    <hr/>
            </div>
            </div>


        </div>
    
  )
}

export default CareerPage