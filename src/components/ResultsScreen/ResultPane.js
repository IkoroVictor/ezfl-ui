import React, {Component} from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';
import FlightCard from '../Utils/components/FlightCard';
import DisplayPanel from './FilterPane';

class ResultPane extends Component{
  constructor(props){
    super(props);
    this.state={
      numberOfFlights:props.flDetails.content.length
    };
  }

  componentWillMount(){
    this.loadCards =
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
      );

  }

  render(){
    return(
    <div className='results-pane'>
      <div>
        <Container>
          <DisplayPanel {...this.props} numberOfFlights={this.state.numberOfFlights}/>
          <Row>
            <Col md={4}>
                <AdPane/>
            </Col>
            <Col md={8}  style={{padding:"0px"}}>
              {this.loadCards}
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  );
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

export default ResultPane;
