import React, {Component} from 'react';
import Jumbotron from '../Utils/components/Jumbotron';
import ManagerPane from './ManagerPane';
import {getCity} from '../Utils/strings';
import {Hidden} from 'react-grid-system';
import moment from 'moment';
import axios from 'axios';

class ManagerScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:false,
      hasErrored: false,
      result:{}
    }
    this.fetchData = this.fetchData.bind(this);
    this.doFetch = this.doFetch.bind(this);
  }

  fetchData(url) {
    this.setState({ isLoading: true, hasErrored: false });
    axios.get(url)
    .then(response => {
      this.setState({ result:response.data, isLoading: false})
    })
    .catch(error => {
      this.setState({hasErrored: true });
    });
  }

  doFetch(){
    /*try{
      this.fetchData(`/flights/flight?from=${from}&to=${to}&date=${departure}&pageNumber=0&pageSize=1000`);
    }catch(err){
      this.setState({ isLoading: false, hasErrored: false });
    }*/
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
    }else if(this.state.result!=={} && this.state.isLoading===false){
      if(this.state.result.content===[]){
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
            <ManagerPane/>
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
