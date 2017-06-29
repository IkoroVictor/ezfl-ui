import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Hidden } from 'react-grid-system';
import {airportCodes} from '../strings';
import AlertContainer from 'react-alert';
import { withRouter } from 'react-router-dom';
import {store} from '../../../store';
import {SaveRequest} from '../actions/searchFlight';


class SearchComponent extends Component{
  constructor(props){
    super(props);
    this.state={
      from:"los",
      to:"---",
      arrival:"",
      departure:"",
      oneWay:true,
      adult:1,
      children:0,
      infant:0,
      direction: "from",
      dropdown:false,
      error:"",
      isMobile:false
    };
    this.fromStampClickHandler = this.fromStampClickHandler.bind(this);
    this.toStampClickHandler = this.toStampClickHandler.bind(this);
    this.locationSelect = this.locationSelect.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.departureDateSelect = this.departureDateSelect.bind(this);
    this.arrivalDateSelect = this.arrivalDateSelect.bind(this);

    this.roundtripSelect = this.roundtripSelect.bind(this);
    this.flightTypeSelect = this.flightTypeSelect.bind(this);
    this.adultSelect = this.adultSelect.bind(this);
    this.childrenSelect = this.childrenSelect.bind(this);
    this.infantSelect = this.infantSelect.bind(this);

    this.alertOptions = {
      offset: 50,
      position: 'top left',
      theme: 'dark',
      time: 5000,
      transition: 'fade'
    }
    this.volume = 2;
  }

  onDropDownBlur =() => {
    this.setState({
      dropdown: false
    });
  }

  showAlert = () => {
    this.msg.error(this.error, {
      time: 5000,
      type: 'error',
      icon: <img src="" />
    })
  }

  componentWillMount(){
    let isMobile = false;
    if (/Mobi/i.test(navigator.userAgent) || /Anroid/i.test(navigator.userAgent)) {
      isMobile = true
    }

    this.request = store.getState().request.request;
    if(this.request !== undefined){
      this.setState({
        from:this.request.from,
        to:this.request.to,
        arrival:this.request.arrival,
        departure:this.request.departure,
        oneWay:this.request.oneWay,
        adult:parseInt(this.request.adult),
        children:parseInt(this.request.children),
        infant:parseInt(this.request.infant)
      });
    }else{
      this.setState({
        arrival: moment(),
        departure: moment(),
        isMobile: isMobile
      });
    }
  }

  fromStampClickHandler(){
    this.setState({
      direction: "from",
      dropdown:this.state.dropdown?false:true
    });
  }

  toStampClickHandler(){
    this.setState({
      direction: "to",
      dropdown:this.state.dropdown?false:true
    });
  }

  locationSelect(city){
    if(this.state.direction==="to"){
      this.setState({
        to: city,
        dropdown:false
      });
    }else if(this.state.direction==="from"){
      this.setState({
        from: city,
        dropdown:false
      });
    }
  }

  departureDateSelect(date){
    this.setState({
      departure:date
    });
  }

  arrivalDateSelect(date){
    this.setState({
      arrival:date
    });
  }

  flightTypeSelect(type){
    this.setState({
      flightType:type
    });
  }

  adultSelect(number){
    this.setState({
      adult:number
    });
  }

  childrenSelect(number){
    this.setState({
      children:number
    });
  }

  infantSelect(number){
    this.setState({
      infant:number
    });
  }

  roundtripSelect(){
    this.setState({
      oneWay:this.state.oneWay?false:true
    });
  }

  onSearch(){
    this.error =""
    try{
      this.verifyData();
    }catch(e){

    }

    if(this.error!==""){
      this.showAlert();
    }else{
      this.saveRequestToRedux();
      this.props.searchHandler!==undefined?this.props.searchHandler():this.props.history.push("/search");
    }
  }

  saveRequestToRedux(){
    store.dispatch(SaveRequest({request:this.state}));
  }

