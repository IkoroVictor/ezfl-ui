import React, {Component} from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';
import {Link} from 'react-router-dom';
import {airportCodes, airlineFullNames, airports} from '../strings';
import lineAndDot from '../../../images/line-and-dot.png';
import imgAero from '../../../images/logos/airlines/aero-logo.png';
import imgDana from '../../../images/logos/airlines/dana-air-logo.png';
import imgFirstNation from '../../../images/logos/airlines/first-nation-logo.png';
import imgMedview from '../../../images/logos/airlines/med-view-logo.png';
import imgArik from '../../../images/logos/airlines/arik-air-logo.png';
import imgAirPeace from '../../../images/logos/airlines/air-peace-logo.png';
import imgOverland from '../../../images/logos/airlines/overland-logo.png';
import moment from 'moment';
import {store} from '../../../store';
import bookmarkIcon from '../../../images/big-bookmark.svg'
import verticalDivider from '../../../images/vertical-line.svg'
import Rodal from 'rodal';

let airlineMap = {
  overland: imgOverland, airpeace: imgAirPeace, arik: imgArik, dana:imgDana, aero:imgAero, firstnation: imgFirstNation, medview: imgMedview
}

//SAVED-FLIGHTS
const Badge = () =>(
  <div className="btn-notification">
    <i className="ion-android-notifications"><div>2</div></i>
  </div>
);

const BtnClose = ()=>(
  <div className="btn-close"><i className="ion-ios-close-outline"></i></div>
);
//---------------------//

const FlightCard = ({flCardDetails}) => (
  <div className="flight-card">
    <FlightCardTop request={flCardDetails.request} type={flCardDetails.type} oneWay={flCardDetails.oneWay} data={flCardDetails.data}/>
    {(flCardDetails.type === "search")?(<FlightCardBottom flCardDetails={flCardDetails}/>):
    (
      <div>
          <BtnClose/>
          {(flCardDetails.data.notifications!==undefined && flCardDetails.data.notifications.length>0) &&<Badge/>}
      </div>
    )}
  </div>
);

const FlightCardTop = (props) => (
  <div className={(props.type==="search")?"card-top":"card-top manager"}>
    <Row>
      <FlightCardTopLeft airline={props.data.airline} type={props.type}/>
      <FlightCardTopRight {...props}/>
    </Row>
  </div>
);

const FlightCardTopLeft = (props) => {
  return (
    <Col md={3} sm={3} xs={3} className="top-left">
      <figure><img src={airlineMap[props.airline]} alt=""/></figure>
    </Col>
  );
}

const FlightCardTopRight = (props) => (
  <Col md={9} sm={9} xs={9} className="top-right">
    {(props.type === "search")?(
      <div>
        <FlightCardTRBottom {...props}/>
        <FlightCardTRTop {...props}/>
      </div>
    ):(
      <div className="card-manage">
        <FlightCardTRTop {...props}/>
        <FlightCardTRBottom {...props}/>
      </div>
    )}
  </Col>
);

const FlightCardTRTop = (props) => (
  <div>
    {(props.type==="search")?(
        <div>
          <Row className="top-right-top" >
              <TravelRoute {...props}/>
          </Row>
        </div>
      ):(
        <div>
          <Row className="top-right-top" >
            <Row className="fl-manage-top">
              <Col className="fl-name-date" md={8}>
                <span className="airline-name">{airlineFullNames[props.data.airline]}</span>
              </Col>
              <Col md={4}><span className="flight-date">{props.data.date}</span></Col>
            </Row>
            <Row className="fl-manage-bottom">
              <Col className="fl-summary" md={12}><span className="flight-summary">{airportCodes[props.data.from]} - {airportCodes[props.data.to]} {/*props.request.passenger*/}1 Passenger{/*props.request.passenger===1?"Passenger":"Passengers"*/}</span></Col>
            </Row>
          </Row>
        </div>
      )
    }
  </div>
);

