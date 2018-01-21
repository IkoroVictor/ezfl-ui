import React from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';
import '../../stylesheets/css/App.css';
import DestinationsCities from './DestinationsCities';

const Destinations = () => (
  <section className="section-destinations">
    <h2>popular destinations</h2>
      <DestinationsCities/>
    <div className="clear-fix"/>
  </section>
);
export default Destinations;

{/*
  <i className="ion-android-plane"></i>
  <i className="ion-cash"></i>
  <small>&#8358;</small>27,500</span>
*/}