   verifyData(){
    let data = this.state;
    if(data.from==="---"){
      this.error = "Please select departure city";
      throw new Error();
    }
    if(data.to==="---"){
      this.error = "Please select destination city";
      throw new Error();
    }
    if(data.oneWay===false){
        this.error = "Round trip search currently unavailable";
        throw new Error();
        if(data.arrival==="" || data.departure===""){
            this.error = "Please select arrival date";
            throw new Error();
        }
    }

    if(data.infant > data.adult){
      this.error = "Number of infants cannot be greater than number of adults";
      throw new Error();
    }

      this.error = "";
    }

  render(){
    return(
  <div>
    <AlertContainer ref={a => this.msg = a} {...this.alertOptions}/>
    <div className="search-component">
      <div className="search-component-piece left">
        <div className="search-component-location">
          <div className="fl-route">
            <FlightRouteLocationStamp direction="from" location={this.state.from} clickHandler={this.fromStampClickHandler}/>
            {this.state.oneWay?
              (
                <div className="fl-route-plane-icon">
                  <i className="ion-android-plane" />
                </div>
              ):(
                <div className="fl-route-plane-icon roundtrip">
                  <i className="ion-android-plane" />
                  <i className="ion-android-plane inverse" />
                </div>
              )}
            <FlightRouteLocationStamp direction="to" location={this.state.to} clickHandler={this.toStampClickHandler}/>
          </div>
          {this.state.dropdown && (<FlightRouteDropDown onLocationSelect={this.locationSelect} onDropDownBlur={this.onDropDownBlur}/>)}
        </div>
        <div className="flight-location-wrapper">
          <DatePickerComponent arrivalDateSelect={this.arrivalDateSelect} departureDateSelect={this.departureDateSelect} departure={this.state.departure} arrival={this.state.arrival} oneWay={this.state.oneWay}/>
          {/*(this.state.isMobile)
            ?<MobileDatePickerComponent arrivalDateSelect={this.arrivalDateSelect} departureDateSelect={this.departureDateSelect} departure={this.state.departure} arrival={this.state.arrival} oneWay={this.state.oneWay}/>
            :<DatePickerComponent arrivalDateSelect={this.arrivalDateSelect} departureDateSelect={this.departureDateSelect} departure={this.state.departure} arrival={this.state.arrival} oneWay={this.state.oneWay}/>*/}
          <div>
            <BtnRoundTrip roundtripSelect={this.roundtripSelect}/>
          </div>
        </div>
      </div>

      <div className="search-component-piece right">
        <div className="flight-details wrapper">
          <div className="picker-passengers-wrapper">
            <div className="picker-wrapper passenger">
              <Picker header="adult" options={["01", "02", "03", "04", "05"]} handler={this.adultSelect} initialValue={this.state.adult}/>
            </div>

            <div className="picker-wrapper passenger">
              <Picker header="Children" options={["--", "01", "02", "03", "04", "05"]} handler={this.childrenSelect} initialValue={this.state.children}/>
            </div>

            <div className="picker-wrapper passenger">
              <Picker header="infant" options={["--", "01", "02", "03", "04", "05"]} handler={this.infantSelect} initialValue={this.state.infant}/>
            </div>
          </div>
        </div>
        <BtnSearch clickHandler={this.onSearch}/>
      </div>
    </div>

  </div>
);
}
}

const FlightRouteDropDown = ({onLocationSelect, onDropDownBlur}) => {
  return(
      <div className="search-component-location-box" onBlur={()=>{onDropDownBlur()}}>
        {
          Object.keys(airportCodes).map(function(key, index){
            return(<div className="location-item" key={index} onClick={()=>onLocationSelect(airportCodes[key])}>
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                  <path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
              <span>{key}</span>
              <div className="code">
                <label>{airportCodes[key]}</label>
              </div>
            </div>)
          })
        }
    </div>
  );
}

const FlightRouteLocationStamp = ({ direction, location, clickHandler}) => (
  <div className="fl-location-stamp" onClick={()=>{clickHandler(direction)}}>
    <p>{direction}</p>
    <span>{location}</span>
    <i className="ion-arrow-down-b" />
  </div>
);
/**************************/

const Picker = ({handler, header, options, initialValue}) => {

let a =1;
  return(
    <div className="picker-box">
      <p className="on-search-component">{header}</p>
      <select className="picker-input" name="flightClass" id="roundFlightClass" onChange={(e)=>{handler(e.target.value)}}>
        {
          options.map((val, key) => {
            return (
              <option value={val} key={key} selected={initialValue===parseInt(val)?"selected":""}>{val}</option>
            )
          })
        }
      </select>
    </div>
  );
}

