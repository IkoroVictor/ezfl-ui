import React from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';
import FlightCard from '../Utils/components/FlightCard';
import DisplayPanel from './FilterPane';

const ManagerPane = () => (
  <div className='results-pane'>
    <div>

      <Container>
        <DisplayPanel/>
        <Row>
          <Col md={5} className="Ad-col">
              <AdPane/>
          </Col>
          <Col md={7}>
            <FlightCard flCardDetails={{type: "expired", oneWay: false, data:{airline:"apc", notifications:["price changed from N15 to N20", "flight canceled"]}}}/>
            <FlightCard flCardDetails={{type: "expired", oneWay: false, data:{airline:"ara"}}}/>
            <FlightCard flCardDetails={{type: "active", oneWay: true, data:{airline:"ola"}}}/>
            <FlightCard flCardDetails={{type: "active", oneWay: true, data:{airline:"aer"}}}/>
            <FlightCard flCardDetails={{type: "active", oneWay: true, data:{airline:"apc"}}}/>
          </Col>
        </Row>
      </Container>
    </div>

  </div>
);

const AdPane = () => (
  <div className="ad">
    <Hidden sm xs>
    <p>Sponsored Ad</p>
    <div className="ad-box"></div>
      </Hidden>
  </div>
);

export default ManagerPane;
/*


const ResultPane = ({flDetails}) => {
  let flightData = flDetails.content;
  return(
  <div className='results-pane'>
    <div>
      <Container>
        <DisplayPanel/>
        <Row>
          <Col md={4}>
              <AdPane/>
          </Col>
          <Col md={8}  style={{padding:"0px"}}>

            {
              flightData.map((data)=>(
                <FlightCard key={data.id} flCardDetails={{type: flDetails.type, oneWay: flDetails.oneWay, data:data}}/>
              ))
            }
          </Col>
        </Row>
      </Container>
    </div>

  </div>
);
}



export default ResultPane;*/
