import React from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';
import '../App.css';
import '../../css/ionicons.min.css';

const DisplayPanel = () => (
  <div className="display-panel">
    <Row>
      <DisplayBoardFlightNumber/>
      <DisplayBoardFlightFilter/>
      <DisplayBoardFlightFilter/>
      <DisplayBoardFlightFilter/>
    </Row>
  </div>
);

const DisplayBoardFlightNumber = () => (
  <Col md={3} sm={6} xs={6}>
    <div className="flight-number">
      <strong id="numOfFlights">
        342 <span>saved flights</span>
      </strong>
    </div>
  </Col>
);

const DisplayBoardFlightFilter = ()=> (
  <Col md={3} sm={6} xs={6}>
    <div className="flight-filter">
      <span>
        <i className="ion-android-options"></i>
        <span>Filter by </span>
        <span className="select-container">
          <select>
            <option value="airline"> All Airlines</option>
            <option value="arik">Arik Air</option>
            <option value="aero">Aero Contractors</option>
            <option value="peace">Air Peace</option>
          </select>
        </span>
      </span>
    </div>
  </Col>
);
export default DisplayPanel;
