import React from 'react';
import {Container, Row, Col, Hidden} from 'react-grid-system';

const UserScreen = () =>(
  <div className='profile-page' style={{paddingTop:"50px"}}>
    <Container fluid>
      <Row>
        <Col md={12} style={{backgroundColor:"#F8F8F8", textAlign:"-webkit-center"}}>
          <span>That's you!</span>
          <div style={{height:"500px", backgroundColor:"#fff", maxWidth:"300px"}}>
            <div>
              <div><img src={""}/></div>
              <div>Sign Out</div>
            </div>
            <form>
              <label style={{display:"block"}}>Your Name</label><input type="text" name="name"/>
              <label style={{display:"block"}}>Email</label><input type="email" name="email"/>
              <label style={{display:"block"}}>Password</label><input type="password" name="password"/>
              <button style={{display:"block"}}>Login</button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default UserScreen;
