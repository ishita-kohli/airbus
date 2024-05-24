import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="newsletter__content">
                            <h2>Subscribe now to get latest updates and early bird discount.</h2>

                            <div className="newsletter__input">
                                <input type="email" placeholder='Enter your email' />
                                <button className="btn newsletter__btn">Subscribe</button>
                            </div>
                            <p>
                            At SkyVoyager, we offer a suite of advanced services designed 
                            to enhance the safety, efficiency, and reliability of flight navigation. 
                            Our cutting-edge technology and expert insights cater to the diverse needs 
                            of pilots, airlines, and airport authorities,
                             ensuring optimal performance and risk mitigation in the aviation industry. 
                            </p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="newsletter__img">
                            <img src={maleTourist} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Newsletter