const TravelRoute = (props) => {
  return (
    <div>
      {props.oneWay?(
        <div>
          <Col md={4} sm={4} xs={4}>
            <div className="location-stamp-departure">
              <div id="departure-city" className="city"><strong>{airportCodes[props.data.from]}</strong></div>
              <div className="stamp-desc">Departs</div>
              <div id="departure-time" className="time">{moment(props.data.departureTime).format('LT')}</div>
            </div>
          </Col>
          <Col md={4} sm={4} xs={4}>
            <img width="26" height="26" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAABeklEQVRIS+2U/zEEQRCFv4uAEIiADBABGSACMkAGMkAGRIAMXAYuAi4C6tua2RpbO7NzQ+1fumprf1TvvH6vX/eCmWIxEw5/DbQNnAJnwD7wCbwANzmgS+AC2AmJj8AT8J5RwLyrADCWssoB+eM9cDD4683qAIGNwwDgPRevFjAlnRLcAlvAMjxbgN9lrDy5WAEq0xU1BWSOustQ2TxcEN9LANdBkT5HICv+CpLYvGFE/U8C6EYAMVkgXWEv1P883KP+MhCgJnYLZumks5HP4SQZ2QO/lfQfAj8UHNflxh7JZq+i7HWQWpZp/lFQJntEBLLBdxMWlamXIXOdaGjfkr1/MPJlyMoDtKZXOqi68CMpapJNKl38L9o2twGiSWJPnZWS1ft6auZoqKgz4roxdGmUs9jiFiClPAaq2YxJV2G8vpfuPNlVRQsjt4h7b5M5q9p1acUe7gy5tsbW1eQcVdH/TVKLdE14/0BNssU5qt3czSA61B7NAbT+Bl8VRyoARbM8AAAAAElFTkSuQmCC"/>
            <div className="travelDate">{moment(props.data.date).format('DD MMM YY')}</div>
          </Col>
          <Col md={4} sm={4} xs={4}>
            <div className="location-stamp-arrival">
              <div id="arrival-city" className="city"><strong>{airportCodes[props.data.to]}</strong></div>
              <div className="stamp-desc">Arrives </div>
              <div id="arrival-time" className="time">{moment(props.data.arrivalTime).format('LT')}</div>
            </div>
          </Col>
        </div>
      ):
      (
        <div className="fl-roundtrip">
        <Col md={2} sm={2} xs={2}>
          <div className="location-stamp-departure">
            <div id="departure-city" className="city">{airportCodes[props.data.from]}</div>
            <div className="stamp-desc">Departs</div>
            <div id="departure-time" className="time">{props.data.departureTime}</div>
          </div>
        </Col>
        <Col md={2} sm={2} xs={2}>
          <img width="26" height="26" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAABeklEQVRIS+2U/zEEQRCFv4uAEIiADBABGSACMkAGMkAGRIAMXAYuAi4C6tua2RpbO7NzQ+1fumprf1TvvH6vX/eCmWIxEw5/DbQNnAJnwD7wCbwANzmgS+AC2AmJj8AT8J5RwLyrADCWssoB+eM9cDD4683qAIGNwwDgPRevFjAlnRLcAlvAMjxbgN9lrDy5WAEq0xU1BWSOustQ2TxcEN9LANdBkT5HICv+CpLYvGFE/U8C6EYAMVkgXWEv1P883KP+MhCgJnYLZumks5HP4SQZ2QO/lfQfAj8UHNflxh7JZq+i7HWQWpZp/lFQJntEBLLBdxMWlamXIXOdaGjfkr1/MPJlyMoDtKZXOqi68CMpapJNKl38L9o2twGiSWJPnZWS1ft6auZoqKgz4roxdGmUs9jiFiClPAaq2YxJV2G8vpfuPNlVRQsjt4h7b5M5q9p1acUe7gy5tsbW1eQcVdH/TVKLdE14/0BNssU5qt3czSA61B7NAbT+Bl8VRyoARbM8AAAAAElFTkSuQmCC"/>
          <div className="travelDate">{props.data.date}</div>
        </Col>
        <Col md={4} sm={4} xs={4}>
          <div className="location-stamp-arrival">
            <div id="arrival-city" className="city">{airportCodes[props.data.to]}</div>
            <div>
              <div className="left-stamp inline">
                <div className="stamp-desc">Arrives</div>
                <div id="arrival-time" className="time">{props.data.arrivalTime}</div>
              </div>
              <div className="right-stamp inline">
                <div className="stamp-desc">Departs</div>
                <div id="departure-time" className="time">{props.data.departureTime}</div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={2} sm={2} xs={2}>
          <img width="26" height="26" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAABeklEQVRIS+2U/zEEQRCFv4uAEIiADBABGSACMkAGMkAGRIAMXAYuAi4C6tua2RpbO7NzQ+1fumprf1TvvH6vX/eCmWIxEw5/DbQNnAJnwD7wCbwANzmgS+AC2AmJj8AT8J5RwLyrADCWssoB+eM9cDD4683qAIGNwwDgPRevFjAlnRLcAlvAMjxbgN9lrDy5WAEq0xU1BWSOustQ2TxcEN9LANdBkT5HICv+CpLYvGFE/U8C6EYAMVkgXWEv1P883KP+MhCgJnYLZumks5HP4SQZ2QO/lfQfAj8UHNflxh7JZq+i7HWQWpZp/lFQJntEBLLBdxMWlamXIXOdaGjfkr1/MPJlyMoDtKZXOqi68CMpapJNKl38L9o2twGiSWJPnZWS1ft6auZoqKgz4roxdGmUs9jiFiClPAaq2YxJV2G8vpfuPNlVRQsjt4h7b5M5q9p1acUe7gy5tsbW1eQcVdH/TVKLdE14/0BNssU5qt3czSA61B7NAbT+Bl8VRyoARbM8AAAAAElFTkSuQmCC"/>
          <div className="travelDate">{props.data.date}</div>
        </Col>
        <Col md={2} sm={2} xs={2}>
          <div className="location-stamp-arrival">
            <div id="arrival-city" className="city">{airportCodes[props.data.from]}</div>
            <div className="stamp-desc">Arrives </div>
            <div id="arrival-time" className="time">{props.data.arrivalTime}</div>
          </div>
        </Col>
      </div>
      )}
    </div>
  )
}

