import React from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';
import '../../../stylesheets/css/App.css';

const AdPane = () => (
  <div className="ad">
    <Hidden sm xs>
        <p>Sponsored Ad</p>
        <div className="ad-box"></div>
    </Hidden>
  </div>
);

export default AdPane;
