import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import '../../stylesheets/css/App.css';
import '../../stylesheets/css/ionicons.min.css';


const Services = () => (
  <section className="section-services">
    <Container fluid>
      <h2>Use our platform to find and manage your flights</h2>
      <Row className="services-row">
        <Col md={3}>
          <div className="service-box">
            <i className="ion-search"></i>
            <h3>find</h3>
            <p>Get information on all local flights from your favorite airlines</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="service-box">
            <i className="ion-calendar"></i>
            <h3>schedule</h3>
            <p>Save flights and get notified when flight price changes.</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="service-box">
            <i className="ion-ios-bookmarks"></i>
            <h3>book</h3>
            <p>Get redirected to flight page and proceed with payment</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="service-box">
            <i className="ion-ios-paw"></i>
            <h3>track</h3>
            <p className="new-feature">Know the location of flights in real time</p>
            <p className="coming-soon">Coming soon...</p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Services;
