import React, {Component} from 'react';
import Jumbotron from '../Utils/components/Jumbotron';
import ManagerPane from './ManagerPane';
import {getCity} from '../Utils/strings';
import UserFlightApi from '../../api/UserFlightApi';
import {Hidden} from 'react-grid-system';
import moment from 'moment';
import axios from 'axios';


class ManagerScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:false,
      hasErrored: false,
      pageNumber:0,
      pageSize:10,
      result:{}
    }
    this.fetchData = this.fetchData.bind(this);
    this.doFetch = this.doFetch.bind(this);
  }

  fetchData(params) {
    this.setState({ isLoading: true, hasErrored: false });
    UserFlightApi.getUserFlights(params)
    .then(response => {
      this.setState({ result:response.data, isLoading: false})
    })
    .catch(error => {
      this.setState({isLoading: false, hasErrored: true });
    });
  }

  doFetch(){
    this.fetchData({
      pageSize: this.state.pageSize,
      pageNumber :  this.state.pageNumber
    })
  }

  componentDidMount(){
    this.doFetch();
  }

  render(){
    if(this.state.hasErrored){
      return (
        <div>
          <HeaderManager/>
          <DisplayComponent message={"Sorry! Unable to load items"}/>
        </div>);
    } else if(this.state.isLoading){
      return (
        <div>
          <HeaderManager/>
          <DisplayComponent/>
        </div>);
    }else if(this.state.isLoading===false){
      if(this.state.result.content && this.state.result.content.length === 0){
        return(
          <div>
            <HeaderManager/>
            <DisplayComponent message={"No Saved Flight found"}/>
          </div>
        );
      }else{
        return(
          <div className='Results-Component'>
            <HeaderManager/>
            <ManagerPane savedFlights={this.state.result}/>
          </div>
        )
      }
    }
  }
}

export default ManagerScreen;


const HeaderManager = ()=>{
  return(
        <div style={{width:"100%",height:"50px"}}></div>
  );
}

const DisplayComponent = ({message}) =>(

  <div className="display-component"><span>
    {
      message?message:
      (
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      )
    }</span>
  </div>
);

//<Jumbotron forStyle="jumbotron-home away" search={true}/>
