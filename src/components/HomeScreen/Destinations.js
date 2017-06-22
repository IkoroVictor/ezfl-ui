import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import {Link} from 'react-router-dom';
import '../App.css';
import '../../css/ionicons.min.css';

const Destinations = () => (
  <section className="section-destinations">
    <Container fluid>
      <h2>popular destinations</h2>
      <div className="galleria">
        <Row className="gallery-row">
          <Col md={12} className="gal-col">
            <div className="gallery pos1">
              <h3>Lagos</h3>
              <div>
                <span>
                  <i className="ion-android-plane"></i>12 flights</span>
                <span>
                  <i className="ion-cash"></i>
                  FROM:
                  <small>&#8358;</small>27,500</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="gallery-row">
          <Col md={6} className="gal-col">
            <div className="gallery pos2">
              <h4>Abuja</h4>
              <div>
                <span>
                  <i className="ion-android-plane"></i>12 flights</span>
                <span>
                  <i className="ion-cash"></i>
                  FROM:
                  <small>&#8358;</small>27,500</span>
              </div>
            </div>
          </Col>
          <Col md={6} className="gal-col">
            <div className="gallery pos3">
              <h4>Benin</h4>
              <div>
                <span>
                  <i className="ion-android-plane"></i>12 flights</span>
                <span>
                  <i className="ion-cash"></i>
                  FROM:
                  <small>&#8358;</small>27,500</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="gallery-row">
          <Col md={6} className="gal-col">
            <div className="gallery pos4">
              <h4>Calabar</h4>
              <div>
                <span>
                  <i className="ion-android-plane"></i>12 flights</span>
                <span>
                  <i className="ion-cash"></i>
                  FROM:
                  <small>&#8358;</small>27,500</span>
              </div>
            </div>
          </Col>
          <Col md={6} className="gal-col">
            <div className="gallery pos5">
              <h4>Enugu</h4>
              <div>
                <span>
                  <i className="ion-android-plane"></i>12 flights</span>
                <span>
                  <i className="ion-cash"></i>
                  FROM:
                  <small>&#8358;</small>27,500</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  </section>
);
export default Destinations;
