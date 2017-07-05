import React from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';
import {Link} from 'react-router-dom';
import '../App.css';
import '../../css/ionicons.min.css';
import lagosPix from "../../images/bg/lagos1.jpg";
import abujaPix from "../../images/bg/abj2.jpg";
import beninPix from "../../images/bg/benin.jpg";
import calabarPix from "../../images/bg/cal1.jpg";
import enuguPix from "../../images/bg/enugu1.jpg";
import kanoPix from "../../images/bg/kano1.jpg";
import kadunaPix from "../../images/bg/kaduna1.jpg";
import phcPix from "../../images/bg/ph2.jpg";

let clickHandler=function(e){
  e.preventDefault();

}

let hoverHandler=function(e){
  e.preventDefault();

}
const Destinations = () => (
  <section className="section-destinations">
    <h2>popular destinations</h2>
    <ul className="city-showcase">
                <li>
                  <figure className="city-photo"><img src={lagosPix} alt="Korean bibimbap with egg and vegetables"/></figure>
                  <div className="city-name">Lagos</div>
                </li>
                <li><figure className="city-photo"><img src={kanoPix} alt="Simple italian pizza with cherry tomatoes"/></figure>
                  <div className="city-name">Kano</div>
                </li>
                <li><figure className="city-photo"><img src={phcPix} alt="Chicken breast steak with vegetables "/></figure>
                  <div className="city-name">Port Harcourt</div>
                </li>
                <li><figure className="city-photo"><img src={beninPix} alt="Autumn pumpkin soup"/></figure>
                  <div className="city-name">Benin</div>
                </li>
    </ul>
    <ul className="city-showcase second-showcase">
                <li><figure className="city-photo"><img src={enuguPix} alt="Paleo beef steak with vegetables"/></figure>
                  <div className="city-name">Enugu</div>
                </li>
                <li><figure className="city-photo"><img src={abujaPix} alt="Healthy baguette with egg and vegetables"/></figure>
                  <div className="city-name">Abuja</div>
                </li>
                <li><figure className="city-photo"><img src={calabarPix} alt="Burger with cheddar and bacon"/></figure>
                <div className="city-name">Calabar</div>
                </li>
                <li><figure className="city-photo"><img src={kadunaPix} alt="Granola with cherries and strawberries"/></figure>
                  <div className="city-name">Kaduna</div>
                </li>
    </ul>
    <div className="clear-fix"/>
  </section>
);
export default Destinations;

{/*
  <i className="ion-android-plane"></i>
  <i className="ion-cash"></i>
  <small>&#8358;</small>27,500</span>
*/}
