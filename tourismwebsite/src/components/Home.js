import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Slider from "./slide";
import Place from "./Place";
import Chennai from "./Chennai";
import Rameshwaram from "./Rameshwaram";
import Kodaikanal from "./Kodaikanal";
import Ooty from "./Ooty";
import Kaniyakumari from "./Kanyakumari";
import Kumbakonam from "./Kumbakonam";
import Madurai from "./Madurai";
import Yarcaud from "./Yarcaud";
import Theni from "./Theni";
import Hogenakkal from "./Hogenakkal";


function Home() {
  return (
  <div>

  <Slider/>
  <Place/>
  <Chennai/>
  <Rameshwaram/>
      <Kodaikanal/>
      <Ooty/>
      <Kaniyakumari/>
      <Kumbakonam/>
      <Madurai/>
      <Yarcaud/>
      <Theni/>
      <Hogenakkal/>

     
  </div>    

  )
}

export default Home;