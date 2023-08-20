import React from "react";
import abtimg from './images/abtimg.jpg';

function About() {
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
            
              <div class="row pt-5 pb-5 mt-5 mb-5">
                  <div class="col-lg-4 col-md-12 col-12">
                      <div class="about-img "> 
                          <img src={abtimg}  />
                      </div>
                  </div>
                  <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-mb-5">
                      <div class="about-text">
                            <h2>Explore All That <br/> You Could ever Think Off</h2>
                            <p>Founded in the year 2005 as Wise Trip.com, an online travel platform, the company boosted as a private limited in the year 2013 and has emerged as the “Best Upcoming Inbound Tour Operators in TamilNadu”. It has been awarded in the category of “Excellence in the Tourism Industry” by World Tourism Brand Academy.</p>
                    
                      </div>
                  </div>
              </div>
          </div>
      </section>


    </div>
    
    

  );
};

export default About;