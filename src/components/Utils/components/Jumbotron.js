import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import {Link} from 'react-router-dom';
import {Hidden} from 'react-grid-system';

const Jumbotron = ({forStyle, manager}) => {
  console.log("Manager: ",manager);
  if(manager){

  }

  return(
  <div className={forStyle}>
    <div className="hero-search-box">
      {!manager && <SearchComponent/>}
      {manager && <h2>Manage Flights</h2>}
    </div>
  </div>
)};

const SearchComponent = () => (
  <div>
    <div className="search-component">

      <FlightRoute/>

      <div className="flight-location-wrapper">
        <DatePickerComponent/>
        <div>
          <BtnRoundTrip/>
        </div>
      </div>



      <div className="flight-details wrapper">

        <Picker header="flight type" options={["economy", "business", "first-class", "premium"]}/>

        <div className="picker-passengers-wrapper">
          <div className="picker-wrapper passenger">
            <Picker header="adults" options={["01", "02", "03", "04", "05"]}/>
          </div>

          <div className="picker-wrapper passenger">
            <Picker header="Children" options={["--","01", "02", "03", "04", "05"]}/>
          </div>

          <div className="picker-wrapper passenger">
            <Picker header="infants" options={["--", "01", "02", "03", "04", "05"]}/>
          </div>
        </div>

      </div>


      <BtnSearch/>
    </div>

  </div>
);

/*****FLIGHT-ROUTE******/
const FlightRoute = () => (
  <div className="fl-route">
    <FlightRouteLocationStamp direction="from" location="LOS"/>
    <i className="ion-android-plane"/>
    <FlightRouteLocationStamp direction="to" location="CBQ"/>
  </div>
);

const FlightRouteLocationStamp = ({direction, location}) => (
  <div className="fl-location-stamp">
    <p>{direction}</p>
    <span>{location}</span>
    <i className="ion-arrow-down-b"/>
  </div>
);
/**************************/

const Picker =(props) =>(
  <div className="picker-box">
      <p className="on-search-component">{props.header}</p>
      <select className="picker-input" name="flightClass" id="roundFlightClass">
            {
              props.options.map((val)=>{
                return(
                  <option value={val}>{val}</option>
                )
              })
            }
      </select>
  </div>
);

/*****DATE-PICKER******/

class DatePickerComponent extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      departureStartDate: moment(),
      arrivalStartDate: moment()
    };
    this.handleChangeDeparture = this.handleChangeDeparture.bind(this);
    this.handleChangeArrival = this.handleChangeArrival.bind(this);
  }

  handleChangeArrival(date) {
    this.setState({
      arrivalStartDate: date
    });
  }

  handleChangeDeparture(date) {
    this.setState({
      departureStartDate: date
    });
  }

  render(){
    return (
      <div className="date-picker">
        <div className="date-picker-sub-left" style={{display:"inline-block"}}>
          <p className="on-search-component">depature</p>
          <div className="date-component">
            <DatePicker placeholderText="Click to select a date"
              customInput={<CustomDatePicker/>}
              dateFormat="DD MMM YY"
              selected={this.state.departureStartDate}
              onChange={this.handleChangeDeparture}
              disabled={false}
              minDate={moment()}
              maxDate={moment().add(3, "months")}
            />
          </div>
        </div>
        <div className="date-picker-sub-right" style={{display:"inline-block"}}>
          <p className="on-search-component">arrival</p>
          <div className="date-component">
            <DatePicker placeholderText="Click to select a date"
              customInput={<CustomDatePicker/>}
              dateFormat="DD MMM YY"
              selected={this.state.arrivalStartDate}
              onChange={this.handleChangeArrival}
              disabled={false}
              minDate={moment()}
              maxDate={moment().add(3, "months")}
            />
          </div>
        </div>
      </div>
    );
  }
}

class CustomDatePicker extends React.Component {

  render () {
    return (
      <div className="date-picker-sub"
        onClick={this.props.onClick}>
        <i className="ion-calendar"></i>
        {this.props.value}
      </div>
    )
  }
}

CustomDatePicker.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string
}

/***************BtnSearch***************/
const BtnSearch = function(props){
return(
  <div className="btn-search">
    <Link to="/search">Search for flights</Link>
  </div>
)};

/**************ROUNDTRIP TOGGLE*******************/
const BtnRoundTrip = () =>(
  <div className="toggler"> one way
      <label className="switch">
          <input type="checkbox"/>
          <div className="slider round"></div>
      </label> round trip
    </div>
);



export default Jumbotron;
