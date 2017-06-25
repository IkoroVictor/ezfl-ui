import React from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';
import FlightCard from '../Utils/components/FlightCard';
import DisplayPanel from './FilterPane';


let getPrice = function(price=[], flightClass=""){
  console.log("Here");
}

const ResultPane = ({flDetails}) => {
  let flightData = flDetails.content;
  let flightClass =flDetails.request.class;
  let badFlightCounter = 0;
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
              flightData.map((data)=>{
                data.flightClass=flightClass;
                let priceArray = data.prices.price;
                if(!priceArray){
                  return (null);
                }

                for(let i=0; i< priceArray.length; i++){
                  if(priceArray[i].class.toLowerCase()===flightClass.toLowerCase()){
                    data.price = priceArray[i].cost;
                    data.price = data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    if(data.price==0){
                      badFlightCounter++;
                      return null;
                    }
                    break;
                  }
                  if(i===priceArray.length-1){
                    data.price = 0;
                  }
                }
                if(data.price==0){
                  badFlightCounter++;
                  return null;
                }
                return(<FlightCard key={data.id} flCardDetails={{type: flDetails.type, oneWay: flDetails.oneWay, data:data}}/>);
                }
              )
            }
          </Col>
        </Row>
      </Container>
    </div>

  </div>
);
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
