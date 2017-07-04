import React, {Component} from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';
import FlightCard from '../Utils/components/FlightCard';
import DisplayPanel from './FilterPane';
import Waypoint from 'react-waypoint';
import {Sticky } from 'react-sticky';


const ResultPane = ({request, numberOfFlights, canLoadMore, moreHasErrored, flights, _handleWaypointEnter})=>{
    return(
    <div className='results-pane'>
      <div>
        <Container>

          <DisplayPanel request={request} numberOfFlights={numberOfFlights}/>
          <Row>
            <Col md={4}>
                <AdPane/>
            </Col>
            <Col md={8}  style={{padding:"0px"}}>
              {flights}
              {
                (canLoadMore)?
                (<div>
                  <Waypoint
                    onEnter={_handleWaypointEnter}
                  />Loading more flights...
                </div>):(null)
              }
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  );
}

const AdPane = () => (
  <Sticky topOffset={150}>
    { ({ style, distanceFromBottom}) => {
        console.log(distanceFromBottom);
        var css = style;
        if(css.position==="fixed"){
          css.top=103;
        }
        if(distanceFromBottom<120){
          
        }
        return(
          <div className="ad" style={css}>
            <Hidden sm xs>
            <p>Sponsored Ad</p>
            <div className="ad-box"></div>
              </Hidden>
          </div>
        )}
  }
  </Sticky>

);

export default ResultPane;
