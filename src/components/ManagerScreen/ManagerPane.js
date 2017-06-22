import React from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';
import '../App.css';
import FlightCard from '../Utils/components/FlightCard';
import DisplayPanel from './FilterPane';

const ManagerPane = () => (
  <div className='results-pane'>
    <div>

      <Container>
        <DisplayPanel/>
        <Row>
          <Col md={5} className="Ad-col">
              <AdPane/>
          </Col>
          <Col md={7}>
            <FlightCard flCardDetails={{type: "expired", oneWay: false, data:{airline:"apk", notifications:["price changed from N15 to N20", "flight canceled"]}}}/>
            <FlightCard flCardDetails={{type: "expired", oneWay: false, data:{airline:"ara"}}}/>
            <FlightCard flCardDetails={{type: "expired", oneWay: false, data:{airline:"dan"}}}/>
            <FlightCard flCardDetails={{type: "expired", oneWay: false, data:{airline:"frn"}}}/>
            <FlightCard flCardDetails={{type: "active", oneWay: false, data:{airline:"mev"}}}/>
            <FlightCard flCardDetails={{type: "active", oneWay: false, data:{airline:"ola"}}}/>
            <FlightCard flCardDetails={{type: "active", oneWay: false, data:{airline:"aer"}}}/>
            <FlightCard flCardDetails={{type: "active", oneWay: false, data:{airline:"apk"}}}/>

            <FlightCard flCardDetails={{type: "expired", oneWay: true, data:{airline:"apk"}}}/>
            <FlightCard flCardDetails={{type: "expired", oneWay: true, data:{airline:"ara"}}}/>
            <FlightCard flCardDetails={{type: "expired", oneWay: true, data:{airline:"dan"}}}/>
            <FlightCard flCardDetails={{type: "expired", oneWay: true, data:{airline:"frn"}}}/>
            <FlightCard flCardDetails={{type: "active", oneWay: true, data:{airline:"mev"}}}/>
            <FlightCard flCardDetails={{type: "active", oneWay: true, data:{airline:"ola"}}}/>
            <FlightCard flCardDetails={{type: "active", oneWay: true, data:{airline:"aer"}}}/>
            <FlightCard flCardDetails={{type: "active", oneWay: true, data:{airline:"apk"}}}/>
          </Col>
        </Row>
      </Container>
    </div>

  </div>
);

const AdPane = () => (
  <div className="ad">
    <Hidden sm xs>
    <p>Sponsored Ad</p>
    <div className="ad-box"></div>
      </Hidden>
  </div>
);

export default ManagerPane;
