import React from 'react';
import {Row, Col, Hidden} from 'react-grid-system';
import moment from 'moment';
import {getCity} from "../Utils/strings";
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

const format = 'h:mm a';
const now = moment().hour(0).minute(0);

const DisplayPanel = ({flDetails, numberOfFlights}) => (
  <div className="display-panel">
    <Row>
      <FlightNumber numberOfFlights={numberOfFlights}/>
      <FlightInfo flDetails={flDetails}/>
      <FlightFilter/>
    </Row>
  </div>
);

const FlightNumber = ({numberOfFlights}) => (
  <Col md={6} sm={6} xs={6} lg={2}>
    <div className="flight-number">
      <strong id="numOfFlights">
        {numberOfFlights} <em>{numberOfFlights>1?"flights":"flight"} found.</em>
      </strong>
    </div>
  </Col>
);

const FlightInfo = ({flDetails}) => {
  let adult = parseInt(flDetails.request.adult);
  let children = parseInt(flDetails.request.children);
  let infant = parseInt(flDetails.request.infant);
  let numberOfPassengers= (adult)+(isNaN(children)?0:children)+(isNaN(infant)?0:infant);
  return(
    <Hidden xs sm>
      <Col md={6} lg={3}>
        <div className="flight-info">
          <span id="from-city">
            {getCity[flDetails.request.from]}
          </span>
          <i className="ion-arrow-swap"></i>
          <span id="to-city">
            {getCity[flDetails.request.to]}
          </span>
          <i className="ion-ios-person-outline"></i>
          <span id="numOfPersons">
             {numberOfPassengers } {numberOfPassengers>1?"Passengers":"Passenger"}
           </span>
        </div>
      </Col>
    </Hidden>
  );
}

const FlightFilter = ()=> (
  <Hidden xs sm md>
  <Col lg={7}>
    <div className="flight-filter">
      <span>
        <i className="ion-android-options"></i>
        <span>Filter by </span>

        <span className="">
          <span>Time - </span>
          <TimePicker
            showSecond={false}
            className=""
            format={format}
            use12Hours
            placeholder="from"
          />
          <TimePicker
            showSecond={false}
            className=""
            format={format}
            use12Hours
            placeholder="to"
          />

        </span>
        <span className="filter-text">Filter by Airline - </span>
        <span className="select-container">
          <select>
            <option value="airline">All</option>
            <option value="arik">Arik</option>
            <option value="aero">Aero</option>
            <option value="peace">Air peace</option>
            <option value="arik">Dana</option>
            <option value="aero">First Nation</option>
            <option value="peace">Medview</option>
          </select>
        </span>
      </span>
    </div>
  </Col>
</Hidden>
);
export default DisplayPanel;
