import React from 'react';
import {Row, Col, Hidden} from 'react-grid-system';
import moment from 'moment';
import {getCity} from "../Utils/strings";
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import {Sticky } from 'react-sticky';

const format = 'h:mm a';
const now = moment().hour(0).minute(0);

const DisplayPanel = ({request, numberOfFlights, onTimeToUpdate, onTimeFromUpdate, onTimePickerClose, timeTo, timeFrom, onAirlineUpdate, airlineSelect}) => (
    <Sticky topOffset={155}>
      { ({style}) => {
          var css = style;
          if(css.position==="fixed"){
            css.top=40;
            css.zIndex=1;
          }
          return(
            <div className="display-panel" style={css}>
              <Row>
                <FlightNumber numberOfFlights={numberOfFlights}/>
                <FlightInfo request={request}/>
                <FlightFilter onTimeToUpdate={onTimeToUpdate} onTimeFromUpdate={onTimeFromUpdate} onTimePickerClose={onTimePickerClose} timeTo={timeTo} timeFrom={timeFrom} onAirlineUpdate={onAirlineUpdate} airlineSelect={airlineSelect}/>
              </Row>
            </div>
          )}
    }
    </Sticky>
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

const FlightInfo = ({request}) => {
  let adult = parseInt(request.adult);
  let children = parseInt(request.children);
  let infant = parseInt(request.infant);
  let numberOfPassengers= (adult)+(isNaN(children)?0:children)+(isNaN(infant)?0:infant);
  return(
    <Hidden xs sm>
      <Col md={6} lg={3}>
        <div className="flight-info">
          <span id="from-city">
            {getCity[request.from]}
          </span>
          <i className="ion-arrow-swap"></i>
          <span id="to-city">
            {getCity[request.to]}
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

const FlightFilter = ({onTimeFromUpdate, onTimeToUpdate, onTimePickerClose, timeFrom, timeTo, onAirlineUpdate, airlineSelect})=> (
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
			value={timeFrom}
			onChange={onTimeFromUpdate}
			onClose={onTimePickerClose}
          />
          <TimePicker
            showSecond={false}
            className=""
            format={format}
            use12Hours
            placeholder="to"
	 		value={timeTo}
			onChange={onTimeToUpdate}
			onClose={onTimePickerClose}
          />

        </span>
        <span className="filter-text">Filter by Airline - </span>
        <span className="select-container">
          <select onChange={onAirlineUpdate} value={airlineSelect}>
            <option value="">All</option>
            <option value="arik">Arik</option>
            <option value="aero">Aero</option>
            <option value="peace">Air peace</option>
            <option value="dana">Dana</option>
            <option value="firstnation">First Nation</option>
            <option value="medview">Medview</option>
          </select>
        </span>
      </span>
    </div>
  </Col>
</Hidden>
);
export default DisplayPanel;
