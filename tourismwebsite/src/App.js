import React from "react";
import "./App.css"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Placetovisit from "./components/Placetovisit";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>

    <div>

      <Navbar/>
        
          <Routes>
          <Route  path="/" index element={<Home/>}/>
          <Route  path="/placetovisit" element={<Placetovisit/>}/>

          </Routes>
                  
  
      
    </div>
  </Router>
 
 

  );
}

export default App;