/*****DATE-PICKER******/
class DatePickerComponent extends Component {
  constructor(props) {
    super(props)
    this.handleChangeDeparture = this.handleChangeDeparture.bind(this);
    this.handleChangeArrival = this.handleChangeArrival.bind(this);
  }

  handleChangeArrival(date) {
    this.props.arrivalDateSelect(date);
  }

  handleChangeDeparture(date) {
    this.props.departureDateSelect(date);
  }

  render() {
    return (
      <div className="date-picker">
        <div className="date-picker-sub-left" style={{ display: "inline-block" }}>
          <p className="on-search-component">departure</p>
          <div className="date-component">
            <DatePicker placeholderText="Click to select a date"
              customInput={<CustomDatePicker />}
              dateFormat="DD MMM YY"
              selected={this.props.departure}
              onChange={this.handleChangeDeparture}
              disabled={false}
              minDate={moment()}
              maxDate={moment().add(2, "weeks")}
            />
          </div>
        </div>
        <div className={this.props.oneWay?("date-picker-sub-right disabled"):("date-picker-sub-right")} style={{ display: "inline-block" }}>
          <p className="on-search-component">arrival</p>
          <div className="date-component">
            <DatePicker placeholderText="Click to select a date"
              customInput={<CustomDatePicker />}
              dateFormat="DD MMM YY"
              selected={this.props.oneWay?(""):(this.props.arrival)}
              onChange={this.handleChangeArrival}
              disabled={this.props.oneWay}
              minDate={moment()}
              maxDate={moment().add(2, "weeks")}
            />
          </div>
        </div>
      </div>
    );
  }
}

class MobileDatePickerComponent extends Component{
  constructor(props) {
    super(props)
    this.handleChangeDeparture = this.handleChangeDeparture.bind(this);
    this.handleChangeArrival = this.handleChangeArrival.bind(this);
  }

  handleChangeArrival() {
    console.log(this.dateInput.value);
    this.props.arrivalDateSelect(moment(this.dateInput.value));
  }

  handleChangeDeparture() {
    console.log(this.dateInput.value);
    this.props.departureDateSelect(moment(this.dateInput.value));
  }

  render() {
    let min = moment().format("YYYY/MM/DD");
    let max = moment().add(3, 'M').format("YYYY/MM/DD");
    return (
      <div className="date-picker mobile">
        <div className="date-picker-sub-left" style={{ display: "inline-block" }}>
          <p className="on-search-component">departure</p>
          <div className="date-component">
            <div>
            <i className="ion-calendar"></i>
            <input ref={(input) => { this.dateInput = input; }}  type={"date"} min={min} max={max} onChange={this.handleChangeDeparture}/>
          </div>
          </div>
        </div>
        <div className={this.props.oneWay?("date-picker-sub-right disabled"):("date-picker-sub-right")} style={{ display: "inline-block" }}>
          <p className="on-search-component">arrival</p>
          <div className="date-component">
            <div>
            <i className="ion-calendar"></i>
            <input ref={(input) => { this.dateInput = input; }} type={"date"} min={min} max={max} onChange={this.handleChangeDeparture}/>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

class CustomDatePicker extends React.Component {
  render() {
    return (
      <div className="date-picker-sub"
        onClick={this.props.onClick}>
        <i className="ion-calendar"></i>
        <span>{this.props.value===""?"--":this.props.value}</span>
      </div>
    )
  }
}

CustomDatePicker.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string
}

/***************BtnSearch***************/
const BtnSearch = function (props) {
  return (
    <div className="btn-search" onClick={()=>{props.clickHandler()}}>
      SEARCH FOR FLIGHTS
    </div>
  )
};

/**************ROUNDTRIP TOGGLE*******************/
const BtnRoundTrip = ({roundtripSelect}) => (
  <div className="toggler"> one way
      <label className="switch">
        <input type="checkbox" onChange={()=>{roundtripSelect()}}/>
        <div className="slider round"></div>
      </label> round trip
    </div>
);


export default withRouter(SearchComponent);
