import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import placepic from "./img/Place.jpeg";
import Chennai from "./img/chennai1.jpeg";
import Chennai1 from "./img/chennai2.jpeg";
import Chennai2 from "./img/chennai3...jpeg";
import Chennai3 from "./img/chennai4.jpeg";
import Rameshwaram1 from "./img/rameshwarem1.jpeg";
import Rameshwaram2 from "./img/rameshwarem2.jpeg";
import Rameshwaram3 from "./img/rameshwarem1 (6).jpeg";
import Rameshwaram4 from "./img/Rameshwaram3..jpeg";
import Kodaikanal1 from "./img/kodaikanal1....jpeg";
import Kodaikanal2 from "./img/kodaikanal2.jpeg";
import Kodaikanal3 from "./img/kodaikanal3..jpeg";
import Kodaikanal4 from "./img//kodaikanal4.jpeg";
import Ooty1 from "./img/ooty1 (1).jpeg";
import Ooty2 from "./img/ooty1 (2).jpeg";
import Ooty3 from "./img/ooty1 (3).jpeg";
import Ooty4 from "./img/ooty1 (4).jpeg";
import Kaniya1 from "./img/kanyakumari1 (1).jpeg";
import Kaniya2 from "./img/kanyakumari1.(2).jpeg";
import Kaniya3 from "./img/kanyakumari1 (3).jpeg";
import Kaniya4 from "./img/kanyakumari1 (4).jpeg";
import Kumbakonam1 from "./img/kumbakonam1 (1).jpeg";
import Kumbakonam2 from "./img/kumbakonam1.(2).jpeg";
import Kumbakonam3 from "./img/kumbakonam1 (3).jpeg";
import Kumbakonam4 from "./img/kumbakonam1 (4).jpeg";
import Madurai1 from "./img/madurai1.jpeg";
import Madurai2 from "./img/madurai2.jpeg";
import Madurai3 from "./img/madurai3..jpeg";
import Madurai4 from "./img/madurai4..jpeg";
import Yercaud1 from "./img/yercaud...(1).jpeg";
import Yercaud2 from "./img/yercaud1 (2).jpeg";
import Yercaud3 from "./img/yercaud1.(3).jpeg";
import Yercaud4 from "./img/yercaud1.(4).jpeg";
import Theni1 from "./img/theni1.(1).jpeg";
import Theni2 from "./img/theni1 (2).jpeg";
import Theni3 from "./img/theni1.(3).jpeg";
import Theni4 from "./img/theni1.(4).jpeg";
import Hogenakkal1 from "./img/hogenakkal1.jpeg";
import Hogenakkal2 from "./img/hogenakkal2..jpeg";
import Hogenakkal3 from "./img/hogenakkal3.jpeg";
import Hogenakkal4 from "./img/hokenakkal4..jpeg";




