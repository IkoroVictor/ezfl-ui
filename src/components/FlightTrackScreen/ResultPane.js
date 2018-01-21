import React from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';
import '../../stylesheets/css/App.css';
import FlightCard from '../Utils/FlightCard';
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
            <FlightCard/>
            <FlightCard/>
            <FlightCard/>
            <FlightCard/>
            <FlightCard/>
            <FlightCard/>
            <FlightCard/>
            <FlightCard/>
            <FlightCard/>
            <FlightCard/>
            <FlightCard/>
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
