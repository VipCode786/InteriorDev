import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Accordion from './Accordin'
import { accordionData } from './content'
import './policy.css'
const Policy = () => {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const [isActive6, setIsActive6] = useState(false);
    const [isActive7, setIsActive7] = useState(false);
    const [isActive8, setIsActive8] = useState(false);
    const [isActive9, setIsActive9] = useState(false);
    const [isActive10, setIsActive10] = useState(false);
    const [isActive11, setIsActive11] = useState(false);
    const [isActive12, setIsActive12] = useState(false);
  return (
    <div>
      <h1 className='privacy'>PRIVACY POLICY</h1>
      {/* 11 */}
      <div className="accordion">
        <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive11(!isActive11)}>
        <div>EFFECTIVE DATE: NOVEMBER 21, 2020</div>
        <div className='circle'>{isActive11 ? '-' : '+'}</div>
      </div>
      {isActive11 && <div className="collectedData">
        <div className='content'>
                <div>Interior Crafts (“us”, “we”, or “our”) operates the https://www.interiorcrafts.com/ website (the “Service”).<br/><br/>

This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</div>
                 </div>

                 <div className='content'>
                <div>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from https://www.interiorcrafts.com/
            </div>
                 
                 
                 </div>
        </div>
        
        }
    </div>
    <hr/>
      </div>

      {/* 12 */}
      <div className="accordion">
        <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive12(!isActive12)}>
        <div>INFORMATION COLLECTION AND USE</div>
        <div className='circle'>{isActive12 ? '-' : '+'}</div>
      </div>
      {isActive12 && <div className="collectedData">
        <div className='content'>
                <div>We collect several different types of information for various purposes to provide and improve our Service to you.</div>
                 </div>

                
        </div>
        
        }
    </div>
    <hr/>
      </div>
      {/*1  */}
      <div className="accordion">
        <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive1(!isActive1)}>
        <div>TYPES OF DATA COLLECTED</div>
        <div className='circle'>{isActive1 ? '-' : '+'}</div>
      </div>
      {isActive1 && <div className="collectedData">
        <div>
            <div className='subtitle'>Personal Data</div>
            <div className='content'>
            While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Data”). Personally identifiable information may include, but is not limited to:<br/>
             <ul>
                <li>
                Email address
                </li>
                <li>
                First name and last name 
                </li>
                <li>
                Phone number Address, State, Province, ZIP/Postal code, City
                </li>
                <li>
                Cookies and Usage Data
                </li>
                
             </ul></div>
            <div className='subtitle'>Usage Data</div>
            <div className='content'> 
            
              We may also collect information how the Service is accessed and used (“Usage Data”). This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</div>
        </div>

        <div >
            <div className='subtitle'>Tracking and cookies</div>
            <div className='content'>
            We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service. Examples of Cookies we use: 
            <ul>
                <li> 
                    Session Cookies. We use Session Cookies to operate our Service. 
                </li>
            <li>
            Preference Cookies. We use Preference Cookies to remember your preferences and various settings. 
            </li>
            <li>
            Security Cookies. We use Security Cookies for security purposes.
            </li>
            
            </ul></div>
        </div>
        </div>}
    </div>
    <hr/>
      </div>

{/* 2 */}
      <div className="accordion">
        <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive2(!isActive2)}>
        <div>USE OF DATA</div>
        <div className='circle'>{isActive2 ? '-' : '+'}</div>
      </div>
      {isActive2 && <div className="collectedData">
        <div className='content' >
        <div style={{marginLeft:"0%"}}>Interior Crafts uses the collected data for various purposes:</div>
        <ul>
        <li>
        To provide and maintain the Service 
        </li>
        <li>
        To notify you about changes to our Service To allow you to participate in interactive features of our Service when you choose to do so.
        </li>
        <li>
        To provide customer care and support  
        </li>
            <li>
            To provide analysis or valuable information so that we can improve the Service
            </li>
            <li>
            To monitor the usage of the Service
            </li>
            <li>
            To detect, prevent and address technical issues 
            </li>
           
        </ul>     
            </div>
        </div>}
    </div>
    <hr/>
      </div>


