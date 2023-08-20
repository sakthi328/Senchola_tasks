import React from "react";
import {Link} from "react-router-dom";
import limg from "./img/trip.png";

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
      
          <Link class="navbar-brand" to="#"><img style={{height:"40px",width:"70px"}} src={limg}/> <span class="text-muted"/>Wise Trips </Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

              <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link class="nav-link" to="/about">About</Link>
              </li> 

              <li className="nav-item">
                <Link class="nav-link" to="/services">Services</Link>
              </li> 

              <li className="nav-item">
                <Link class="nav-link" to="/destination">Destinations</Link>
              </li> 

              <li className="nav-item">
                <Link class="nav-link" to="/contact">Contact</Link>
              </li> 

                      
            </ul>
          </div>
        </div>
      </nav>

    )
};
export default Navbar;