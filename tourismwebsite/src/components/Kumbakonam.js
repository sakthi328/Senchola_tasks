import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import KumbakonamImg from "./img/Kumbakonam.jpeg";
import Kumbakonam1 from "./img/kumbakonam1.(1).jpeg";
import Kumbakonam2 from "./img/kumbakonam1.(2).jpeg";
import Kumbakonam3 from "./img/Kumbakonam(3).jpeg";
import Kumbakonam4 from "./img/kumbakonam1 (4).jpeg";

function Kumbakonam() {
  return (
    <Container className="mt-5" id="kumbakonam">
      <Row className="row-cols-1 row-cols-md-2">
        <Col>
          <h3>06.Kumbakonam</h3>
          <img src={KumbakonamImg} className="ch_img" alt="" />
        </Col>

        <Col className="mt-5">
          <h6 className="fw-bolder">"The Cambridge of India"</h6>
          <div className="text-container text-container1">
            <p className="text-indent text-secondary">
              Kumbakonam Tourism Sandwiched between two great rivers of southern
              India, Cauvery and Arsala, Kumbakonam is a gorgeous temple town in
              the heart of the Thanjavur district of Tamil Nadu. The town is a
              place for the lovers of history and those seeking to understand
              India's cultural roots and Hinduism.
            </p>
            <p className="text-indent text-secondary">
              The town is also known for its grand festival called Mahamaham
              festival which is celebrated every twelve years at the Mahamaham
              Tank. The town is one of the oldest in Indian history, and known
              for its famed temples, Chola heritage and also for its marvelous
              educational institutes. The town is one of the oldest in Indian
              history, and known for its famed temples, Chola heritage and also
              for its marvelous educational institutes.
            </p>
          </div>
        </Col>
      </Row>

      <section className="mt-5">
        <h3 className="text-center mb-5">Must Visit Places In Kumbakonam</h3>

        <Row className="row-cols-1 row-cols-md-4">
          <Col>
            <Card >
              <Card.Img variant="top" src={Kumbakonam1} />
              <Card.Body>
                <Card.Title>Sarangapani Temple</Card.Title>
                <Card.Text>
                  Sarangapani Temple, an ancient temple dedicated to Lord
                  Vishnu, is located in the town of Kumbakonam...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card >
              <Card.Img variant="top" src={Kumbakonam2} />
              <Card.Body>
                <Card.Title>Nageswaran Temple</Card.Title>
                <Card.Text>
                  Constructed as a chariot, the Nageswaran temple is an
                  important Shaivite temple. A piece of genius Chola...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card >
              <Card.Img variant="top" src={Kumbakonam3} />
              <Card.Body>
                <Card.Title>Adi Kumbeshwara Temple</Card.Title>
                <Card.Text>
                  Located in the town of Darasuram near Kumbakonam in Tamil
                  Nadu, Airavatesvara...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card >
              <Card.Img variant="top" src={Kumbakonam4} />
              <Card.Body>
                <Card.Title style={{width:"15rem"}}> Airavatesvara Temple</Card.Title>
                <Card.Text>
                  Located in the town of Darasuram near Kumbakonam in Tamil
                  Nadu, Airavatesvara Temple is a revered...
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

export default Kumbakonam;