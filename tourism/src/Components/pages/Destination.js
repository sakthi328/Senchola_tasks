import React from "react";
import imga from "./images/ooty.jpg";
import imgb from "./images/Madurai.jpg";
import imgc from "./images/Mahabalipuram.jpg";
import imgd from "./images/thanjaur.jpg";
import imge from "./images/kodaikanal.jpg";
import imgf from "./images/Kanyakumari.jpg";
import imgg from "./images/chennai.jpg";
import imgh from "./images/kovai.jpg";

function Destination() {
  return (
    <div class="container mt-5 mb-5 pt-5 pb-5">

              <div class="row">
                <div class=" col-lg-3 col-md-3 col-12 pb-4">
                    <div class=" card w-80 ">
                        <img src={imga} alt="pic" />
                        <h4 class="place-title">Ooty</h4>
                    </div>
                </div>

                <div class=" col-lg-3 col-md-3 col-12 pb-4">
                    <div class=" card  w-80 ">
                        <img src={imgb} alt="pic" />
                        <h4 class="place-title">Madurai</h4>
                    </div>
                </div>

                <div class=" col-lg-3 col-md-3 col-12 pb-4">
                    <div class=" card w-80  ">
                        <img src={imgc} alt="pic"/>
                        <h4 class="place-title">Mahabalipuram</h4>
                    </div>
                </div>

                <div class=" col-lg-3 col-md-3 col-12 pb-4">
                    <div class=" card ">
                        <img src={imgd} alt="pic"/>
                        <h4 class="place-title">Thanjaur</h4>
                    </div>
                </div>

                <div class=" col-lg-3 col-md-3 col-12 pb-4">
                    <div class=" card ">
                        <img src={imge} alt="pic" />
                        <h4 class="place-title">Kodaikanal</h4>
                    </div>
                </div>

                <div class=" col-lg-3 col-md-3 col-12 pb-4">
                    <div class=" card">
                        <img src={imgf} alt="pic" />
                        <h4 class="place-title">Kanyakumari</h4>
                    </div>
                </div>

                <div class=" col-lg-3 col-md-3 col-12 pb-4">
                    <div class=" card P">
                        <img src={imgg} alt="pic" />
                        <h4 class="place-title">Chennai</h4>
                    
                    </div>
                </div>

                <div class=" col-lg-3 col-md-3 col-12 pb-4">
                    <div class=" card ">
                        <img src={imgh} alt="pic" />
                        <h4 class="place-title">Kovai</h4>
                        
                    </div>
                </div>

</div>
  
    </div>
    

  )
};

export default Destination;