import React from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';
import '../App.css';
import FlightCard from '../Utils/components/FlightCard';
import DisplayPanel from './FilterPane';

const ResultPane = () => (
  <div className='results-pane'>
    <div>

      <Container>
        <DisplayPanel/>
        <Row>
          <Col md={4}>
              <AdPane/>
          </Col>
          <Col md={8}  style={{padding:"0px"}}>
            <FlightCard flCardDetails={{type: "search", oneWay: false, data:{airline:"apk"}}}/>
            <FlightCard flCardDetails={{type: "search", oneWay: false, data:{airline:"ara"}}}/>
            <FlightCard flCardDetails={{type: "search", oneWay: false, data:{airline:"dan"}}}/>
            <FlightCard flCardDetails={{type: "search", oneWay: false, data:{airline:"frn"}}}/>
            <FlightCard flCardDetails={{type: "search", oneWay: false, data:{airline:"mev"}}}/>
            <FlightCard flCardDetails={{type: "search", oneWay: false, data:{airline:"ola"}}}/>
            <FlightCard flCardDetails={{type: "search", oneWay: false, data:{airline:"aer"}}}/>
            <FlightCard flCardDetails={{type: "search", oneWay: false, data:{airline:"apk"}}}/>

            <FlightCard flCardDetails={{type: "search", oneWay: true, data:{airline:"apk"}}}/>
            <FlightCard flCardDetails={{type: "search", oneWay: true, data:{airline:"ara"}}}/>
            <FlightCard flCardDetails={{type: "search", oneWay: true, data:{airline:"dan"}}}/>
            <FlightCard flCardDetails={{type: "search", oneWay: true, data:{airline:"frn"}}}/>
            <FlightCard flCardDetails={{type: "search", oneWay: true, data:{airline:"mev"}}}/>
            <FlightCard flCardDetails={{type: "search", oneWay: true, data:{airline:"ola"}}}/>
            <FlightCard flCardDetails={{type: "search", oneWay: true, data:{airline:"aer"}}}/>
            <FlightCard flCardDetails={{type: "search", oneWay: true, data:{airline:"apk"}}}/>
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

export default ResultPane;
