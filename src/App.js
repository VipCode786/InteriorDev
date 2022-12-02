

import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import Home from './page/Home/Home';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import About from "./page/About/About";
import MyTeam from "./page/MyTeams/MyTeam";
import Career from "./page/Career/Career";
import Contact from "./page/Contact/Contact";
import Gate from "./component/PortfolioComponents/Gate/Gate";
import PortfolioSidebar from "./page/Portfolio/PortfolioSidebar";
import ContactPage from "./page/Contact/ContactPage";

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
          <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/about" element={<About/>} />
             <Route path="/myteam" element={<MyTeam/>} />
             <Route path="/career" element={<Career/>} />
             <Route path="/contact" element={<Contact/>} />
             <Route path="/contactpage" element={<ContactPage/>} />

             <Route path="/portfolio" element={<Navigate to="/portfolio/gate" />} />
             <Route path="/portfolio/gate" element={<PortfolioSidebar/>} />
             <Route path="/portfolio/canopy" element={<PortfolioSidebar/>} />
          </Routes>
          
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
