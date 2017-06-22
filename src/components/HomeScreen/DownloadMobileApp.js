import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import {Link} from 'react-router-dom';


const DownloadMobileApp = () => (
  <section className="section-download">
    <Container>
      <Row>
        <Col md={6} xs={6}>
          <div>
            <h3>Download EasyFlight Mobile App</h3>
            <p>Download the EasyFlight mobile app for a personalized experience. The EasyFlight mobile app is available on the Google play store and the Apple app store.</p>
          </div>
        </Col>
        <Col md={6} xs={6}>
          <Row>
            <Col className="col-downloads" md={6} xs={6}>
              <Link to="/">
                <div className="available-on-item">
                    <i className="ion-social-apple"></i>
                    <div className="available-on-inner">
                        <h4> iOS</h4>
                    </div>
                </div>
              </Link>
            </Col>
            <Col className="col-downloads" md={6} xs={6}>
              <Link to="/">
                <div className="available-on-item">
                    <i className="ion-social-android"></i>
                    <div className="available-on-inner">
                        <h4> Android</h4>
                    </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
);

export default DownloadMobileApp;
