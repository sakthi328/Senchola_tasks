import React from "react";
import Navbar from "./Navbar";
const Home=() => {
    return <div className="home-container">
     <Navbar/>
     <div className="home-text-section">
          <h1 className="primary-heading">
            Open a Book, Open your Mind!
          </h1>
          <p className="primary-text">
            Subscribe For More, Enjoy Reading
          </p>
          <button>Subscribe</button>
          
        </div>
    </div>;
};
export default Home;