function Placetovisit(){
    return(
        <>  <Container className="mt-5" >
        
        <Row className="row-cols-1 row-cols-md-2">
          <Col className=" mt-5">
            <h6 className="fw-bolder mb-4" >Tourist Places To Visit In Tamil Nadu</h6>
      
              <p className="text-indent  " style={{fontSize:"15px"}}>
              Chennai, Ooty, Pondicherry, Kodaikanal, Coimbatore, Yelagiri, Masinagudi, Conoor, Madumalai, Yercaud, Madurai, Thanjavur, Mahabalipuram, Kanyakumari, Kotagiri, Nilgiri, Krishnagiri, Auroville, Theni, Hullathy, Rameshwaram, Kalhatty Ghat and more.</p>
              <p className="text-indent t" style={{fontSize:"15px"}}>
              Enjoy a vacation to remember and cherish some amazing experiences while touring the most gorgeous places to visit in Tamil Nadu. With many serene beaches, beautiful temples known for Dravidian architecture, bustling shopping bazaars and adventurous wildlife places, these places offer a splendid mix to help you make superb travel itinerary.
              </p>
              <p className="text-indent " style={{fontSize:"15px"}}>
              Looking forward to visiting the most stunning places to see in Tamil Nadu?Well, then you are in for a great time. From the thriving cosmopolitan vibes of Chennai to the emerald tea plantations of Ooty and the French style houses of Pondicherry to the scenic beauty of Kodaikanal, these places will leave you overwhelmed. There is an awesome experience in store, whether you are going for leisure, backpacking or looking for an adventure.
              </p>
            
          </Col>
          <Col>
          <div className="img-container mt-5 ">
            <img src={placepic}  style={{width:"550px",height:"60vh"}} alt="" />
            <h6 className="text-center">Tourist Place To Vist In Tamilnadu</h6>
            </div>
          </Col> 
          
        </Row>
        <p className="text-indent " style={{fontSize:"15px"}}>
        The variety of tourist places in Tamil Nadu offers you a glimpse of all kinds of sightseeing and adventures. Tourists here can choose among many offbeat places like Yelagiri and Yercaud to the famous cultural citadels like Mahabalipuram and Madurai. Tamil Nadu is also home to the southernmost land of India- Kanyakumari and one of the char dhams- Rameshwaram. Whether it is an adventure you are looking for or a religious respite in the temples, these places are a delight for anyone wishing to escape the hustle and bustle of life.
              </p>  
      </Container>
 
 {/*Chennai  */}


<div className=" mt-5 ">
      <div className="text-center">
        <h3>Chennai</h3>
        <h3>Tourist Places Visit</h3>
      </div>

      <div
        style={{ marginTop: "60px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "242px" }}
            src={Chennai}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Marina Beach,Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Situated in the city of Chennai in Tamil Nadu, Marina Beach is a
            natural urban beach along the Bay of Bengal. The beach is stretched
            out to a distance of 13 kilometres making it the longest natural
            urban beach in the country, second largest in the world and also the
            most crowded beach in India with almost 30,000 visitors a day.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            With a white sandy shore that looks as though extending to infinity,
            the landscape of Marina Beach is a mesmerising and serene sight to
            behold. The beach has a primarily sandy terrain and is dotted with
            plenty of merry-go-rounds and shops selling souvenirs. You could
            take a walk along the Marina beach with your near and dear ones or
            even all alone and enjoy the cool evening sea breeze along with a
            hot plate of crispy sundal and murukku. Watching the sun crawl
            upwards into the sky or even disappear into the ocean from the
            beach, is an awe-striking and enchanting experience.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">MGR Flim City,Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Having been established in the year 1994, a considerably new
              structure, the MGR Film city is managed by the Government of Tamil
              Nadu in loving memory of MG Ramachandran who was not only a
              crowd-pleasing tamil actor but also a longtime CM of Tamil Nadu.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              With a white sandy shore that looks as though extending to
              infinity, the landscape of Marina Beach is a mesmerising and
              serene sight to behold. The beach has a primarily sandy terrain
              and is dotted with plenty of merry-go-rounds and shops selling
              souvenirs. You could take a walk along the Marina beach with your
              near and dear ones or even all alone and enjoy the cool evening
              sea breeze along with a hot plate of crispy sundal and murukku.
              Watching the sun crawl upwards into the sky or even disappear into
              the ocean from the beach, is an awe-striking and enchanting
              experience.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "242px" }}
              src={Chennai1}
              alt=""
            ></img>
          </div>
        </div>
      </div>

      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "242px" }}
            src={Chennai2}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Marundeeswarar Temple,Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            The magnificent Marundeeswarar Temple, in Tiruvanmiyur, near Chennai
            has the temple deity Shiva in the form of Marundeeswar or
            Aushadeeswarar, the God of Medicines. A fine specimen of Dravidian
            architecture, this temple is a must visit for anyone visiting
            Chennai or nearby cities.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Glorified in the 7th-8th century by Nayanars (Saivite Saints),
            Tirugnana Sambandar, and Appar, the temple was expanded by the Chola
            Kingdom in the 11th century. Moreover, given the name,
            Marundeeswarar Temple has been a place of worship especially for
            people with diseases and those facing various problems with their
            health. The prasadam here is a mixture of sacred ash, water, and
            milk which is believed to cure any ailments. One must visit the
            temple to encounter the miraculous power it is said to have.
          </p>
        </div>
      </div>
      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Breezy Beech,Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Breezy Beach, Overview Breezy Beach lays in the remote and serene
              neighbourhood of Valmiki Nagar in Chennai. Being smaller and less
              polluted, its a perfect getaway for anyone looking for a peaceful
              evening.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              This beach is not as popular and known as the Elliots beach, and
              is hence more quiet and peaceful. Evenings are very pleasant and
              breezy here, and in the recent years, lots of tourists have been
              attracted towards this beach for its beauty. Those looking for an
              amiable, refreshing and breezy place to chill out and have fun,
              the Breezy beach of Chennai is the place to be.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "190px" }}
              src={Chennai3}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>

{/* Rameshwaram */}


