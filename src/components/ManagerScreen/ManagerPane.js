import React, {Component} from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';
import SavedFlightCard from '../Utils/components/SavedFlightCard';
import DisplayPanel from './FilterPane';


class ManagerPane extends Component{
  constructor(props){
    super(props);
    this.state={
      numberOfFlights:10//props.flDetails.content.length
    };
  }

  componentWillMount(){
    /*this.loadCards =
      this.props.flDetails.content.map((data)=>{
        let selectedClassId = 0;
        let NumberOfClasses = 0;

        let prices = data.prices.price;
        if(!prices){
          this.setState({numberOfFlights:this.state.numberOfFlights--});
          return (null);
        }

        data.selectedClassId=prices.length-1;
        data.NumberOfClasses=prices.length;
        data.validPrices = prices;

        return(<FlightCard key={data.id} type={this.props.flDetails.type} oneWay={this.props.flDetails.oneWay} data={data}/>);
        }
      );*/
  }
  render(){
    return(<div className='results-pane'>
      <div>
        <Container>
          <DisplayPanel {...this.props} numberOfFlights={this.state.numberOfFlights}/>
          <Row>
            <Col md={4}>
                <AdPane/>
            </Col>
            <Col md={8}  style={{padding:"0px"}}>
              <SavedFlightCard
                cardDetails={{
                    data:
                    {
                      airline:"aero",
                      price:25000,
                      oldPrice:56700,
                      from:"lagos",
                      to:"abuja",
                      flightClass:"Economy",
                      arrivalTime:1496076000000,
                      departureTime:1429072400000,
                      goingDate:1493040000000,
                      returnDate:"",
                      oneWay: true,
                      passengers:5,
                      flightNumber: "ATA-273",
                      active: false}}}
                />
              <SavedFlightCard
                cardDetails={{
                    data:
                    {
                      airline:"dana",
                      price:36000,
                      from:"calabar",
                      to:"enugu",
                      flightClass:"Premium",
                      arrivalTime:1499076000000,
                      departureTime:1499072400000,
                      goingDate:1498040000000,
                      returnDate:"",
                      oneWay: true,
                      passengers:1,
                      flightNumber: "TVF-42-273",
                      active: true}}}
                />

                <SavedFlightCard
                  cardDetails={{
                      data:
                      {
                        airline:"airpeace",
                        price:22000,
                        oldPrice:56700,
                        from:"lagos",
                        to:"abuja",
                        flightClass:"Economy",
                        arrivalTime:1499076000000,
                        departureTime:1499072400000,
                        goingDate:1499040000000,
                        returnDate:"",
                        oneWay: true,
                        passengers:5,
                        flightNumber: "ATA-273",
                        active: true,
                        notifications:
                        ["price changed from N15 to N20", "flight canceled"]}}}
                  />
            </Col>
          </Row>
        </Container>
      </div>
    </div>);
  }
}

const AdPane = () => (
  <div className="ad">
    <Hidden sm xs>
    <p>Sponsored Ad</p>
    <div className="ad-box"></div>
      </Hidden>
  </div>
);

export default ManagerPane;