{/* 3 */}
      <div className="accordion">
        <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive3(!isActive3)}>
        <div>TRANSFER OF DATA</div>
        <div className='circle'>{isActive3 ? '-' : '+'}</div>
      </div>
      {isActive3 && <div className="collectedData">
        <div className='content'>
                <div>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.</div>
                 </div>

                 <div className='content'>
                <div>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
Proto Homes will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
            </div>
                 
                 
                 </div>
        </div>
        
        }
    </div>
    <hr/>
      </div>
{/* 4 */}

      <div className="accordion">
        <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive4(!isActive4)}>
        <div>DISCLOSURE OF DATA</div>
        <div className='circle'>{isActive4 ? '-' : '+'}</div>
      </div>
      {isActive4 && <div className="collectedData">
        <div>
            <div className='subtitle'>Legal REQUIREMENTS</div>
            <div className='content'>
            Interior Crafts may disclose your Personal Data in the good faith belief that such action is necessary to:               
            <ul>
                <li>
                To comply with a legal obligation
                </li>
                <li>
                To protect and defend the rights or property of Interior Craft
                </li>
                <li>
                To prevent or investigate possible wrongdoing in connection with the Service
                </li>
                <li>
                To protect the personal safety of users of the Service or the public
                </li>
                <li>
                To protect against legal liability
                </li>
                
             </ul></div>
            
             </div>

      
        </div>}
    </div>
    <hr/>
      </div>

{/* 5 */}
      <div className="accordion">
        <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive5(!isActive5)}>
        <div>SECURITY OF DATA</div>
        <div className='circle'>{isActive5 ? '-' : '+'}</div>
      </div>
      {isActive5 && <div className="collectedData">
        <div className='content' >
        The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </div>
        </div>}
    </div>
    <hr/>
      </div>

      {/* 6 */}
      <div className="accordion">
        <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive6(!isActive6)}>
        <div>SERVICE</div>
        <div className='circle'>{isActive6 ? '-' : '+'}</div>
      </div>
      {isActive6 && <div className="collectedData">
        <div className='content'>
                <div>
                    <br/><br/>We may employ third party companies and individuals to facilitate our Service (“Service Providers”), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.               </div>
                 </div>

                <div>
                <div className='subtitle'>Analytics</div>
                 <div className='content'>
                <div>We may use third-party Service Providers to monitor and analyze the use of our Service. Google Analytics <br/> Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: https://policies.google.com/privacy?hl=en  </div>
                 
                 
                 </div>
                 </div>
        </div>
        
        }
    </div>
    <hr/>
      </div>


      {/* 7 */}
      <div className="accordion">
        <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive7(!isActive7)}>
        <div>LINK TO OTHER WEBSITES</div>
        <div className='circle'>{isActive7 ? '-' : '+'}</div>
      </div>
      {isActive7 && <div className="collectedData">
        <div className='content' >
        Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit. 
        <br/>
        <br/>
        We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.            </div>
        </div>}
    </div>
    <hr/>
      </div>

      {/* 8 */}
      <div className="accordion">
        <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive8(!isActive8)}>
        <div>CHILDREN’S PRIVACY</div>
        <div className='circle'>{isActive8 ? '-' : '+'}</div>
      </div>
      {isActive8 && <div className="collectedData">
        <div className='content' >
        Our Service does not address anyone under the age of 18 (“Children”).<br/><br/>
        We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.    </div>
        </div>}
    </div>
    <hr/>
      </div>

      {/* 9 */}
      <div className="accordion">
        <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive9(!isActive9)}>
        <div>CHANGES TO THIS PRIVACY POLICY</div>
        <div className='circle'>{isActive9 ? '-' : '+'}</div>
      </div>
      {isActive9 && <div className="collectedData">
        <div className='content' >
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.<br/><br/>
We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the “effective date” at the top of this Privacy Policy.<br/><br/>
You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
         </div>
        </div>}
    </div>
    <hr/>
      </div>
{/* 10 */}
      <div className="accordion">
        <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive10(!isActive10)}>
        <div>CONTACT US</div>
        <div className='circle'>{isActive10 ? '-' : '+'}</div>
      </div>
      {isActive10 && <div className="collectedData">
        <div className='content' >
        If you have any questions about this Privacy Policy, please contact us:
        <ul>
            <li >
            By email: <a href="mailto:info@interiorcraft.in" style={{color:"blue"}}>INFO@INTERIORCRAFT.IN</a>

            </li>
            <li>
            By phone number: 0120 3110478  
            </li>
        </ul>
  </div>
        </div>}
    </div>
      </div>

    <br/> <br/> <br/> <br/> <br/>
      <Link to="/" style={{color:"#000000",textAlign:'center'}}><h3>Back To Home Page</h3></Link>
    </div>
  )
}

export default Policy