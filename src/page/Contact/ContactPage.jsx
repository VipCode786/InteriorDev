import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';
import './ContactPage.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const ContactPage = () => {

  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [Phone, setPhone] = useState();
  const [Email, setEmail] = useState();
  const [Message, setMessage] = useState();
  const [file, setFile] = useState(null);
  const [recaptcha, setRecaptcha] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  function onChange(value) {
   
    console.log('Captcha value:', value);
    setRecaptcha(value);

  }
  const upload = (e) => {
    e.preventDefault();
    if(recaptcha==null)
    {
      setError(true)
    }
    else{
    let formData = new FormData();
    formData.append("uploadedFile", file);
    formData.append("FirstName",FirstName);
    formData.append("LastName",LastName);
    formData.append("Email",Email);
    formData.append("Phone",Phone);
    formData.append("Message",Message);
    // formData.append("name",name);

   
    axios.post("https://roaring-faloodeh-29cc69.netlify.app/.netlify/functions/api/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      console.log("Success ", res);
      alert("Submitted")
    });
    }
  };

  const handleFile = (e) =>{
    if(e.target.files[0].size > 15728640)
    {
      alert("File size should be less than 15mb");
    }

    else{
      setFile(e.target.files[0]);
      console.log(file)
    }
  }

  useEffect(() => {
    console.log(file)
  }, [file])
  

  return (
    <div  s>
    <div className='contactPage'>
            <div className='contactInfo' >
              <h1>
              Contact Information
              </h1>

              <div className='contact-paragraph'>
                Please fill out the form and our team will contact you within 2 business days.
                </div>
                <br/>
                <div className='contactDetails'>
                    <img src="/contactUs/phone.svg" alt="" /> &nbsp; &nbsp; &nbsp; <p>0120-3110478</p>
                </div>

                <div className='contactDetails'>
                <img src="/contactUs/email.svg" alt="" /> &nbsp; &nbsp; &nbsp; <p>info@interiorcraft.in</p>
                </div>
                <div className='contactDetails'>
                <img src="/contactUs/address.svg" alt="" style={{lineHeight :"22px"}} /> &nbsp; &nbsp; &nbsp; <p>A-218, 219, Sector-83, Phase-II, Noida-201305</p>
                </div>
                <div className="contact-in" style={{height:"40vh"}}>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3505.5736955621933!2d77.3936937!3d28.5224711!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9d48b8267cd%3A0xb8ae7c7899c59509!2sInterior%20Craft!5e0!3m2!1sen!2sin!4v1667299088135!5m2!1sen!2sin"
                width="90%"
                height="100%"
                frameBorder={0}
                className="fitmap"
                // style={{ border: 0 , margin:"2rem"}}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex={0}
                
                />
                
            </div>
                <div className='social-media'>
                <img src="/contactUs/insta.svg" alt="" />
                <img src="/contactUs/youtube.svg" alt="" />
                <img src="/contactUs/in.svg" alt="" />
                </div>
            </div>
           
            <div className='contactForm'>
             <form onSubmit={(e)=>upload(e)}>
            
            <div  className='flName'>
            <label>FirstName<br/>
            <input  type="text" 
            required
            onChange={(e) => {
            setFirstName(e.target.value);
            }}
            /></label>
            
             <label>LastName<br/>
            <input  type="text" required
             onChange={(e) => {
              setLastName(e.target.value);
              }}
            /></label>
            </div>

            <div className='flName'>
              <label>Email <br/>
            <input  type="email"  required
             onChange={(e) => {
              setEmail(e.target.value);
              }}
            />
          </label>
          <label>Phone
              <PhoneInput
                disabled={false}
                containerClass={"containerClass"}
                countryCode="in"
                country={'in'}
                value={Phone}
                onChange={setPhone}
                placeholder={"placeholder"}
              />
              </label>
            </div>
            <br/>
           <div>
            <label >Message <br/>
            <input className='messageStyle' 
            style={{
              marginLeft:'2rem',
            //  width:"90%" 
            }} 
             type="text" placeholder='Write Your Message' 
            onChange={(e) => {
              setMessage(e.target.value);
              }}
            /></label>
            
              </div>
            <div>
    <label for="files" class="uploadButton"><img src="Vector.png" /> &nbsp; Upload File
    <input id="files" accept=".jpg,.jpeg,.png,.pdf,.dwg" style={{visibility:"hidden",width:"0px"}} type="file" onChange={(e) => {
              handleFile(e)
          // setFile(e.target.files[0]);
        }}/>
      
    </label>
    <span className="content1"></span>
    <span  className="content1">.dwg, .jpeg, .pdf, .png</span>
    <span style={{marginLeft:"2rem"}} className="content2"> {file?.name} </span>
    
   
</div>
          
           <p>Please upload files upto 15 MB.<br/>
                For larger files, you can discuss when our team contacts you.
            </p> 

{/* <div  className='recaptcha'> */}
            <ReCAPTCHA
        sitekey="6Lckg3cjAAAAAAPGpyDl4BrPM0F_4GvahyHyJWQh"
        onChange={onChange}
        required
        // className='recaptcha'
        style={{margin: "2rem"}}
      />
      {/* </div> */}
           {error ?   <p>Fill ReCaptcha</p>: ""}
          
            <button className="submitButton" type="Submit" disabled={recaptcha? false : true} style={{padding:"0.5rem 1rem 0.5rem 1rem"}}> Submit </button>
</form> 
            </div>
            
    </div>
    <Link to="/" style={{color:"#000000",textAlign:'center'}}><h3>Back To Home Page</h3></Link>

    </div>
  )
}

export default ContactPage