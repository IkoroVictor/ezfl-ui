import React from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';
import {Link} from 'react-router-dom';
import '../App.css';
import '../../css/ionicons.min.css';
import lagosPix from "../../images/bg/lagos.png";
import abujaPix from "../../images/bg/abj2.jpg";
import beninPix from "../../images/bg/benin.jpg";
import calabarPix from "../../images/bg/cal2.jpg";
import enuguPix from "../../images/bg/ph2.jpg";

let clickHandler=function(e){
  e.preventDefault();

}

let hoverHandler=function(e){
  e.preventDefault();

}
const Destinations = () => (
  <section className="section-destinations">
    <Container fluid>
      <h2>popular destinations</h2>
      <div className="galleria">
        <Row className="gallery-row">
          <Col md={12} className="gal-col">
            <div className="gallery pos1">
              <div className="dest-shadow"></div>
              <img src={lagosPix} alt="lagos-city"/>
              <h3>Lagos</h3>
              <div>
                <span>
                  <i className="ion-android-plane"></i>9 flights</span>
                <span>
                  <i className="ion-cash"></i>
                  FROM:
                  <small>&#8358;</small>27,500</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="gallery-row">
          <Col md={6} xs={6} className="gal-col">
            <div className="gallery pos2">
              <div className="dest-shadow"></div>
              <img src={abujaPix} alt="abuja-city"/>
              <h4>Abuja</h4>
              <div>
                <span>
                  <i className="ion-android-plane"></i>4 flights</span>
                  <Hidden sm xs><span>
                    <i className="ion-cash"></i>
                    FROM:
                    <small>&#8358;</small>27,500</span></Hidden>
              </div>
            </div>
          </Col>
          <Col md={6} xs={6} className="gal-col">
            <div className="gallery pos3">
              <div className="dest-shadow"></div>
              <img src={beninPix} alt="benin-city"/>
              <h4>Benin</h4>
              <div>
                <span>
                  <i className="ion-android-plane"></i>2 flights</span>
                  <Hidden sm xs><span>
                    <i className="ion-cash"></i>
                    FROM:
                    <small>&#8358;</small>27,500</span></Hidden>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="gallery-row">
          <Col md={6} xs={6} className="gal-col">
            <div className="gallery pos4">
              <div className="dest-shadow"></div>
              <img src={calabarPix} alt="calabar-city"/>
              <h4>Calabar</h4>
              <div>
                <span>
                  <i className="ion-android-plane"></i>1 flight</span>
                  <Hidden sm xs><span>
                    <i className="ion-cash"></i>
                    FROM:
                    <small>&#8358;</small>27,500</span></Hidden>
              </div>
            </div>
          </Col>
          <Col md={6} xs={6} className="gal-col">
            <div className="gallery pos5">
              <div className="dest-shadow"></div>
              <img src={enuguPix} alt="enugu-city"/>
              <h4>Enugu</h4>
              <div>
                <span>
                  <i className="ion-android-plane"></i>5 flights</span>
                <Hidden sm xs><span>
                  <i className="ion-cash"></i>
                  FROM:
                  <small>&#8358;</small>27,500</span></Hidden>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  </section>
);
export default Destinations;
