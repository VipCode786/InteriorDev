import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate,useLocation } from 'react-router-dom';
import Canopy from '../../component/PortfolioComponents/Canopy';
import C_Channel from '../../component/PortfolioComponents/C_Channel';
import Gate from '../../component/PortfolioComponents/Gate';
import Balcony_Railing from '../../component/PortfolioComponents/Balcony_Railing';
import Cutout_Railing from '../../component/PortfolioComponents/Cutout_Railing';
import Doors from '../../component/PortfolioComponents/Doors';
import Lift_Jamb from '../../component/PortfolioComponents/Lift_Jamb';
import Louvers from '../../component/PortfolioComponents/Louvers';
import Manhole_Covers from '../../component/PortfolioComponents/Manhole_Covers';
import Pergola from '../../component/PortfolioComponents/Pergola';
import Railing from '../../component/PortfolioComponents/Railing';
import Staircase from '../../component/PortfolioComponents/Staircase';
import Jaali from '../../component/PortfolioComponents/Jaali';


import './Portfolio.scss'
const PortfolioSidebar = () => {
  const navigate = useNavigate()
  const [path , setPath] = useState(<Gate/>)

  useEffect(() => {
   console.log("Path",path)
  }, [path])

  useEffect(()=>{
    navigate('/portfolio/gate')
  },[])
  // useEffect(()=>{
  //   const pathname = window.location.pathname
  //    const setwert = pathname.split("/").pop();
  //    const ert =`<${setwert}/>`
  //   //  const one = StringToReact(ert,transform)
  //   console.log("pathname",ert)
  //   setPath(ert)
  // },[])
  
      const menuItem=[
        {
            path:"/portfolio/Gate",
            name:"Gate",
            com:<Gate/>
        },
        {
          path:"/portfolio/Balcony_Railing",
          name:"Balcony Railing",
          com:<Balcony_Railing/>
        },
        {
            path:"/portfolio/C_Channel",
            name:"Channel",
            com:<C_Channel/>
       
        },
        {
          path:"/portfolio/Jaali",
          name:"Jaali",
          com:<Jaali/>
     
        },
        {
          path:"/portfolio/Canopy",
          name:"Canopy",
          com:<Canopy/>
        },
        {
            path:"/portfolio/Cutout_Railing",
            name:"Cutout Railing",
            com:<Cutout_Railing/>
       
        },
        {
          path:"/portfolio/Doors",
          name:"Doors",
          com:<Doors/>
     
        },
        {
            path:"/portfolio/Lift_Jamb",
            name:"Lift Jamb",
            com:<Lift_Jamb/>
       
        },
        {
          path:"/portfolio/Louvers",
          name:"Louvers",
          com:<Louvers/>
     
        },
        {
          path:"/portfolio/Manhole_Covers",
          name:"Manhole Covers",
          com:<Manhole_Covers/>
        },
        {
            path:"/portfolio/Pergola",
            name:"Pergola",
            com:<Pergola/>
       
        },
        {
          path:"/portfolio/Railing",
          name:"Railing",
          com:<Railing/>
     
        },
        {
          path:"/portfolio/Staircase",
          name:"Staircase",
          com:<Staircase/>
     
        }
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
{/* <main> */}
  {path}
  {/* </main> */}
</div>


          
</div>

  )
}

export default PortfolioSidebar