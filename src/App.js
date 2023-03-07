import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import Home from './page/Home/Home';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import About from "./page/About/About";
import MyTeam from "./page/MyTeams/MyTeam";
import Career from "./page/Career/Career";
import Contact from "./page/Contact/Contact";
import Gate from "./component/PortfolioComponents/Gate";
import PortfolioSidebar from "./page/Portfolio/PortfolioSidebar";
import ContactPage from "./page/Contact/ContactPage";
import OurClients from "./component/HomePageVideo/OurClients";
import { useEffect } from "react";
import C_Channel from "./component/PortfolioComponents/C_Channel";
import HorizontalScroll from "./component/HomePageVideo/HorizontalScroll";
import { useState } from "react";
import Loader from "./component/Loader/Loader";
import Portfolio from "./page/Portfolio/Portfolio";
import Loader2 from "./component/Loader/Loader2";
import Policy from "./page/Policy/Policy";
function App() {

  const[loading,setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const onPageLoad = () => {
      setTimeout(()=>{
      setLoading(false)
      },3000)
    console.log('page loaded');
    
    // do something else
  };
  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } 
    else {
      window.addEventListener('load', onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);
  return (
    <div >
      {/* {loading?(<Loader2/>):(<> */}
      
      <BrowserRouter>
      <Header/>
          <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="*" element={<Home/>} />
             {/* <Route exact path="/" render={() => {}} /> */}
             <Route path="/about" element={<About/>} />
             <Route path="/myteam" element={<MyTeam/>} />
             <Route path="/career" element={<Career/>} />
             <Route path="/contact" element={<Contact/>} />
             <Route path="/contactpage" element={<ContactPage/>} />
             <Route path="/portfolio" element={<Portfolio/>} />
             <Route path="/policy" element={<Policy/>} />
             {/* <Route path="/portfolio" element={<Navigate to="/portfolio/Gate" />} />
             <Route path="/portfolio/Gate" exact element={<PortfolioSidebar/>} />
             <Route path="/portfolio/Canopy" exact element={<PortfolioSidebar/>} />
             <Route path="/portfolio/C_Channel" exact element={<PortfolioSidebar/>} />
             <Route path="/portfolio/Jaali" exact element={<PortfolioSidebar/>} />
             <Route path="/portfolio/Balcony_Railing" exact element={<PortfolioSidebar/>} />
             <Route path="/portfolio/Cutout_Railing" exact element={<PortfolioSidebar/>} />
             <Route path="/portfolio/Doors" exact element={<PortfolioSidebar/>} />
             <Route path="/portfolio/Lift_Jamb" exact element={<PortfolioSidebar/>} />
             <Route path="/portfolio/Louvers" exact element={<PortfolioSidebar/>} />
             <Route path="/portfolio/Manhole_Covers" exact element={<PortfolioSidebar/>} />
             <Route path="/portfolio/Pergola" exact element={<PortfolioSidebar/>} />
             <Route path="/portfolio/Railing" exact element={<PortfolioSidebar/>} />
             <Route path="/portfolio/Staircase" exact element={<PortfolioSidebar/>} />
             <Route path="/hori" exact element={<HorizontalScroll/>} /> */}

          </Routes>
          <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          // padding: '1rem 2rem',
          // fontSize: '20px',
          bottom: '50px',
          right: '40px',
          border:"none",
          // color: '#fff',
          textAlign: 'center',
          background:"none",
          cursor:"pointer",
          zIndex:"100"
        }}
      >
        <img width="40vw" height="40vh" src="/backtotop.png" />
      </button>
      <Footer/>
      </BrowserRouter>
      {/* </>
       )
       } */}
    </div>
  );
}

export default App;
