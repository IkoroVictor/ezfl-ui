import React, {Component} from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';
import {Link} from 'react-router-dom';
import '../../stylesheets/css/App.css';
import imgAero from '../../images/logos/airlines/aero-logo.png';
import imgDana from '../../images/logos/airlines/dana-air-logo.png';
import imgFirstNation from '../../images/logos/airlines/first-nation-logo.png';
import imgMedview from '../../images/logos/airlines/med-view-logo.png';
import imgArik from '../../images/logos/airlines/arik-air-logo.png';
import imgAirPeace from '../../images/logos/airlines/air-peace-logo.png';
import imgOverland from '../../images/logos/airlines/overland-logo.png';


const About = () => (
  <section className="section-about">
    <Container fluid>
      <Row>
        <Col md={12}>
          <p className="long-copy">Find cheap flights from local airlines and travel agents</p>
        </Col>
      </Row>
      <Row className='long-copy-row'>
        <Col md={12}>
          <Hidden xs sm>
            <ul className="long-copy">
              <li><img src={imgDana} alt="Dana Airline"/></li>
              <li><img src={imgMedview} alt="Medview Airline"/></li>
              <li><img src={imgFirstNation} alt="First Nation Airline"/></li>
              <li><img src={imgArik} alt="Arik Airline"/></li>
              <li><img src={imgAero} alt="Aero Airline"/></li>
              <li><img src={imgAirPeace} alt="Air Peace Airline"/></li>
              <li><img src={imgOverland} alt="Overland Airline"/></li>
            </ul>
          </Hidden>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
