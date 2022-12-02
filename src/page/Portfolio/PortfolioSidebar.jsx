import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate,useLocation } from 'react-router-dom';
import Canopy from '../../component/PortfolioComponents/Canopy/Canopy';
import Gate from '../../component/PortfolioComponents/Gate/Gate';

import './Portfolio.scss'
const PortfolioSidebar = () => {
  const navigate = useNavigate()
  const [path , setPath] = useState(<Gate/>)

//   useEffect(() => {
   
//   }, [third])
  
      const menuItem=[
        {
            path:"/portfolio/gate",
            name:"Gate",
            com:<Gate/>
        },
        {
            path:"/portfolio/canopy",
            name:"Canopy",
            com:<Canopy/>
       
        },
        // {
        //     path:"/contact",
        //     name:"ContactUS",
           
        // },
        // {
        //     path:"/comment",
        //     name:"Comment",
        //     icon:<FaCommentAlt/>
        // },
        // {
        //     path:"/product",
        //     name:"Product",
        //     icon:<FaShoppingBag/>
        // },
        // {
        //     path:"/Gallary",
        //     name:"Product List",
        //     icon:<FaThList/>
        // }
    ]

  
    
  return (
    <div className='portfolioSidebar'>
    <div className="container">
    <div className="sidebar">
        {
            
            menuItem.map((item, index)=>(
                <NavLink  
                 to={item.path} key={index}
                   className="link" 
                //    end 
                    activeclassname="active"

                >
                    <div                    
                    onClick={()=>setPath(item.com)} 
                     className="link_text"
                    >{item.name}</div>
                </NavLink>
            ))
        }
    </div>
   
 </div>
<div className='main'>
<main>{path}</main>
</div>


          
</div>

  )
}

export default PortfolioSidebar