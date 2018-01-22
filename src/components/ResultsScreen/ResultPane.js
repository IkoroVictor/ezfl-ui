import React, { Component } from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import FlightCard from '../Utils/components/FlightCard';
import DisplayPanel from './FilterPane';
import Waypoint from 'react-waypoint';
import { Sticky } from 'react-sticky';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';



const ResultPane = ({ request, oneWay, from, to, numberOfFlights, canLoadMore, moreHasErrored, flights, returnFlights, _handleWaypointEnter, onTimeToUpdate, onTimeFromUpdate, onTimePickerClose, timeTo, timeFrom, onAirlineUpdate, airlineSelect }) => {
  return (
    <div className='results-pane'>
      <div>
        <Container>

          <DisplayPanel request={request} numberOfFlights={numberOfFlights} onTimeToUpdate={onTimeToUpdate} onTimeFromUpdate={onTimeFromUpdate} onTimePickerClose={onTimePickerClose} timeTo={timeTo} timeFrom={timeFrom} onAirlineUpdate={onAirlineUpdate} airlineSelect={airlineSelect} />
          <Row>
            <Col md={4}>
              <AdPane />
            </Col>
            <Col md={8} style={{ padding: "0px" }}>
              <Tabs>
                <TabList>
                  <Tab>
                    <div className="tab-flight-info">
                      <span id="from-city">
                        {from}
                      </span>
                      <i className="ion-arrow-right-a"></i>
                      <span id="to-city">
                        {to}
                      </span>
                    </div>
                  </Tab>

                  {
                    !oneWay &&
                    <Tab >
                      <span id="from-city">
                        {from}
                      </span>
                      <i className="ion-arrow-left-a"></i>
                      <span id="to-city">
                        {to}
                      </span>
                    </Tab>
                  }

                </TabList>
                <TabPanel>
                  {flights}
                  {
                    (canLoadMore) ?
                      (<div>
                        <Waypoint
                          onEnter={_handleWaypointEnter}
                        />
                        <div className="loading-more-spinner">
                          <div className="loader" id="loader-4">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      </div>) : (null)
                  }
                </TabPanel>

                {!oneWay &&
                  <TabPanel>
                    {flights}
                    {
                      (canLoadMore) ?
                        (<div>
                          <Waypoint
                            onEnter={_handleWaypointEnter}
                          />
                          <div className="loading-more-spinner">
                            <div className="loader" id="loader-4">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>
                        </div>) : (null)
                    }
                  </TabPanel>
                }
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  );
}

const AdPane = () => (
  <Sticky topOffset={150}>
    {({ style, distanceFromBottom }) => {
      console.log(distanceFromBottom);
      var css = style;
      if (css.position === "fixed") {
        css.top = 103;
      }
      if (distanceFromBottom < 120) {

      }
      return (
        <div className="ad" style={css}>
          <Hidden sm xs>
            <p>Sponsored Ad</p>
            <div className="ad-box">
            </div>
          </Hidden>
        </div>
      )
    }
    }
  </Sticky>

);


export default ResultPane;
