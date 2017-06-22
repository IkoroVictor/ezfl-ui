import React, {Component} from 'react';
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';

class MobileJumbotron extends Component{
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  constructor(props){
    super(props);
    this._handleClick=this._handleClick.bind(this);
  }

  _handleClick(e){
    e.preventDefault();
    this.props.history.push("/search");
  }

  render(){
    return(
      <div style={{height: "50vh", width: "100%", backgroundColor: "#555", position:"relative"}}>
        <button style={{height: "70px", width: "150px", position:"absolute",top:"50%", left:"50%", transform:"translate(-50%, -50%)", fontSize:"120%"}} onClick= {this._handleClick}>
          Search
        </button>
      </div>
    );
  }
}

export default withRouter(MobileJumbotron);
