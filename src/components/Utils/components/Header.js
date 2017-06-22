import React, {Component} from 'react';
import Nav from './Nav';

var menuHiddenStyle = {
  display: "none"
};

var menuVisibleStyle = {
  display: "block"
};

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggle: "off",
      login: false
    };
    this._toggleMenu = this._toggleMenu.bind(this);
  }

  _toggleMenu(){
    if(this.state.toggle==="off"){
      this.setState({toggle:"on"});
    }else{
      this.setState({toggle:"off"});
    }
  }

  render(){
    let mainClass = "main-nav menu-hidden";
    let toggleState = this.state.toggle;
    if(toggleState === "off"){
      mainClass = "main-nav menu-hidden";
    }else if (toggleState === "on"){
      mainClass = "main-nav";
    }
    return(
      <header>
        <nav>
          <Nav mainClass={mainClass} _toggleMenu={this._toggleMenu}/>
        </nav>
      </header>
    );
  }
}

export default Header;
