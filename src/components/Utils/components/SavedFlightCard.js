import React, {Component} from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';
import {Link} from 'react-router-dom';
import {airportCodes, airlineFullNames, airports} from '../strings';
import lineAndDot from '../../../images/line-and-dot.png';
import imgAero from '../../../images/logos/airlines/aero-logo.png';
import imgDana from '../../../images/logos/airlines/dana-air-logo.png';
import imgFirstNation from '../../../images/logos/airlines/first-nation-logo.png';
import imgMedview from '../../../images/logos/airlines/med-view-logo.png';
import imgArik from '../../../images/logos/airlines/arik-air-logo.png';
import imgAirPeace from '../../../images/logos/airlines/air-peace-logo.png';
import imgOverland from '../../../images/logos/airlines/overland-logo.png';
import moment from 'moment';
import {store} from '../../../store';
import bookmarkIcon from '../../../images/big-bookmark.svg'
import verticalDivider from '../../../images/vertical-line.svg'
import Rodal from 'rodal';

let airlineMap = {
  overland: imgOverland, airpeace: imgAirPeace, arik: imgArik, dana:imgDana, aero:imgAero, firstnation: imgFirstNation, medview: imgMedview
}

//SAVED-FLIGHTS
const Badge = (props) =>(
  <div className="btn-notification">
    <i className="ion-android-notifications-none"></i>
    {(props.notifications!==undefined && props.notifications.length>0) && (<div>{props.notifications.length}</div>)}
  </div>
);

const BtnClose = ()=>(
  <div className="btn-close"><i className="ion-close-round"></i></div>
);
//---------------------//

class SavedFlightCard extends Component{
  constructor(props){
    super(props);
    this.state={
      modalVisible:false
    }
    this.showModal=this.showModal.bind(this);
  }

  showModal(){
    this.setState({
      modalVisible:true
    });
  }

  componentWillMount(){

  }

  render(){
    return(
      <div className="flight-card">
        <FlightCardTop {...this.props}/>
        <BtnClose/>
        {(this.props.cardDetails.data.active) &&<Badge notifications={this.props.cardDetails.data.notifications}/>}
      </div>
    );
  }
}

const FlightCardTop = (props) => (
  <div className="card-top manager">
    <Row>
      <FlightCardTopRight {...props}/>
    </Row>
  </div>
);

const FlightCardTopLeft = (props) => {
  return (
    <Col md={3} sm={3} xs={3} className="top-left">
      <span><strong>{props.flightNumber}</strong></span>
      <figure><img src={airlineMap[props.airline]} alt=""/></figure>
    </Col>
  );
}

const FlightCardTopRight = (props) => (
  <Col md={12} sm={12} xs={12} className="top-right">
      <div className="card-manage">
        <FlightCardTRTop {...props}/>
        <FlightCardTRBottom {...props}/>
      </div>
  </Col>
);

const FlightCardTRTop = (props) =>
{
  let from = props.cardDetails.data.from;
  let to = props.cardDetails.data.to;
  return(
    <div>
        <div>
          <Row className="top-right-top" >
            <Row className="fl-manage-top">
              <Col md={12}>
                <span className="airline-name"><strong>{airlineFullNames[props.cardDetails.data.airline]}</strong></span>
              </Col>
            </Row>

            <Row className="fl-manage-layer manage-from-to">
              <Col className="fl-manage-col" md={4}>
                <span className="fl-city">
                  <strong>
                    {from} <small className="fl-city">{airportCodes[from]}</small>
                  </strong>
                </span>
              </Col>

              <Col md={4}>
                <span>
                    <i className="ion-plane"/>
                    <span className="flight-date"><strong>{moment(props.cardDetails.data.goingDate).format('DD MMM, YY')}</strong></span>
                </span>
              </Col>

              <Col className="fl-manage-col-right" md={4}>
                <span className="fl-city">
                  <strong>
                    <small className="fl-city">{airportCodes[to]}</small> {to}
                  </strong>
                </span>
              </Col>
            </Row>
            <Row>
              <div className="divider"></div>
            </Row>

            <Row className="fl-manage-layer manage-fl-details">
              <Col className="fl-manage-col" md={4}>
                <span>
                  {props.cardDetails.data.passengers} {props.cardDetails.data.passengers===1?"Passenger":"Passengers"}
                </span>
              </Col>
              <Col md={4}>
                <span>
                  Flight No: {props.cardDetails.data.flightNumber}
                </span>
              </Col>
              <Col md={4} className="fl-manage-col-right">
                <span>
                  {props.cardDetails.data.flightClass}
                </span>
              </Col>
            </Row>

            <Row className="fl-manage-layer manage-fl-details">
              <Col className="fl-manage-col" md={6}>
                <span>
                  Departs: {moment(props.cardDetails.data.departureTime).format('LT')}
                </span>
              </Col>
              <Col className="fl-manage-col-right" md={6}>
                <span>
                  Arrives: {moment(props.cardDetails.data.arrivalTime).format('LT')}
                </span>
              </Col>
            </Row>
          </Row>
        </div>
    </div>
  );
}


const FlightCardTRBottom=(props)=>{
    return(
    <div>
      <div className="saved-card-bottom">
        <Row>
          <Col md={7} sm={7} xs={7} className="fl-manage-col">
            <strong><span>Price: </span>
            <small className="currency">&#8358;</small>
            <span className="price">{props.cardDetails.data.price}</span></strong>
              {(props.cardDetails.data.oldPrice && props.cardDetails.data.active) && (<span><small className="strike-currency">&#8358;</small>
              <s className="strike-price">{props.cardDetails.data.oldPrice}</s></span>)}
          </Col>
          <Col md={5} sm={5} xs={5} className="fl-manage-col-right">{!props.cardDetails.data.active?<strong><span className="expired">expired</span></strong>:<BtnFlightBook/>}</Col>
        </Row>
      </div>
    </div>
    );
}

const BtnFlightBook = ({clickHandler}) => (
  <div className="btn btn-flight-book btn-border">
      <Hidden xs sm>
        <i className="ion-android-plane"></i>
      </Hidden>
      <span><strong>book now</strong></span>
  </div>
);

export default SavedFlightCard;
