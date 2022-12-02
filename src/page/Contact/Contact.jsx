import React from 'react'
import './contact.scss'
const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-info'>
       <div className='contact-heading'>
        Contact Information
      </div>
      <div className='contact-paragraph'>
      Please fill out the form and our team will contact you within 2 business days.
      </div>
      <div className='contactDetails'>
        <img src="/contactUs/phone.svg" alt="" /> <p>0120-3110478</p>
      </div>

      <div className='contactDetails'>
      <img src="/contactUs/email.svg" alt="" /> <p>info@interiorcraft.in</p>
      </div>
      <div className='contactDetails'>
      <img src="/contactUs/address.svg" alt="" /> <p>A-218, 219, Sector-83, Phase-II, Noida-201305</p>
      </div>

      
    <div className="contact-in">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3505.5736955621933!2d77.3936937!3d28.5224711!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9d48b8267cd%3A0xb8ae7c7899c59509!2sInterior%20Craft!5e0!3m2!1sen!2sin!4v1667299088135!5m2!1sen!2sin"
                width="60%"
                height="100%"
                frameBorder={0}
                style={{ border: 0 , margin:"2rem"}}
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

      <div className='form'>
        <input  type="text" placeholder='Name' />
        <input type="text" placeholder='Email' />
        <input type="text"  placeholder='Mesage' />
        <input type="file" placeholder='Name' />
        <button>Submit</button>
      </div>
        
    </div>
  )
}

export default Contact