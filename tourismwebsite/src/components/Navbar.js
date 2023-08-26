import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    return(
<nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <a className="navbar-brand text-white" to="/">TAMILNADU TOURISM</a>
          <div className="navbar-nav ml-auto">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

<li class="nav-item">
  <Link class="nav-link text-white" to="/">Home</Link>
</li>

<li className="nav-item " >
  <Link class="nav-link text-white" to="/placetovisit">Place To Visit</Link>
</li> 

<li className="nav-item">
  <Link class="nav-link text-white" to="/besttime">BestTime To Visit</Link>
</li> 
<li className="nav-item">
  <Link class="nav-link text-white" to="/packages">Packages</Link>
</li>

<li className="nav-item">
  <Link class="nav-link text-white" to="/destination">Destination</Link>
</li> 

<li className="nav-item">
  <Link class="nav-link text-white" to="/food">Food</Link>
</li> 

        
</ul>

          </div>
        </div>
      </nav>
      )
      };
      export default Navbar;