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
        <img src="/MyTeam/image53.png" alt="" />
        <p>Aadil Saifi</p>
        <p>(Designation)</p>
        </div>

        <div>
        <img src="/MyTeam/image54.png" alt="" />
        <p>Aadil Saifi</p>
        <p>(Designation)</p>
        </div>

        <div>
        <img src="/MyTeam/image55.png" alt="" />
        <p>Aadil Saifi</p>
        <p>(Designation)</p>
        </div>

        <div>
        <img src="/MyTeam/image56.png" alt="" />
        <p>Aadil Saifi</p>
        <p>(Designation)</p>
        </div>
        
    {/* </div>

    <br/>
    
    
    <div className='row'> */}
        <div >
        <img src="/MyTeam/image57.png" alt="" />
        <p>Aadil Saifi</p>
        <p>(Designation)</p>
        </div>

        <div>
        <img src="/MyTeam/image58.png" alt="" />
        <p>Aadil Saifi</p>
        <p>(Designation)</p>
        </div>

        <div>
        <img src="/MyTeam/image59.png" alt="" />
        <p>Aadil Saifi</p>
        <p>(Designation)</p>
        </div>

        <div>
        <img src="/MyTeam/image60.png" alt="" />
        <p>Aadil Saifi</p>
        <p>(Designation)</p>
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