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

class FlightCard extends Component{
  constructor(props){
    super(props);
    this.state={
      modalVisible:false,
      cost:(this.props.data.validPrices[this.props.data.selectedClassId].cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      flightClass:this.props.data.validPrices[this.props.data.selectedClassId].class,
      selectedClassId: this.props.data.selectedClassId,
      numberOfClasses: this.props.data.NumberOfClasses,
      validPrices:this.props.data.validPrices
    }
    this.next=this.next.bind(this);
    this.prev=this.prev.bind(this);
    this.loadPriceAndClass=this.loadPriceAndClass.bind(this);
    this.showModal=this.showModal.bind(this);
  }

  prev(){
    let base = 0;
    let prevId = this.state.selectedClassId+1;
    let isAtMax = (this.state.selectedClassId+1)>(this.state.numberOfClasses-1);
    let newId = isAtMax?base:prevId;
    this.setState({
      selectedClassId: newId
    });
    this.loadPriceAndClass();
  }

  next(){
    let base = this.state.numberOfClasses-1;
    let nextId = (this.state.selectedClassId-1);
    let isAtMin = ((this.state.selectedClassId-1)<0);
    let newId = isAtMin?base:nextId
    this.setState({
      selectedClassId:newId
    });
    this.loadPriceAndClass();
  }

  loadPriceAndClass(){
    this.setState({
      cost:(this.state.validPrices[this.state.selectedClassId].cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      flightClass:this.state.validPrices[this.state.selectedClassId].class
    });
  }

  showModal(){
    this.setState({
      modalVisible:true
    });
  }

  componentWillMount(){
    if(this.state.numberOfClasses>1){
      let firstCost = this.state.validPrices[0].cost;
      let lastCost = this.state.validPrices[this.state.selectedClassId].cost;

      if(lastCost > firstCost){
        this.setState({
          selectedClassId: 0,
          cost:(this.props.data.validPrices[0].cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          flightClass:this.props.data.validPrices[0].class
        });
      }
    }

      if(this.state.cost==="0" && this.state.numberOfClasses>1){
        debugger;
        for(let i=0; i<this.state.numberOfClasses; i++){
          let base = this.state.numberOfClasses-1;
          let nextId = (this.state.selectedClassId-1);
          let isAtMin = ((this.state.selectedClassId-1)<0);
          let newId = isAtMin?base:nextId;
          let newCost = (this.state.validPrices[newId].cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          let newFlClass = this.state.validPrices[newId].class;

          this.setState({
            selectedClassId:newId,
            cost:newCost,
            flightClass:newFlClass
          });

          if(newCost!=="0"){
            break;
          }
        }
      }
    }

  render(){
    return(
      <div className="flight-card">
        <FlightCardTop {...this.props} prev={this.prev} next={this.next} selectedClassId={this.state.selectedClassId} numberOfClasses={this.state.numberOfClasses} validPrices={this.state.validPrices} flClass={this.state.flightClass} flCost={this.state.cost}/>
        {(this.props.type === "search")?(<FlightCardBottom {...this.props} flClass={this.state.flightClass} flCost={this.state.cost} visible={this.state.modalVisible}/>):
        (
          <div>
              <BtnClose/>
              {(this.props.data.notifications!==undefined && this.props.data.notifications.length>0) &&<Badge/>}
          </div>
        )}
      </div>
    );
  }
}

const FlightCardTop = (props) => (
  <div className={(props.type==="search")?"card-top":"card-top manager"}>
    <Row>
      <FlightCardTopLeft airline={props.data.airline} flightNumber={props.data.flightNumber}/>
      <FlightCardTopRight {...props}/>
    </Row>
  </div>
);

const FlightCardTopLeft = (props) => {
  return (
    <Col md={3} sm={3} xs={3} className="top-left">
      <span><strong>{props.flightNumber}</strong></span>
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

const FlightCardTRBottom=(props)=>{
    return(
    <div>
    {(props.type==="search")
    ?
    (
      <div className="price-component">
        <div className="top-right-bottom">
          <div className= "left">
            {(props.numberOfClasses>1)&&<span onClick={()=>{props.prev()}}><i className="ion-chevron-left"/></span>}
            {(props.flCost!=="0") && (<span><Hidden xs sm><span><strong className="price-text">Price: </strong></span></Hidden>
            <small className="currency"><strong>&#8358;</strong></small></span>)}
            <span className="price"><strong>{(props.flCost!=="0")?props.flCost:"NO SEATS"}</strong></span>
          </div>
          <div className= "right">
            <span className="flight-class"><strong>{props.flClass}</strong></span>
            {(props.numberOfClasses>1)&&<span onClick={()=>{props.next()}}><i className="ion-chevron-right"/></span>}
          </div>
        </div>
        <div className="clearfix"></div>
      </div>

    )
    :
    (
      <div className="top-right-bottom">
        <Row className="manager-pane">
          <Col md={4} sm={4} xs={4}>
            <span>Price: </span>
            <small className="currency">&#8358;</small>
            <span className="price">{this.validPrices[this.state.selectedClassId].cost}</span>
          </Col>
          <Col md={2} sm={2} xs={2}>
            <small className="strike-currency">&#8358;</small>
            <s className="strike-price">{this.validPrices[this.state.selectedClassId].cost}</s>
          </Col>
          <Col md={6} sm={6} xs={6} style={{textAlign:"right"}}><BtnFlightBook/></Col>
        </Row>
      </div>
    )
    }
    </div>
    );
}

class FlightCardBottom extends Component{
  constructor(props){
    super(props);
    this.state = {
      visible: this.props.visible,
    };
    this.clickHandler=this.clickHandler.bind(this);
  }

  clickHandler(){
    this.setState({
      visible:true
    });
  }

  render(){
    let flightDetails = this.props;
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
            <strong>class: <p>{flightDetails.flClass}</p></strong>
          </div>
          <div className="modal-details">
            <strong>price: <p><small>&#8358;</small>{flightDetails.flCost}</p></strong>
          </div>
          <div className="modal-buttons">
            <Row>
              <Col md={4} sm={4} xs={4}>
                <BtnFlightSave/>
              </Col>
              <Col md={4} sm={4} xs={4}>
                <Hidden xs sm>
                  <BtnFlightDetailsPrint/>
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
