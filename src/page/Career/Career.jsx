import React from 'react'
import './Career.scss'
const Career = () => {
  return (
    <div className='career'>
        <div className='rowCareer'>
            <p>
                    Career at Interior Crafts
            </p>
            <p>
            As an ambitious business, Interior Craft seeks to hire talented and dedicated people who share our enthusiasm for high-quality work and excellent customer service. We take pride in our employee retention rate and in providing a friendly and excellent work atmosphere.
            </p>
        </div>
        <div className='rowCareer'>
                <div className='grey-bg'>
                    <div className='heading'>
                    CNC Press Brake Operator
                    </div>
                    
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
                <div className='orange-bg'>
                    <div className='heading'>
                    Architect
                    </div>
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

        <div className='careerForm'>
            
            <p>Careers at Interior Crafts</p>
            <br/>
            <p>If you'd like to join our team, please fill out the short form below. Don't forget to include a copy of your resume.</p>
            <div className='row-wrap'>
                <div className='cloumn'>
                        <input className="formInput" placeholder='Name'/>
                        <input className="formInput" placeholder='Vacancy Applied For'/>
                        <input className="formInput" placeholder='Email Address'/>
                        <input className="formInput" placeholder='Phone Number'/>
                </div>
                <div className='career-column'>
                        <textarea placeholder='Your Message'/>
                        
                </div>
            </div>
            <div className='career-row'>
                        <div>
                        <span>Max file size of 8mb, for larger enquiries please contact the team</span>
                        </div>
                        <div>
                        <button>Attach</button>
                        </div>
                        <div>
                        <button>Submit</button>
                        </div>
            </div>
        </div>
    </div>
  )
}

export default Career