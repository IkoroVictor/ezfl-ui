import React from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';
import '../App.css';
import '../../css/ionicons.min.css';

const DisplayPanel = (props) => (
  <div className="display-panel">
    <Row>
      <DisplayBoardFlightNumber/>
      <DisplayBoardFlightFilter filterBy="status" options={["active", "expired"]}/>
      <DisplayBoardFlightFilter filterBy="airline" options={["aero", "airpeace", "arik", "dana", "firstnation", "medview", "overland"]}/>
      <DisplayBoardFlightFilter filterBy="date" options={[]}/>
    </Row>
  </div>
);

const DisplayBoardFlightNumber = () => (
  <Col md={3} sm={6} xs={6}>
    <div className="flight-number">
      <strong id="numOfFlights">
        3 <span> active flights Found</span>
      </strong>
    </div>
  </Col>
);

const DisplayBoardFlightFilter = (props)=> (
  <Col md={3} sm={6} xs={6}>
    <div className="flight-filter">
      <span>
        <i className="ion-android-options"></i>
        <span>Filter by {props.filterBy}: </span>
        <span className="select-container">
          <select>
            {props.options.map((val)=>{
              return(
                <option value={val}>{val}</option>
              )
            })}
          </select>
        </span>
      </span>
    </div>
  </Col>
);
export default DisplayPanel;
