import React from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';
import '../App.css';
import '../../css/ionicons.min.css';

const DisplayPanel = () => (
  <div className="display-panel">
    <Row>
      <DisplayBoardFlightNumber/>
      <DisplayBoardFlightInfo/>
      <DisplayBoardFlightFilter/>
    </Row>
  </div>
);

const DisplayBoardFlightNumber = () => (
  <Col md={3} sm={6} xs={6}>
    <div className="flight-number">
      <strong id="numOfFlights">
        14 <em>flights found.</em>
      </strong>
    </div>
  </Col>
);

const DisplayBoardFlightInfo = () => (
  <Hidden xs sm>
    <Col md={6}>
      <div className="flight-info">
        <span id="from-city">
          Lagos
        </span>
        <i className="ion-arrow-swap"></i>
        <span id="to-city">
          Calabar
        </span>
        <i className="ion-ios-person-outline"></i>
        <span id="numOfPersons">
           1 Person
         </span>
      </div>
    </Col>
  </Hidden>
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
