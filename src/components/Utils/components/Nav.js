import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-grid-system';
//import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import * as UserActions from '../actions/userActions';
import logo from '../../logo.png';
import profilePics from '../../../images/face.jpg';
import {store} from '../../../store';

 class Nav extends Component{
  constructor(props){
    super(props);

    this.state = {
      login: false,
    };

    store.subscribe(() => {
      this.setState({
        login: store.getState().userReducer.login
      });
    });
  }


  render(){
    //const actions = bindActionCreators(UserActions, this.props.dispatch);

    return(
      <div className="nav-elements">
        <Container fluid>
          <Row>
            <Col md={3} xs={8}>
              <figure className="logo-container">
                <Link to="/">
                  <img src={logo} alt="logo" className='logo'/>
                  <span className="logo-name">
                    <strong>easy</strong>flight
                  </span>
                </Link>
              </figure>
            </Col>
            <Col md={9} xs={4}>
              <ul className={this.props.mainClass}>
                <li>
                  <Link to="/">Flight search</Link>
                </li>
                <li>
                  <Link to="/manage">Manage Schedule</Link>
                </li>
                {!this.state.login && (
                  <li onClick={()=>{store.dispatch(UserActions.userLogin({name:"name"}))}}>
                    <Link to="#">Login</Link>
                  </li>
                )}
                {!this.state.login && (
                  <li className="sign-up" onClick={()=>{store.dispatch(UserActions.userLogin({name:"name"}))}}>
                    <Link to="#">Sign up</Link>
                  </li>
                )}
                {this.state.login && (
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                )}
                {this.state.login && (
                  <li id="userId" className="user-id" onClick={()=>{store.dispatch(UserActions.userLogOut())}}>
                    <Link to="#">
                      <div>
                        <figure>
                          <img src={profilePics} alt="profile pic"/>
                          <div className="signout">
                            <span id="name">Hi, Lillian<br/></span>
                            <span> Sign Out</span>
                          </div>
                        </figure>
                      </div>
                    </Link>
                  </li>
                  )}
              </ul>
              <div className="btn-menu" onClick={this.props._toggleMenu}>
                <i className= "ion-navicon"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Nav;
