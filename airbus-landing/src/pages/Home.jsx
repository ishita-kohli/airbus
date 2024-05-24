import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom for routing
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image4.png";
import image4 from "../assets/images/image3.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import Img from "../assets/images/12.png";
//import heroVideo from "../assets/images/hero-video.mp4";
import experienceImg from "../assets/images/exp.png";
import worldImg from "../assets/images/world.png";
import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../Component/Featured-tour/FeaturedTourList";
import Testmonial from "../Component/Testmonial/Testmonial";
import Newsletter from "../shared/Newsletter";
import SeniorAdventureSection from "../Component/SeniorAdventureSections/SeniorAdventureSection";
import help from "../Component/help";

const Home = () => {
  return (
    <>
      <section className="bordered-section">
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle Subtitle={"Navigate safely with SkyVoyager"} />
                </div>
                <h2>
                  Your Gateway to the World Above:
                  <br />
                  <span className="highlight">Navigate!</span>
                </h2>
                <p>
                  Skyvoyager ensuring safe and efficient flight navigation is
                  paramount. With the goal of minimizing human errors and
                  enhancing automated navigation mechanisms
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            {/* <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col> */}
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={Img} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* hero section end */}
      {/* <section className="bordered-section">
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"WHAT WE SERVE"} />
            </Col>
          </Row>
          <Row>
            <ServiceList />
          </Row>
        </Container>
      </section> */}
      {/* featured tour section start */}
      {/* <section className="bordered-section">
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle Subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured Events</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container> */}
      {/* </section> */}
      {/* featured section end */}
      {/* Tailored support for senior adventurers section start */}
      <section className="bordered-section">
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Our Services"} />
            </Col>
            <Col>
              <SeniorAdventureSection />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Tailored support for senior adventurers section end */}
      {/* New section: Why Book With Us */}
      {/* <section className="bordered-section">
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Why Book With Us"} />
            </Col>
          </Row>
          <Row className="mb-4">
            <Col lg="6" className="d-flex justify-content-center">
              <div className="why-book-item">
                <img src={image1} alt="Image 1" />
                {/* Optional: Add text or caption */}
      {/* <p>Reason 1: Lorem ipsum dolor sit amet.</p> */}
      {/* </div>
            </Col> */}
      {/* <Col lg="6" className="d-flex justify-content-center">
              <div className="why-book-item">
                <img src={image2} alt="Image 2" />
                {/* Optional: Add text or caption */}
      {/* <p>Reason 2: Consectetur adipiscing elit.</p> */}
      {/* </div> */}
      {/* //   </Col> */}
      {/* // </Row> */} */
      {/* // <Row className="mb-4">
          //   <Col lg="6" className="d-flex justify-content-center">
          //     <div className="why-book-item">
          //       <img src={image3} alt="Image 3" /> */}
      {/* Optional: Add text or caption */}
      {/* <p>Reason 3: Sed do eiusmod tempor incididunt.</p> */}
      {/* </div>
            </Col>
            <Col lg="6" className="d-flex justify-content-center">
              <div className="why-book-item">
                <img src={image4} alt="Image 4" /> */}
      {/* Optional: Add text or caption */}
      {/* <p>Reason 4: Ut labore et dolore magna aliqua.</p> */}
      {/* </div>
            </Col>
          </Row>
        </Container>
      // </section> */}{" "}
      */
      {/* experience section start */}
      <section className="bordered-section">
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle Subtitle={"EXPERIENCE"} />
                <h3>
                  Trust Our Expertise for Safe and Efficient Flight Navigation
                </h3>
                <p>
                  Stay Updated with the Latest in Flight Navigation Technology
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Sucessful trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* experience section end */}
      {/* testimonial section start */}
      <section className="bordered-section">
        <Container>
          <Col lg="12">
            <Subtitle Subtitle={"SUPPORTERS ADMIRE"} />
            <h2 className="testimonial__title">
              Here's what our users have to say about their experience.{" "}
            </h2>
          </Col>
          <Col lg="12">
            <Testmonial />
          </Col>
        </Container>
      </section>
      {/* testimonial section end */}
      <Newsletter />
      {/* Floating Help Button */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "999",
        }}
      >
        <button
          style={{
            padding: "10px 20px",
            borderRadius: "10%",
            backgroundColor: "orange",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Help
        </button>
        <Link></Link>
      </div>
    </>
  );
};

export default Home;
