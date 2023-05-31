import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './myTeam.css'
const MyTeam = () => {
    useEffect(() => {
        window.scrollTo(0,0)
      }, []);
  return (
    <div className='myTeam'>
    <div className='myTeamhead'>
        <div className='myTeamborder'>
                <div>
                  
                 <p> <sup><img src='/MyTeam/startQuotes.svg'/></sup> Team that work together, achieve together. <sub><sub><img src='/MyTeam/endQuotes.svg' /></sub></sub></p>
                 
                </div>
        </div>
    </div>

    <div>
        <br/>
        <p className='meetTheTeam'>Meet the Team</p>
       
        <div className='boxView'>
                 <Link to="/career" >  <button className='boxButton'>Join Our Team</button></Link>
        </div>
       
    </div>
    
    <div className='row'>
        <div>
        <img src="/MyTeam/1-AnisAhmed.png" alt="" />
        <p>Anis Ahmed</p>
        <p>(Founder)</p>
        </div>

        <div>
        <img src="/MyTeam/2-MohammadAamir.png" alt="" />
        <p>Mohammad Aamir</p>
        <p>(Business Head)</p>
        </div>

        <div>
        <img src="/MyTeam/image60.png" alt="" />
        <p>Mohammad Aadil</p>
        <p>(Business Head)</p>
        </div>

        <div>
        <img src="/MyTeam/4-JawedKhan.png" alt="" />
        <p>Jawed Khan</p>
        <p>(Operation & Management Head)</p>
        </div>
        
    {/* </div>

    <br/>
    
    
    <div className='row'> */}
        <div >
        <img src="/MyTeam/5-AbidAli.png" alt="" />
        <p>Abid Ali</p>
        <p>(Finance Head)</p>
        </div>

        <div>
        <img src="/MyTeam/6-NafeesAhmed.png" alt="" />
        <p>Nafees Ahmed</p>
        <p>(Production Head)</p>
        </div>

        <div>
        <img src="/MyTeam/7-ShamimAkhtar.png" alt="" />
        <p>Shamim Akhtar</p>
        <p>(Lead Computational  Designer)</p>
        </div>

        <div>
        <img src="/MyTeam/8-KaleemAhmed.png" alt="" />
        <p>Kaleem Ahmed</p>
        <p>(Design Visualizer)</p>
        </div>

        <div>
        <img src="/MyTeam/9-MohammadShahbaz.png" alt="" />
        <p>Mohammad Shahbaz</p>
        <p>(Assistant Manager 'Procurement & HR')</p>
        </div>

        <div>
        <img src="/MyTeam/10-AmitKumar.png" alt="" />
        <p>Amit Kumar</p>
        <p>(Assistant Architect)</p>
        </div>

        <div>
        <img src="/MyTeam/11-DigambarNayak.png" alt="" />
        <p>Digambar Nayak</p>
        <p>(Production Supervisor)</p>
        </div>
    </div>
    <br/>
    <div className='boxView'>
    <Link to="/career" >  <button className='boxButton'>Join Our Team</button></Link>
        </div>
        <br/>
        <Link to="/" style={{color:"#000000",textAlign:'center'}}><h3>Back To Home Page</h3></Link>
        <br/>
    </div>
  )
}

export default MyTeam
