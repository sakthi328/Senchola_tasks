import React from "react";
import simg1 from "./images/simg1.jpg";
import simg2 from "./images/simg2.jpg";

function Services() {
  return (
    <div>
    <section id="about" class="about section-padding">
          <div class="container ">
            <div class="row">
              <div class="col-md-12">
                  <div class="section-header text-center pb-5">
                      
                  </div>
              </div>
          </div>
            
              <div class="row pt-3 pb-5 mt-5 mb-5">
                  <div class="col-lg-4 col-md-12 col-12">
                      <div class="about-img "> 
                          <img src={simg1} alt="aboutimg" class=" w-100"/>
                      </div>
                  </div>
                  <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-mb-5">
                      <div class="about-text">
                            <h3>Transportation Services</h3>
                            <p>With a vast experience in the field of tourist and transport service, we have secured a prominent place among our customers and other service providers. We come with all options at one place from attractive tour packages to transport facility like car rentals, Bus rentals, Luxury van and tempo traveler . We provide all the latest trending brands of car that suits your travel dream. All cars are equipped with all essential modern facilities and give you every comfort to make your journey memorable forever.</p>
                    
                      </div>
                  </div>
              </div>

              <div class="row pt-1 pb-5 mt-5 mb-5">
                  
                  <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-mb-5">
                      <div class="about-text">
                            <h2>Hotels And Resorts</h2>
                            <p> While on a getaway, clean surroundings add to the experience. Great resorts offer daily housekeeping as an amenity for guests. Accommodations which are kept clean, attractive and comfortable allow you to relax and enjoy your stay.</p>
                    
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-12 col-12">
                      <div class="about-img "> 
                          <img src={simg2} alt="aboutimg" class=" w-100"/>
                      </div>
                  </div>
              </div>
          </div>
      </section>


    </div>
    

  );
};

export default Services;