import React from "react";
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from "./images/img4.jpg";
import "./home.css";

function Home() {
  return (
    <section id="home" class=" section-padding">

    <div class="container-fluid">
         <div id="demo" class=" carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class=" img-fluid d-block w-100 h-100 " alt="picture"/>
            <div class="carousel-caption">
                <h5>Your Best Travel Guide</h5>
                <p>Explore TamilNadu</p>
                                
              </div>
            
          </div>
          <div class="carousel-item">
            <img src={img2} class="img-fluid d-block w-100" alt="picture"/>
            <div class="carousel-caption">
            <h5>Explore Every Beautiful Destinations of Tamil Nadu</h5>
                <p>Pay of less, Travel more</p>
            </div>
                                
            
          </div>
          <div class="carousel-item">
            <img src={img3} class="img-fluid d-block w-100 h-10" alt="picture"/>
            <div class="carousel-caption">
            <h5>Journey Makes the People Happy</h5>
            
            </div>
            
          </div>

          <div class="carousel-item">
            <img src={img4} class="img-fluid d-block w-100 h-10" alt="picture"/>
            <div class="carousel-caption mt-5">
            <h5>New Trip, New Sky!!</h5>
            
            </div>
            
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </div>
    </section>
   

  );
}

export default Home;