const FlightCardTRBottom = (props) => (
  <div>
  {(props.type==="search")?(
    <div className="top-right-bottom">
        <span><strong>Price: </strong></span>
        <small className="currency"><strong>&#8358;</strong></small>
        <span className="price"><strong>{props.data.price}</strong></span>
    </div>)
  :(
    <div className="top-right-bottom">
      <Row className="manager-pane">
        <Col md={4} sm={4} xs={4}>
          <span>Price: </span>
          <small className="currency">&#8358;</small>
          <span className="price">{props.data.price}</span>
        </Col>
        <Col md={2} sm={2} xs={2}>
          <small className="strike-currency">&#8358;</small>
          <s className="strike-price">{props.data.price}</s>
        </Col>
        <Col md={6} sm={6} xs={6} style={{textAlign:"right"}}><BtnFlightBook/></Col>
      </Row>

    </div>)
  }
</div>
);

class FlightCardBottom extends Component{
  constructor(props){
    super(props);
    this.state = {
      visible: false,
    };
    this.clickHandler=this.clickHandler.bind(this);
  }

  clickHandler(){
    this.setState({
      visible:true
    });
  }

  render(){
    let flightDetails = this.props.flCardDetails;
    return(<div className="card-bottom">
      <Col md={4} sm={4} xs={4}>
        <BtnFlightDetails clickHandler={this.clickHandler}/>
      </Col>
      <Col md={4} sm={4} xs={4}>
        <Hidden xs sm>
          <BtnFlightSave/>
        </Hidden>
      </Col>
      <Col md={4} sm={4} xs={4}>
          <BtnFlightBook/>
      </Col>
      <Rodal animation="slideDown" height={570} visible={this.state.visible} onClose={()=>{this.setState({visible:false})}}>
          <div className="modal-header">
            <figure><img src={airlineMap[flightDetails.data.airline]} alt=""/></figure>
          </div>
          <Row className="modal-middle">
            <Col md={3} sm={3} xs={3} className="vertical-divider">
              <img src={verticalDivider} />
            </Col>
            <Col md={9} sm={9} xs={9} className="extra-flight-data">
              <div className="city top"><strong>{airportCodes[flightDetails.data.from]}</strong></div>
              <div className="time top">{airports[flightDetails.data.from]}</div>
              <div className="time">Departure {moment(flightDetails.data.departureTime).format('LT')}</div>

              <div className="flights-divider"></div>

              <div className="city"><strong>{airportCodes[flightDetails.data.to]}</strong></div>
              <div className="time top">{airports[flightDetails.data.to]}</div>
              <div className="time">Arrival {moment(flightDetails.data.arrivalTime).format('LT')}</div>
            </Col>
          </Row>

          <div className="modal-details">
            <strong>flight: <p>{flightDetails.data.flightNumber}</p></strong>
          </div>
          <div className="modal-details">
            <strong>class: <p>{flightDetails.data.flightClass}</p></strong>
          </div>
          <div className="modal-details">
            <strong>price: <p><small>&#8358;</small>{flightDetails.data.price}</p></strong>
          </div>
          <div className="modal-buttons">
            <Row>
              <Col md={4} sm={4} xs={4}>
                <BtnFlightDetailsPrint/>
              </Col>
              <Col md={4} sm={4} xs={4}>
                <Hidden xs sm>
                  <BtnFlightSave/>
                </Hidden>
              </Col>
              <Col md={4} sm={4} xs={4}>
                  <BtnFlightBook/>
              </Col>
            </Row>
          </div>
          <div>
          </div>
      </Rodal>
    </div>
  );
  }
}


const BtnFlightBook = ({clickHandler}) => (
  <div className="btn btn-flight-book btn-border" onClick={()=>{/*clickHandler()*/}}>
      <Hidden xs sm>
        <i className="ion-android-plane"></i>
      </Hidden>
      <span><strong>book now</strong></span>
  </div>
);

const BtnFlightDetails = ({clickHandler}) => {
  return(
    <div className="btn btn-flight-details" onClick={()=>{clickHandler()}}>
        <Hidden xs sm>
          <i className="ion-more"></i>
        </Hidden>
        <span><strong>details</strong></span>
  </div>
);
}

const BtnFlightDetailsPrint = ({clickHandler}) => {
  return(
    <div className="btn btn-flight-details" onClick={()=>{/*clickHandler()*/}}>
        <Hidden xs sm>
          <i className="ion-ios-printer-outline"></i>
        </Hidden>
        <span><strong>print</strong></span>
  </div>
);
}

const BtnFlightSave=({clickHandler})=>{
  return(<div className="btn btn-flight-save" onClick={()=>{/*clickHandler()}*/}}>
        <Hidden xs sm>
          <img src={bookmarkIcon} alt=""/>
        </Hidden>
        <span><strong>save flight</strong></span>
    </div>
);
}
export default FlightCard;