<div className=" mt-5">
      <div className="text-center">
        <h3>Rameshwaram</h3>
        <h3>Tourist Places Visit</h3>
      </div>

      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "242px" }}
            src={Rameshwaram1}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Dhanushkodi Temple, Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Dhanushkodi was until a few years ago a wonderful temple on the
            southern tip of India. However, due to a natural calamity, the
            cyclone, it got completely washed away.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            It holds the advantage of being on an island and is exquisitely
            covered by waters on all the four sides of it. It is sandwiched
            between the Bay of Bengal and Indian Ocean. When viewed from a birds
            eye, The seas are in the shape of bow and arrow. The arrow head is
            considered to be a sacred place for worship by the Hindus and people
            from far and wide come there to offer sacred prayers to the deity.
            Lord Rama has his pious foot marks in this temple and the whole
            story of Ramayana revolves around this temple island. It is a
            wonderful pilgrim place for the followers of Lord Rama. The place is
            an approximate of 18 kms from Rameshwaram and one can easily travel
            by road.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Lakshmana Temple, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Lakshmana Tirtham had been constructed in the loving memory of
              Lord Lakshman, brother of Lord Rama. In order to offer sacred
              prayers to lord Lakshmana, this temple has been constructed in
              Rameshwaram itself which indicates that Lord Lakshman had been
              given a valuable place in the dynasty of Lord Rama.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Several wonderful sculptures of Lord Lakshmana have been carved
              out from marble and the temple has the statues of lord Rama and
              Goddess Sita too which signifies the spirit of unitedness that
              exisited between them.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "190px" }}
              src={Rameshwaram2}
              alt=""
            ></img>
          </div>
        </div>
      </div>

      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "242px" }}
            src={Rameshwaram3}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Villoondi Tirtham, Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Villoondi Tirtham is a beach which is also considered a sacred
            natural water body and a favourite amongst tourists. It also has a
            spring inside the sea which makes the attraction a unique one and is
            often associated with the Legend of Ramayana. It is believed that
            Lord Rama shot an arrow to create this spring to help his people
            with drinking water.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Villoondi Theertham is situated about 6 km from the Rameswaram main
            bus stand. Besides its arresting views and silent tides, the place
            is also known for its pure water spring inside the sea. A few metres
            from the shore, this pure water well beside the sea is a marvel.
            Devotees connect its existence to a mythological legend from the
            epic Ramayana. After rescuing Goddess Sita and bringing her back to
            Rameswaram from Sri Lanka, Lord Rama performed rituals by installing
            a Shiva linga on the spot.
          </p>
        </div>
      </div>
      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Rameshwaram Temple, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              A perfect blend of mind-boggling architecture and spiritual
              significance, Rameshwaram Temple, also known as Ramanathaswamy
              Temple of Tamil Nadu is dedicated to Lord Shiva. It also boasts of
              being one of the 12 Jyotirlinga temples of India. Not just
              spiritually, Rameshwaram Temple is appealing architecturally also.
              With the longest corridor of the world and immaculate carvings on
              pillars, it is definitely a treat for your eyes.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              The lingam in the Rameshwaram Temple was installed by Lord Rama
              but, the construction was led by several rulers over the
              centuries. Inside the temple, there are two lingams- Ramalingam
              and Shivalingam. The latter is still worshipped first to preserve
              the words of Lord Rama. Besides daily Abhishkams and poojas
              performed with great zeal, there are absorbing festivals worth
              witnessing
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "242px" }}
              src={Rameshwaram4}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>

    {/* Kodaikannal */}


    <div className=" mt-5 ">
      <div className="text-center">
        <h3>Kodaikanal</h3>
        <h3>Tourist Places Visit</h3>
      </div>
      {/* 1st content*/}
      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "200px" }}
            src={Kodaikanal1}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Green Valley View, Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Formerly known as Suicide point, the Green Valley View offers a
            breathtaking view of the plains, deep valleys and hills. The
            mesmerizing view of the Vaigai Dam is an unforgettable experience.
            It used to be known as suicide point because of the dangerous valley
            which is dense and deep; below the point of more than 5000 feet
            drop.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Located at a distance of 5.5 km from the Kodaikanal Lake, the Green
            Valley View not just offers a gorgeous view, but is also surrounded
            by a lot of monkeys. On the way to the point, there are several
            shops which offer homemade chocolates, ornaments and a wide range of
            flowers.
          </p>
        </div>
      </div>

      {/* 2nd content*/}
      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Kodai Lake, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Kodaikanal Lake is a manmade lake in the Kodaikanal city which is
              also known as Kodai Lake. Vera Levinge was the man responsible for
              the creativity and resources of this lake amidst Kodaikanal town.
              This lake was developed by the British and early missionaries from
              the USASA.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              The star-shaped lake is centrally located in Kodaikanal and is
              surrounded by the rich green Palani Hills Range the main watershed
              for the lake. The lake is situated at an elevation of 2285m above
              sea level and has an average depth of 3.0m. The lake is at a
              distance of 3 km from the Kodai Bus stand.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "200px" }}
              src={Kodaikanal2}
              alt=""
            ></img>
          </div>
        </div>
      </div>

      {/* 3st content*/}
      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "220px" }}
            src={Kodaikanal3}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Bear Shola Falls,Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Located at a mere distance of 2 kilometres from the Kodaikanal Lake,
            the Bear Shola Falls is a popular picnic spot in the region. This
            cascade is a seasonal attraction that comes to life in its fullest
            during the monsoons. An interesting legend behind the unique name of
            this place is that it was a favourite haunt of a bear who used to
            frequent this water body to drink water, hence imparting it the name
            Bear Shola Falls.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Wrapped with dense forests coupled with the chirping of birds, Bear
            Shola Falls is a little heaven. Also, the forest area of the Western
            Ghats situated near the falls is a biodiversity hotspot where you
            can have a rendezvous with animals like monkeys and deer in the
            wild.
          </p>
        </div>
      </div>

      {/* 4th content*/}
      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Pillars Rocks, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Situated in the 'Princess of Hill stations', Kodaikanal, the
              Pillar Rocks have become a lovely picnic spot. Constituting a
              beautiful mini garden; the place is named so as it has three
              vertically positioned boulders reaching up to a height of 400
              feet. The aura here is full of affection and is evidence of a
              great love story. The 'white cross' which once existed on these
              rocks represented David Gell's excellent tribute to love. The view
              of rocks is not something to be missed. They stand as an untouched
              miracle for the tourists visiting Kodaikanal.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              The pillars are famous for providing bird's view of nearby
              surroundings. The chambers between these two massive rocks are
              called the Devil's Kitchen. Fewer times you might find rocks
              covered with mist and clouds, but when the ways become clear
              nothing beautiful than this could be ever seen.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "242px" }}
              src={Kodaikanal4}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>

        {/* Ooty */}



   <div className=" mt-5 ">
      <div className="text-center">
        <h3>Ooty</h3>
        <h3>Tourist Places Visit</h3>
      </div>
      {/* 1st content*/}
      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "205px" }}
            src={Ooty1}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Nilgiri Mountain Railway, Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Nilgiri Mountain Railway, also known as Toy Train in Ooty, is one of
            the key attractions of the popular hill station Ooty. Such is the
            train's popularity and history that it was declared as a World
            Heritage Site by UNESCO in 2005. Started in the year 1899, it has
            continued to charm its visitors over the past many years winding its
            way through the best of nature.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            The Toy Train covers a distance of total 46 km in a span of 5 hours
            and takes one through a truly spectacular journey filled with
            picturesque views en route. Another fascinating feature of the train
            is that its youngest X-class locomotive is over 50 years old and the
            oldest is 80 years old.
          </p>
        </div>
      </div>

      {/* 2nd content*/}
      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Ooty Botanical Garden, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              {" "}
              Ooty Botanical Gardens lie on the lower slopes of the Doddabetta
              peak, the Government Botanical Garden is a splendid garden in
              Udhagamandalam, near Coimbatore in the state of Tamil Nadu.
              Sprawled over an area of 22 hectares, the garden is divided into
              several sections that are trimmed beautifully to present an
              endearing sight.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Visitors are greeted with astounding colourful natural beauty from
              the moment they pass through the gates. For more than 160 years,
              foreign and local travellers have visited the lush green lawns of
              the garden, admiring the stunning variety of flowers, ferns, and
              orchids present here. Another highlight of the Botanical Garden is
              the Toda hill, known as the Toda mund, which gives the visitors an
              insight into the lives and culture of Todas (a tribe of the
              Nilgiris).
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "225px" }}
              src={Ooty2}
              alt=""
            ></img>
          </div>
        </div>
      </div>

      {/* 3st content*/}
      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "220px" }}
            src={Ooty3}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Emerald Lake,Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Emerald Lake is situated in Emerald Village, around 20-22 kilometres
            from the main city of Ooty and is a part of the Silent Valley
            National Park in the Nilgiris District. Serene and away from the
            maddening crowd, the lake and its surroundings are much cleaner and
            offer a perfect place to enjoy a leisurely time in the vicinity of
            nature and quietude.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            It is one of the unexplored and virgin places of the South Indian
            hill station, not yet encroached by the masses of tourists that
            visit the place every year. Emerald Lake is the ideal spot in Ooty
            for nature lovers. Tourists usually flock there for the picturesque
            scenic beauty of the lake, and the green Nilgiri slopes and tea
            plantations surrounding it. It is a paradise for nature photography
            enthusiasts as the delightful landscape offers a perfect subject and
            composition.
          </p>
        </div>
      </div>

      {/* 4th content*/}
      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Dolphin's Nose, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Located about 12 km away from Coonoor is the Dolphin's Nose about
              1,500 meters above sea level. The tip of the peak of this enormous
              rock resembles a dolphin's nose and this is one of the most
              visited tourist spots in The Nilgiris District of Tamil Nadu.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              It is set amidst the rolling hills of the Nilgiris Hills (or the
              Blue Mountains). The gigantic rock formation is entirely
              unprecedented. There are enormous canyons found on both the sides
              of the destination and there is a clear view of the Catherine
              Falls, another popular tourist destination with its ongoing
              current several thousand meters below, which is located at a short
              distance from the Dolphin's Nose.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "215px" }}
              src={Ooty4}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div> 

        {/* Kanyakumari */}


    <div className=" mt-5 ">
      <div className="text-center">
        <h3>Kaniyakumari</h3>
        <h3>Tourist Places Visit</h3>
      </div>
      {/* 1st content*/}
      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "242px" }}
            src={Kaniya1}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Kanyakumari Beach, Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Located in the southernmost part of India, Kanyakumari beach with
            its beautiful hue-changing beaches, the confluence of three water
            bodies: Bay of Bengal, Indian Ocean, and the Arabian Sea.
            Miraculously, here you can see that the water of three seas does not
            mix, you can distinguish between the turquoise blue, deep blue, and
            sea green waters of the three seas, though the colors keep changing
            with the season and the day's weather.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            The beach is not conducive to swim or surf as the water as the sea
            is rough and the beach is rocky.To enjoy the best view, you can
            visit the Triveni Sangam point and climb up the famous lighthouse
            watchtower to entirely take in its beauty.
          </p>
        </div>
      </div>

      {/* 2nd content*/}
      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Vivekananda Memorial, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              {" "}
              The magnificent Vivekananda Rock Memorial is located on a small
              island off Kanyakumari. It has the picturesque Indian Ocean in its
              backdrop. It is situated on one of the two adjacent rocks
              projecting out of the Lakshadweep Sea and comprises of the
              'Shripada Mandapam' and the 'Vivekananda Mandapam'. Vivekananda
              Rock Memorial is located at about 500 meters east of the mainland
              of Vavathurai in Kanyakumari and can be accessed by regular
              ferries.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              This statue was built in the year 1970 on the island situated in
              Vavathurai, built on the site where Vivekananda attained
              enlightenment. The Shripada Mandapam has a study hall and a
              museum, where you can explore Vivekananda's life and work in
              depth.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "220px" }}
              src={Kaniya2}
              alt=""
            ></img>
          </div>
        </div>
      </div>

      {/* 3st content*/}
      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "242px" }}
            src={Kaniya3}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Thiruvalluvar Status,Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Dedicated to the accomplished philosopher and poet Thiruvalluvar,
            this beautiful statue finds itself on a small island near
            Kanyakumari. Thiruvalluvar was the author of a legendary work in the
            world of Literature, Tirukkural, the classic Tamil text. In his
            devotion, the work for the statue started in 1990 and continued till
            1999, during the year in which the figure finally got completed.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            This monument stands tall at a mighty height of 133 feet and is
            perched upon a 38-foot pedestal. The pedestal's height represents
            the 38 chapters of virtue in Thirukkural. Full of symbolism and
            cultural significance, this destination is awe-inspiring, and a
            must-visit. V. Ganapati Sthapati sculpted the statue, and it was
            unveiled on January 1, 2000. Surrounded by the waters, the statue is
            settled at an ideal location, and a short ferry ride can quickly
            help you reach the masterpiece.
          </p>
        </div>
      </div>

      {/* 4th content*/}
      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Thirparappu Falls, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Located at a distance of about 55 kilometers from Kanyakumari, the
              cascading waters of the Thirparappu Falls make up for an
              enchanting sight. This waterfall is a manmade one and falls from a
              height of 50 feet. The water collects in a quaint pool below which
              is an ideal place to frolick around, especially for children. The
              falls are surrounded by thick green foliage and indigenous fauna,
              which make it a nature lover's paradise.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              These falls are a unique combination of streams that flow together
              to form a magnificent waterfall. The containment below is no less
              than a top tier waterpark and is perfectly safe too. The entrance
              of this destination has a small temple dedicated to Lord Shiva and
              is highly revered by the locals
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "242px" }}
              src={Kaniya4}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>

         {/* Kumbagonam */}

         <div className=" mt-5 ">
      <div className="text-center">
        <h3>Kumbakonam</h3>
        <h3>Tourist Places Visit</h3>
      </div>
      {/* 1st content*/}
      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "242px" }}
            src={Kumbakonam1}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Sarangapani Temple, Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Sarangapani Temple, an ancient temple dedicated to Lord Vishnu, is
            located in the town of Kumbakonam in the South-Indian state of Tamil
            Nadu. The beautiful temple is located on the banks of River Kaveri
            and is frequented by devotees of Lord Vishnu from all over the
            world. Along with being a sacred place of worship, the temple is a
            work of art in itself, with several tiers of intricately carved and
            colourfully decorated mythological sculptures and images. The
            grandeur of the temple is breathtaking. It has the tallest tower in
            the town. As one explores the Sarangapani Temple, they are bound to
            feel a certain vibe as hundreds of devotees transmit energies
            through their prayers and the experience is surreal. Sarangapani is
            the deity who is an avatar of Lord Vishnu. The temple is considered
            to be one of the 108 holy temples dedicated to Lord Vishnu in India.
            It is also regarded as one of the five sacred temples
          </p>
        </div>
      </div>

      {/* 2nd content*/}
      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Nageswaran Temple, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              {" "}
              Constructed as a chariot, the Nageswaran temple is an important
              Shaivite temple. A piece of genius Chola architecture, it is an
              important Shaivite temple The temple is a marvelous example of the
              Chola's architectural prowess as the constructed the temple in a
              way so that it will only let in sunlight during the month of
              March-April
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              There are many inscriptions associated with the temple indicating
              contributions from Cholas, Thanjavur Nayaks and Thanjavur Maratha
              kingdom. The oldest parts of the present masonry structure were
              built during the Chola dynasty in the 9th century, while later
              expansions, including the towering gopuram gatehouses, are
              attributed to later periods, up to the Thanjavur Nayaks during the
              16th century.The temple complex is one of the largest in the state
              and it houses three gateway towers known as gopurams.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "235px" }}
              src={Kumbakonam2}
              alt=""
            ></img>
          </div>
        </div>
      </div>

      {/* 3st content*/}
      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "242px" }}
            src={Kumbakonam3}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Adi Kumbeshwara Temple,Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Believed to have been constructed in the 7th century A.D by the
            Cholas, Adi Kumbeshwara Temple is one of the grandest and the oldest
            Shiva temple in the town. The temple has a magnificent architecture
            with the trademark style of the Cholas. It is dedicated to Lord
            Shiva and houses a unique Shiva lingam.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            The temple complex covers an area of 30,181 sq ft (2,803.9 m2) and
            houses four gateway towers known as gopurams. The tallest is the
            eastern tower, with 11 stories and a height of 128 feet (39 m) The
            temple has numerous shrines, with those of Kumbeswarar and
            Mangalambigai Amman being the most prominent. The temple complex
            houses many halls; the most notable is the sixteen-pillared hall
            built during the Vijayanagara period that has all the 27 stars and
            12 zodiacs sculpted in a single stone.
          </p>
        </div>
      </div>

      {/* 4th content*/}
      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Airavatesvara Temple, Overview</h6>

            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Located in the town of Darasuram near Kumbakonam in Tamil Nadu,
              Airavatesvara Temple is a revered Hindu temple and a UNESCO world
              heritage site. Part of the popular trio known as the Great Living
              Chola Temple along with Brihadeeswara Temple at Thanjavur and the
              Gangaikondacholisvaram Temple at Gangaikonda Cholapuram,
              Airavatesvara Temple was built by the Chola King Rajaraja Chola II
              in the 12th century CE. Presided by the Hindu God Lord Shiva, the
              temple is amongst the eighteen medieval era Hindu temples in the
              Kumbakonam area. The shrine displays the Vaishnavism and Shaktism
              legs of Hinduism, and the traditional Nayanars- the Bhakti saints
              of Shaivism. Constructed in the chariot structure and built in
              stone, the temple has smaller shrines dedicated to several Vedic
              and Puranic deities including Indra, Agni, Varuna, Vayu, Brahma,
              Surya, Vishnu, Saptamtrikas, Durga, Saraswati, Sri devi (Lakshmi),
              Ganga, Yamuna, Subrahmanya, Ganesha, Kama, Rati and others.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "242px" }}
              src={Kumbakonam4}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div> 

    {/* Madurai */}


    <div className=" mt-5 ">
      <div className="text-center">
        <h3>Madurai</h3>
        <h3>Tourist Places Visit</h3>
      </div>
      {/* 1st content*/}
      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "242px" }}
            src={Madurai1}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Vaigai Dam, Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Vaigai Dam, a magnificent human-made structure, is constructed over
            River Vaigai near Andipatti, Theni District in the South Indian
            State of Tamil Nadu. Andipatti lies about 70 kilometres from Madurai
            and travellers on their way to Periyar Wildlife Sanctuary often
            visit this massive and wondrous dam. Over the years, the site has
            become a favourite picnic spot as it gets beautifully illuminated in
            the evenings especially on weekends, and one can spend hours
            admiring the splendid view. The soft and warm sunrises by the
            reservoir are worth experiencing too.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            On one side of the dam is a beautiful garden known as Little
            Brindavan maintained by the management for the visitors. Little
            Brindavan has a variety of exotic flowers and plants and is a
            preferred getaway for nature lovers living nearby. The play area
            made especially for children is a relief for parents as they watch
            their little ones have fun in the unpolluted air.
          </p>
        </div>
      </div>

      {/* 2nd content*/}
      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Meghamalai, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              {" "}
              Often known as the "High Wavy Mountains", Meghamalai is a petit
              yet beautiful place located in the Western Ghats in the state of
              Tamil Nadu. At an elevation of 1500 meters, this place is a
              perfect getaway to beat the heat and enjoy some peaceful time
              relaxing amidst nature. Nestled between the evergreen forest this
              place is filled with the fresh aroma of cardamom, cinnamon and
              pepper. The lush green tea plantations will give you an
              opportunity to sip fresh piping tea and enjoy a lazy stroll amidst
              nature replete with flora and fauna.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              The Meghamalai region of the Western Ghats is a paradise
              unexplored even by the people of Tamil Nadu. The local Tamil
              language also refers to it as Paccha Kumachi, which means 'Green
              Peaks'. Located at approximately 1,500 metres above sea level,
              this small mountain village is surrounded by tea and cardamom
              plantations.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "245px" }}
              src={Madurai2}
              alt=""
            ></img>
          </div>
        </div>
      </div>

      {/* 3st content*/}
      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "250px" }}
            src={Madurai3}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder"> Samanar Hills,Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Located in Keelakuyilkudi village near Madurai, Samanar Hills or
            Samanar Malai is a beautiful hill rock complex which was originally
            home to Tamil Jain monks. The hill caves are a popular place of
            tourism and have elaborate carvings and drawings of the monks, on
            the interior walls. The spot also has a beautiful lotus temple
            located in the premises.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            There is no better place to escape the heat than this picturesque
            getaway surrounded by nature. Meghamalai is one of the best places
            to visit in Tamilnadu if you are looking for a quiet and peaceful
            weekend away from the city. During your vacation in this hill
            station, you can explore the following samanar hills tourist places.
            The city stands out for the active nightlife of the people, making
            it the safest place to travel.Madurai which is one of the oldest
            temple city has lot more to offer than just spiritual things
          </p>
        </div>
      </div>

      {/* 4th content*/}
      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Thirumalai Nayakar, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Thirumalai Nayakar Palace was erected in 1636 AD in the city of
              Madurai, by King Thirumalai Nayak. The palace depicts the perfect
              blend of Dravidian and Rajput styles. After Independence, this
              palace was declared as a national monument and till date continues
              to be one of the spectacular monuments of Southern India. The
              magnificent palace is located in the vicinity of the very famous
              Meenakshi Amman Temple.and indigenous fauna, which make it a
              nature lover's paradise. Depicting the Saracenic style of
              architecture, it was constructed during the rule of Nayak Dynasty
              and is widely considered as the most illustrious monument built by
              the Madurai Nayak Dynasty.he alluring palace (Nayak Mahal palace)
              is in the main city of Madurai, which is located 2 km away from
              the Meenakshi Amman temple.The Thirumalai Nayak Mahal was built by
              the Thirumalai Nayak king during the 16th century.The building
              that is still observable was the resident of the King Nayak and
              the throne of the King Nayak has been kept for display.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "242px" }}
              src={Madurai4}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
       {/* yarcuad */}


       <div className=" mt-5 ">
      <div className="text-center">
        <h3>Yercaud</h3>
        <h3>Tourist Places Visit</h3>
      </div>
      {/* 1st content*/}
      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "242px" }}
            src={Yercaud1}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Pagoda Point, Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Located in the eastern part of the Yercaud Hills, Pagoda point is a
            beautiful viewpoint where one is treated to a panoramic view of the
            entire town of Salem as well as the neighbouring village of
            Kakambadi. The twists and turns of the 21 hairpin bends of Yercaud
            can be seen from this spot as they envelop themselves around the
            hills. The mysterious piles of stones arranged in the form of a
            pyramid resembling a Pagoda give the location its unique name. These
            stones are believed to be placed here by local tribes.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Between the Pagodas here lies a temple devoted to Lord Rama. One can
            indulge in the amazing natural beauty of the spot and the scenery of
            the Eastern Ghats, with the greenery growing within the rugged
            terrains of the hills, entwined with sights of the craggy cliffs.
          </p>
        </div>
      </div>

      {/* 2nd content*/}
      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Botanical Garden, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              {" "}
              Any tourist who is interested in gods gift to this planet, the
              wondrous flora, and in knowing about various species of plants
              must make it a point to visit the orchid garden and the green
              house in the Botanical garden.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Yercaud is the place where the famous Kurinji flower blooms in
              plenty and the specialty of this flower is that it will bloom only
              once in twelve years. The National Orchidarium which is located 2
              km from the Emerald Lake has a wide variety of orchids which
              includes 30 orchid species that are exclusively found here. Many
              endangered species of orchids are persevered in this orchidarium
              which is ranked the third largest of all the orchidariums in
              India.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "190px" }}
              src={Yercaud2}
              alt=""
            ></img>
          </div>
        </div>
      </div>

      {/* 3st content*/}
      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "200px" }}
            src={Yercaud3}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Emerald Lake,Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            The most alluring aspect of Yercaud is its big yet natural lake very
            popularly known as the Emerald Lake. Surrounded by some wonderful
            cloud-peaked hills and a well persevered garden on its banks, this
            lake is a feast for the eyes.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            There is a floating fountain in the lake and boating facilities are
            available at a reasonable rate. Self-driven as well as rowing boats
            can be chosen according to your comfort and intersts. A nominal
            amount is collected as caution fee before issuing the boats and
            austere safety measures are followed by the authorities.
          </p>
        </div>
      </div>

      {/* 4th content*/}
      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Lady,s Seat, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Lady's Seat is a viewpoint that overlooks the winding ghat road
              and offers a spectacular view of Mettur Dam and Salem town.
              Besides, the place also houses a viewing tower, which is equipped
              with a telescope to enjoy the beautiful view. This viewing tower
              is open for visitors only during the daytime. Lady's Seat, Gent's
              Seat and Children's Seat, located to the south-west of Shevaroy
              Hill, are the names given to a group of rocks located on the
              Yercaud Hills.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              It is believed that an English lady used to spend her evenings at
              this place watching the beautiful view of this rock. For those
              interested in a closer view, there's a mounted telescope. Swing it
              to your extreme right to see the Mettur Dam on the Cauvery River.
              Great shots of the river can be had from this spot in the late
              afternoon when the sun's rays are reflected in its waters
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "242px" }}
              src={Yercaud4}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>   


      {/* Theni */}



      <div className=" mt-5 ">
      <div className="text-center">
        <h3>Theni</h3>
        <h3>Tourist Places Visit</h3>
      </div>
      {/* 1st content*/}
      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "242px" }}
            src={Theni1}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Chinna Suruli Falls, Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Located in the lap of wild, green forests, Chinna Suruli Falls is a
            picturesque destination to visit from Theni. It cascades all the way
            down from Meghamalai to form a pool of cool, sparkling water at the
            foothills of the mountain. Located around 54 kilometres away from
            the main centre, near the Kombaithozhu village, Chinna Suruli Falls
            is a lovely and serene destination to visit in and around Theni. It
            can be included in your itinerary of local sightseeing if you are
            visiting Theni and its nearby attractions
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Chinna Suruli Falls is one of the beautiful waterfalls near Madurai
            and the top visiting places in Megamalai range. It is also known as
            Cloudland Falls as it originates in the Megamalai Hills. In the
            local language, Chinna means small or younger, so in a sense, it is
            called the younger Suruli
          </p>
        </div>
      </div>

      {/* 2nd content*/}
      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Kumbakkarai Falls, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              {" "}
              Located in Dindigul district near Theni in Tamil Nadu, Kumbakkarai
              Falls is a mesmerising waterfall that is situated at the foothills
              of the Kodaikanal hills. The water cascades down in two layers- at
              the first stage, the water collects at the rock boulders and
              recesses. And in the second stage, it falls down the layer of
              rocks. These recesses are named after wild animals like tiger,
              snake, elephant, cheetah etc.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Besides boasting of immense scenic beauty and the melodious
              tinkering of the gushing waters, the place also offers utter peace
              and tranquility. Also unlike most other waterfalls, Kumbakkarai
              Falls also offer shallow waters where tourists are welcomed to
              swim or to take a dip. The popular tourist spot is the most
              crowded during the rainy season when the water level is high and
              the neighboring areas glows with greenery.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "245px" }}
              src={Theni2}
              alt=""
            ></img>
          </div>
        </div>
      </div>

      {/* 3st content*/}
      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "242px" }}
            src={Theni3}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Meghamalai,Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Tucked within the Western Ghats of Tamil Nadu, Meghamalai in Theni
            district is the kind of hidden paradise that you read about in
            books, complete with exhilarating trek routes, breathtaking scenes
            and an excellent opportunity to take a break from your everyday life
            in the lap of nature.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            The Highwavys Mountain, locally called the Meghamalai, is an
            undulating terrain of peaks belonging to the Varushanad Range of
            Western Ghats, in Theni district of Tamil Nadu. Located at an
            elevation of 1,500 metres above the sea level, Meghamalai is covered
            in the trademark green of Sahyadri, thus earning the name 'Pacha
            Kumachi' in Tamil, meaning 'Green Peaks'. Green peaks of Meghamalai
            Source Up until recently, the Meghamalai Hills were restricted to
            private estates of tea and coffee plantations.
          </p>
        </div>
      </div>

      {/* 4th content*/}
      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Suruli Falls, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Suruli Falls is a beautiful waterfall in the Theni district of
              Tamil Nadu and one of the major tourist attractions of Theni as
              well. It is a perfect destination to get up close and personal
              with the nature and cool off in its pristine waters
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              At a distance of 123 kms from Madurai, 22 Kms from Thekkady (via
              Gudalur & Karuna Muthevan Patti), 10 Kms from Kambam (via Suruli
              Patti) & 548 Kms from Chennai, Suruli Falls are situated amidst
              rich flora fauna and serve as a perfect picnic spot. The falls
              serve as the venue of Summer Festival, organized every year by the
              Tamil Nadu Tourism Department. The Kailasanathar Temple Cave is
              also an added attraction of the place. There are also other 18
              caves in and around the Suruli Falls. The Kailasanatha temple and
              Suruli Velappar temple are also nearby the falls. The falls are
              reachable by road from Kambam and Gudalur towns.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "235px" }}
              src={Theni4}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>     

    {/* Hogenakkal */}

    <div className=" mt-5 ">
      <div className="text-center">
        <h3>Hogenakkal</h3>
        <h3>Tourist Places Visit</h3>
      </div>
      {/* 1st content*/}
      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "242px" }}
            src={Hogenakkal1}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Theerthamalai Temple, Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Theerthamalai is a popular pilgrim centre close to Hogenakkal. One
            of its most popular destinations is the Theerthamalai temple. Lord
            Theerthagireeswar, a form of Lord Shiva is the worshipping deity.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            It is believed that Lord Ram worshipped Lord Shiva at this temple to
            absolve him of the sin of killing so many demons, after his victory
            over Rvana. Therefore, it is believed that a dip in these holy
            waters can help man rid himself of sins committed against others.
            Theerthamalai Temple or Theerthagiriswarar Temple is located in
            small village Theerthamalai, just 16 km from Harur in Dharmapuri
            district of Tamil Nadu. The name Theerthamalai in Tamil means hill
            with sacred water. The temple is situated about one km up the steep
            slope of the hillock, derives its name from the five springs in the
            temple. This temple was built during 7th Century when the Cholas and
            the Pandya's were ruling this dynasty.
          </p>
        </div>
      </div>

      {/* 2nd content*/}
      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Hogenakkal Falls, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              {" "}
              Hogenakkal Falls is a scintillating waterfall that is located on
              river Kaveri in the Dharmapuri district of Tamil Nadu. The place
              gets its name from Hogenakkal, which means 'smoking rocks', owing
              to the unique rock arrangement that exists around it. The gushing
              beauty of this cascade is one of a kind and is often quoted as
              being the "Niagara falls of India".
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              The Kaveri River forks into multiple streams and falls through
              multiple steps, making the sight a mesmerising thing to behold.
              The carbonatite rocks by these falls are the oldest of its kind in
              South Asia and one of the oldest in the world. Drinking water can
              also be obtained from the falls, and interestingly enough, the
              water here is believed to possess medicinal properties, owing to
              the numerous herbs that grow in its path. Known for its pristine
              appeal,
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "220px" }}
              src={Hogenakkal2}
              alt=""
            ></img>
          </div>
        </div>
      </div>

      {/* 3st content*/}
      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "242px" }}
            src={Hogenakkal3}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Pennagram Village,Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            The village is located about 20 km away from Hogenakkal and is
            famous for its weekly fair that it holds every month to attract
            tourists. The village is also know for its brightly colored giant
            terracotta statues, which are known as Aiyanars.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            According to census 2011 information the sub-district code of
            Pennagaram Block (CD) is 05889. Total area of pennagaram taluka is
            1,130 km² including 1,117.33 km² rural area and 13.04 km² urban
            area. Pennagaram taluka has a population of 2,34,853 peoples, out of
            which urban population is 29,654 while rural population is 2,05,199.
            Pennagaram taluka has a population density of 208 inhabitants per
            square kilometre. There are about 57,398 houses in the sub-district,
            including 7,266 urban houses and 50,132 rural houses.
          </p>
        </div>
      </div>

      {/* 4th content*/}
      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Mettur Dam, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Mettur Dam, situated 30 miles from Salem in a small Mettur
              Village, is one of the largest dams in India. Built across the
              River Cauvery at the canyon, Mettur Dam was built in the year 1943
              and is a sight of sheer beauty. The dam is surrounded by verdant
              hills and picturesque natural beauty and is quite popular among
              tourists. One of the most extraordinary features of the dam is its
              design, which is a testament to the country's engineering genius.
              Mettur Dam is a huge human-made marvel which spans over a massive
              length of 1700 metres and is a major hotspot where tourists visit
              from all across the country to relax and seek solitude.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Apart from being a tourist hotspot, the dam also provides
              irrigation facility for 2,71,000 acres of agricultural land around
              it. Another major attraction of the area is a water reservoir
              flanked by hilly ranges all around.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "242px" }}
              src={Hogenakkal4}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>  



       

        </>
       
    )
}
export default Placetovisit;