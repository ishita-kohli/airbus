import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import '../styles/about.css';

const About = () => {
    return (
        <section className="about-section">
            <Container>
                <Row>
                    <Col lg="12">
                        <h2 className="about-title">About Us</h2>
                        <p className="about-description">
                            Welcome to SkyVoyage, At SkyVoyager, our mission is to enhance flight safety and operational efficiency through state-of-the-art navigation mechanisms. We understand the complexities and challenges faced by the aviation industry, and we are committed to delivering solutions that address these head-on. Our goal is to reduce human error, improve automated navigation systems, and ensure seamless operations in the skies.
                        </p>
                        <p className="about-description">
                        We envision a world where every flight is safe, efficient, and reliable. Through continuous innovation and a deep understanding of aviation needs, we strive to be the leading provider of flight navigation solutions. Our vision is to set new standards in aviation safety and efficiency, making the skies safer for everyone.
                        </p>
                        <p className="about-description">
                        SkyVoyager is at the forefront of aviation technology, dedicated to making the skies safer and flights more efficient
                        </p>
                        <p className="about-description">
                        Using advanced algorithms, we identify the best flight paths, taking into account factors like weather conditions, air traffic, and potential hazards.
                        </p>
                        <p className="about-description">
                        Our systems provide real-time risk analysis, offering alternative routes and safety recommendations to ensure smooth and secure flights.
                        </p>
                        <p className="about-description">
                        Integrated with flight sensor data, our health metrics tracker monitors the condition of the aircraft, providing valuable insights into flight health and performance.
                        </p>
                    </Col>
                </Row>
            </Container>
            <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "999" }}>
        <Link to="/help">
          <button style={{ padding: "10px 20px", borderRadius: "10%", backgroundColor: "green", color: "white", border: "none", cursor: "pointer" }}>Help</button>
        </Link>
      </div>
        </section>
    );
}

export default About;