import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import KodaikanalImg from "./img/Kodaikanal.jpeg";
import Kodai1 from "./img/kodaikanal1....jpeg";
import Kodai2 from "./img/kodaikanal2.jpeg";
import Kodai3 from "./img/kodaikanal3..jpeg";
import Kodai4 from "./img/kodaikanal4.jpeg";

function Kodaikanal() {
  return (
    <Container className="mt-5" id="kodaikanal">
      <Row className="row-cols-1 row-cols-md-2">
        <Col>
          <h3>03.Kodaikanal</h3>
          <img src={KodaikanalImg} className="ch_img" alt="" />
        </Col>

        <Col className="mt-5">
          <h6 className="fw-bolder">"The Princess of the hill station"</h6>
          <div className="text-container text-container1">
            <p className="text-indent text-secondary">
              Kodaikanal Tourism Located in the state of Tamil Nadu, Kodaikanal
              is one of the most famous honeymoon destinations in India. A
              Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful
              climate, mist-covered manicured cliffs and waterfall that come
              together to create the ideal setting for a perfect getaway.
              Kodaikanal means 'the gift of the forests.
            </p>
            <p className="text-indent text-secondary">
              Nestled amidst the rolling slopes of the Palani Hills, Kodaikanal
              stands at an altitude of 7200 feet above sea level, and once you
              visit this hill station, you will find that every bit of what you
              have imagined it to be is real. Kodaikanal is a place you can go
              to take a break from the rigours of daily city life, and this hill
              station lets you sit back and connect with nature as you head out
              on biking or trekking trails or take a stroll through the vast
              forests surrounding the town.
            </p>
          </div>
        </Col>
      </Row>

      <section className="mt-5">
        <h3 className="text-center mb-5">Must Visit Places In Kodaikanal</h3>

        <Row className="row-cols-1 row-cols-md-4">
          <Col>
            <Card >
              <Card.Img variant="top" src={Kodai1} />
              <Card.Body>
                <Card.Title>Green Valley View</Card.Title>
                <Card.Text style={{width:"12rem"}}>
                  Formerly known as Suicide point, the Green Valley View offers
                  a breathtaking view of the plains, deep...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card >
              <Card.Img variant="top" src={Kodai2} />
              <Card.Body>
                <Card.Title>Kodai Lake</Card.Title>
                <Card.Text style={{width:"12rem"}}>
                  Kodaikanal Lake is a manmade lake in the Kodaikanal city which
                  is also known as Kodai Lake Vera
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card >
              <Card.Img variant="top" src={Kodai3} />
              <Card.Body>
                <Card.Title>Bear Shola Falls</Card.Title>
                <Card.Text style={{width:"12rem"}}>
                  Located at a mere distance of 2 kilometres from the Kodaikanal
                  Lake, the Bear Shola Falls is a popular...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card >
              <Card.Img variant="top" src={Kodai4} />
              <Card.Body>
                <Card.Title> Pillar Rocks</Card.Title>
                <Card.Text style={{width:"12rem"}}>
                  Situated in the 'Princess of Hill stations', Kodaikanal, the
                  Pillar Rocks have become a lovely picnic...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Kodaikanal;