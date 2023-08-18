import React from "react";
const Navbar = () =>{
        return (
            <nav>
              <p className="logo1">Books<span>Cart</span></p>
              <div className="navbar-links-container">
                <a href="">Home</a>
                <a href="">All Books</a>
                <a href="">Collections</a>
                <a href="">Book Reviews</a>  
            </div>  
            </nav>
          );
};
export default Navbar;