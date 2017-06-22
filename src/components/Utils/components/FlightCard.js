import React from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';
import {Link} from 'react-router-dom';
import lineAndDot from '../../../images/line-and-dot.png';
import imgAero from '../../../images/logos/airlines/aero-logo.png';
import imgDana from '../../../images/logos/airlines/dana-air-logo.png';
import imgFirstNation from '../../../images/logos/airlines/first-nation-logo.png';
import imgMedview from '../../../images/logos/airlines/med-view-logo.png';
import imgArik from '../../../images/logos/airlines/arik-air-logo.png';
import imgAirPeace from '../../../images/logos/airlines/air-peace-logo.png';
import imgOverland from '../../../images/logos/airlines/overland-logo.png';

const Badge = () =>(
  <div className="btn-notification">
    <i className="ion-android-notifications"><div>2</div></i>
  </div>
);

const BtnClose = ()=>(
  <div className="btn-close"><i className="ion-ios-close-outline"></i></div>
);

const FlightCard = ({flCardDetails}) => (
  <div className="flight-card">
    <FlightCardTop flCardDetails={flCardDetails}/>
    {(flCardDetails.type === "search") && <FlightCardBottom flCardDetails={flCardDetails}/>}
    {(flCardDetails.type !== "search") &&
      (<div>
          <BtnClose/>
          {(flCardDetails.data.notifications!==undefined && flCardDetails.data.notifications.length>0) &&<Badge/>}
      </div>)
    }
  </div>
);

const FlightCardTop = ({flCardDetails}) => (
  <div className={(flCardDetails.type==="search")?"card-top":"card-top manager"}>
    <Row>
      <FlightCardTopLeft airline={flCardDetails.data.airline} oneWay={flCardDetails.oneWay} type={flCardDetails.type}/>
      <FlightCardTopRight flCardDetails={flCardDetails}/>
    </Row>
  </div>
);

const FlightCardTopLeft = ({airline, type}) => {
  let airlineMap = {
    ola: imgOverland, apk: imgAirPeace, ara: imgArik, dan:imgDana, aer:imgAero, frn: imgFirstNation, mev: imgMedview
  }

  return (
    <Col md={3} sm={3} xs={3} className="top-left">
      <figure><img src={airlineMap[airline]} alt=""/></figure>
    </Col>
  );
}

const FlightCardTopRight = ({flCardDetails}) => (
  <Col md={9} sm={9} xs={9} className="top-right">
    {(flCardDetails.type === "expired" || flCardDetails.type === "active")?(
      <div className="card-manage">
        <FlightCardTRTop flCardDetails={flCardDetails}/>
        <FlightCardTRBottom flCardDetails={flCardDetails}/>
      </div>
    ):(
      <div>
        <FlightCardTRBottom flCardDetails={flCardDetails}/>
        <FlightCardTRTop flCardDetails={flCardDetails}/>
      </div>
    )}
  </Col>
);

const FlightCardTRTop = ({flCardDetails}) => (
  <div>
    {(flCardDetails.type==="expired" || flCardDetails.type==="active")?(
        <div>
          <Row className="top-right-top" >
            <Row className="fl-manage-top">
              <Col className="fl-name-date" md={8}><span className="airline-name">Arik Air</span></Col>
              <Col md={4}><span className="flight-date">May 26, 2017</span></Col>
            </Row>
            <Row className="fl-manage-bottom">
              <Col className="fl-summary" md={12}><span className="flight-summary">LOS - ABV 1 person</span></Col>
            </Row>
          </Row>
        </div>
      ):(
        <div>
          <Row className="top-right-top" >
              <TravelRoute flCardDetails={flCardDetails.data}/>
          </Row>
        </div>
      )
    }
  </div>
);
/////////////////not worked on
const FlightCardTRBottom = ({flCardDetails}) => (
  <div>
  {(flCardDetails.type==="search")?(
    <div className="top-right-bottom">
      <span>Price: </span>
      <small className="currency">&#8358;</small>
      <span id="price" className="price">55,000</span>
    </div>)
  :(
    <div className="top-right-bottom">
      <Row className="manager-pane">
        <Col md={4} sm={4} xs={4}>
          <span>Price: </span>
          <small className="currency">&#8358;</small>
          <span id="price" className="price">55,000</span>
        </Col>
        <Col md={2} sm={2} xs={2}>
          <small className="strike-currency">&#8358;</small>
          <s id="strike-price" className="strike-price">55,000</s>
        </Col>
        <Col md={6} sm={6} xs={6} style={{textAlign:"right"}}><BtnFlightBook/></Col>
      </Row>

    </div>)
  }
</div>

);

const TravelRoute = ({data}) => (
  <div style={{display:"table", margin:"0 auto"}}>
  <Col md={3} sm={3} xs={3}>
    <div className="location-stamp-departure">
      <div id="departure-city" className="city">LOS</div>
      <div id="departure-time" className="time">2:30pm</div>
    </div>
  </Col>
  <Col md={6} sm={6} xs={6}>
    <figure><img src={lineAndDot} alt="path to trip"/></figure>
  </Col>
  <Col md={3} sm={3} xs={3}>
    <div className="location-stamp-arrival">
      <div id="arrival-city" className="city">CBQ</div>
      <div id="arrival-time" className="time">4:00pm</div>
    </div>
  </Col>
</div>
);

const FlightCardBottom = ({flCardDetails}) => (
  <div className="card-bottom">
    <Col md={4} sm={4} xs={4}>
      <BtnFlightDetails/>
    </Col>
    <Col md={4} sm={4} xs={4}>
      <Hidden xs sm>
        <BtnFlightSave/>
      </Hidden>
    </Col>
    <Col md={4} sm={4} xs={4}>
        <BtnFlightBook/>
    </Col>
  </div>
);

const BtnFlightBook = () => (
  <div className="btn btn-flight-book btn-border">
    <Hidden xs sm>
      <i className="ion-android-plane"></i>
    </Hidden>
    <span>book now</span>
  </div>
);
const BtnFlightDetails = () => (
    <div className="btn btn-flight-details">
      <Hidden xs sm>
        <i className="ion-more"></i>
      </Hidden>
    <span>details</span>
  </div>

);

const BtnFlightSave = () => (
  <div className="btn btn-flight-save">
    <Hidden xs sm>
      <i className="ion-android-checkbox-outline"></i>
    </Hidden>
  <span>save flight</span>
</div>
);

export default FlightCard;
//ion-android-notifications-none  ion-close-round ion-ios-close-outline

//ion-android-notifications-off ion-android-notifications
