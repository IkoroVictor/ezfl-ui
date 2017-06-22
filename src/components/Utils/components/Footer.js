import React from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';
import {Link} from 'react-router-dom';
//import '../App.css';
//import '../../css/ionicons.min.css';

const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col md={6}>
          <h5>About easy flight</h5>
          <p className="about-us">
            Easy Flight helps you find the cheapest airline tickets for all national routes. Easy flight searches through local travel sites to help you find, book and manage your travels.</p>
        </Col>
        <Col md={6}>
          <Hidden sm xs>
          <table>
            <tr>
              <th>
                <h5>Company</h5>
              </th>
              <th>
                <h5>Contact</h5>
              </th>
              <th>
                <h5>More</h5>
              </th>
            </tr>
            <tr>
              <td>About</td>
              <td>Help/ FAQ</td>
              <td>Airline Fees</td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td>Press</td>
              <td>Airlines</td>
            </tr>
            <tr>
              <td>Flight Tips</td>
              <td>Hotels</td>
              <td>Direct Routes</td>
            </tr>
          </table>
        </Hidden>
        </Col>
      </Row>
    </Container>
    <div className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <ul>
              <li>
                <p>2017 EASY FLIGHT &copy;</p>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <Hidden xs sm>
            <ul>
              <li>
                <p>Privacy</p>
              </li>
              <li>
                <p>Terms &amp; conditions</p>
              </li>
              <li>
                <p>Ad Choices</p>
              </li>
            </ul>
          </Hidden>
          </Col>
          <Col md={4}>
            <ul className="social-icons">
              <li>
                <i className="ion-social-facebook"></i>
              </li>
              <li>
                <i className="ion-social-twitter"></i>
              </li>
              <li>
                <i className="ion-social-googleplus"></i>
              </li>
              <li>
                <i className="ion-social-instagram"></i>
              </li>
              <li>
                <i className="ion-social-linkedin"></i>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  </footer>
);

export default Footer;
