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
  <section className="section-destinations clear-fix">
    <h2>popular destinations</h2>
    <ul className="city-showcase">
                <li><figure className="city-photo"><img src={lagosPix} alt="Korean bibimbap with egg and vegetables"/></figure></li>
                <li><figure className="city-photo"><img src={enuguPix} alt="Simple italian pizza with cherry tomatoes"/></figure></li>
                <li><figure className="city-photo"><img src={abujaPix} alt="Chicken breast steak with vegetables "/></figure></li>
                <li><figure className="city-photo"><img src={beninPix} alt="Autumn pumpkin soup"/></figure></li>
    </ul>
    <ul className="city-showcase second-showcase">
                <li><figure className="city-photo"><img src={abujaPix} alt="Paleo beef steak with vegetables"/></figure></li>
                <li><figure className="city-photo"><img src={lagosPix} alt="Healthy baguette with egg and vegetables"/></figure></li>
                <li><figure className="city-photo"><img src={beninPix} alt="Burger with cheddar and bacon"/></figure></li>
                <li><figure className="city-photo"><img src={enuguPix} alt="Granola with cherries and strawberries"/></figure></li>
    </ul>
  </section>
);
export default Destinations;

{/*
  <i className="ion-android-plane"></i>
  <i className="ion-cash"></i>
  <small>&#8358;</small>27,500</span>
*/}
