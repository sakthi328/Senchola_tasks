import React from "react";
import Navbar from "./Components/inc/Navbar"
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Services from "./Components/pages/Services";
import Destination from "./Components/pages/Destination";
import Contact from "./Components/pages/Contact";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>

      <div>

        <Navbar/>
          
            <Routes>
            <Route  path="/" index element={<Home/>}/>
            <Route  path="/about" element={<About/>}/>
            <Route  path="/services" element={<Services/>}/>
            <Route  path="/destination" element={<Destination/>}/>
            <Route  path="/contact" element={<Contact/>}/>
            </Routes>
                    
    
        
      </div>
    </Router>
    
  );
}

export default App;
