import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-grid-system';
import {connect} from 'react-redux';
import * as UserActions from '../actions/userActions';
import logo from '../../logo.png';
import profilePics from '../../../images/face.jpg';
import {store} from '../../../store';
import Rodal from 'rodal';
import googleLogo from '../../../images/google.png';
import Routes from '../../../config/routes';

 class Nav extends Component{
  constructor(props){
    super(props);

    this.state = {
      login: false,
      visibleLogin: false,
      visibleSignUp:false
    };

    store.subscribe(() => {
      let state = store.getState();
      this.setState({
        login: state.userLoginManager.login,
        user: state.userLoginManager.user
      });
    });

    this.loginClickHandler=this.loginClickHandler.bind(this);
    this.signUpClickHandler=this.signUpClickHandler.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
    this.onSignOut = this.onSignOut.bind(this);
  }

  loginClickHandler(){
    this.props._toggleMenu();
    this.setState({
      visibleLogin:true
    });

  }

  signUpClickHandler(){
    this.props._toggleMenu();
    this.setState({
      visibleSignUp:true
    });

  }

  onSignIn(){

  }

  onSignOut(){

  }

  render(){
    const user = this.state.user;
    return(
      <div className="nav-elements">
        <Container fluid>
          <Row>
            <Col md={3} xs={8}>
              <figure className="logo-container">
                <Link to={Routes.HOME}>
                  <img src={logo} alt="logo" className='logo'/>
                  <span className="logo-name">
                    <strong>easy</strong>flight
                  </span>
                </Link>
              </figure>
            </Col>
            <Col md={9} xs={4}>
              <ul className={this.props.mainClass}>
                <li onClick={this.props._toggleMenu}>
                  <Link to={Routes.SEARCH}>Flight search</Link>
                </li>
                 {this.state.login && <li>
                  <Link to={Routes.MANAGER}>Manage Schedule</Link>
                </li>}
                {!this.state.login && (
                  <li>
                    <Link to="#" onClick={this.loginClickHandler}>Login</Link>
                  </li>
                )}
                {!this.state.login && (
                  <li className="sign-up">
                    <Link to="#" onClick={this.signUpClickHandler}>Sign up</Link>
                  </li>
                )}
                {this.state.login && (
                  <li>
                    <Link to="#">Settings</Link>
                  </li>
                )}
                {this.state.login && (
                  <li id="userId" className="user-id" onClick={()=>{store.dispatch(UserActions.userLogOut())}}>
                    <Link to="#">
                      <div>
                        <figure>
                          <img src={user.picture || profilePics} alt="profile pic"/>
                          <div className="signout">
                            <span id="name">Hi, {user.firstName}<br/></span>
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
        <Rodal animation="slideDown" height={this.state.visibleLogin?535:575} visible={this.state.visibleLogin || this.state.visibleSignUp} onClose={()=>{this.setState({visibleLogin:false, visibleSignUp:false})}}>
          {this.state.visibleLogin && <div className="login">
          <div className="modal-header">
            <h3>Login to Your Easyflight Account!</h3>
            </div>
            <div className="login-modal">
                  <input type="email" maxLength="120" minLength="6" name="email" placeholder="Email" required={true}/>
                  <input type="password" maxLength="120" minLength="6" name="password" placeholder="Password" required={true}/>
                  <div className="btn-login">Login</div>
                  <div className="divider"><div></div><span>OR</span><div></div></div>
                  <div className="social-login-facebook"><i className="ion-social-facebook"/>Continue with Facebook</div>
                  <a href="/login/google"><div className="social-login-google"> <i><img src={googleLogo}/></i>Continue with Google</div></a>

                  <div className="login-modal-base">
                  <div className="forgot-password">or <Link to="#">Forgot Password</Link></div>
                  <div className="terms"><p>By signing up, you agree to our <Link to="#">Terms of Use</Link> and <Link to="#">Privacy Policy</Link></p></div>
                  <div className="footer-divider"></div>
                <div className="sign-up">Don't have an account? <Link to="#" onClick={()=>{this.setState({visibleSignUp:true, visibleLogin:false})}}><strong>Sign up</strong></Link></div>
              </div>
              </div>
            </div>}
              {this.state.visibleSignUp && <div className="signup">
                <div className="modal-header">
                  <h3>Signup - Create an Easyflight Account</h3>
                  </div>
                  <div className="login-modal">
                    <input type="text" maxLength="120" minLength="6" name="username" placeholder="Username" required={true}/>
                        <input type="email" maxLength="120" minLength="6" name="email" placeholder="Email" required={true}/>
                        <input type="password" maxLength="120" minLength="6" name="password" placeholder="Password" required={true}/>
                        <div className="btn-login">Signup</div>
                        <div className="divider"><div></div><span>OR</span><div></div></div>
                        <div className="social-login-facebook"><i className="ion-social-facebook"/>Signup with Facebook</div>
                        <div className="social-login-google"> <i><img src={googleLogo}/></i>Signup with Google</div>

                        <div className="login-modal-base">
                        <div className="terms"><p>By signing up, you agree to our <Link to="#">Terms of Use</Link> and <Link to="#">Privacy Policy</Link></p></div>
                        <div className="footer-divider"></div>
                      <div className="sign-up">Already have an account? <Link to="#" onClick={()=>{this.setState({visibleSignUp:false, visibleLogin:true})}}><strong>Login</strong></Link></div>
                    </div>
                    </div>
              </div>}
        </Rodal>
      </div>
    )
  }
}

//onClick={()=>{store.dispatch(UserActions.userLogin({name:"name"}))}}

export default Nav;
