import React, {Component} from 'react';
import Jumbotron from '../Utils/components/Jumbotron';
import FilterPane from './FilterPane';
import ResultPane from './ResultPane';
import {getCity} from '../Utils/strings';
import {store} from '../../store';
import moment from 'moment';
import axios from 'axios';

class ResultsScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
      hasErrored: false,
      request:{},
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
    try{
      this.request = store.getState().request.request;
      let from = getCity[this.request.from];
      let to = getCity[this.request.to];
      let departure = moment(this.request.departure).format("DD/MM/YYYY");
      this.fetchData(`/flights/flight?from=${from}&to=${to}&date=${departure}&pageNumber=0&pageSize=1000`);//`https://easyflight-api.herokuapp.com/easyflight/flights/flight?from=${from}&to=${to}&date=${departure}&pageNumber=1&pageSize=10`);
    }catch(err){
      this.setState({ isLoading: false, hasErrored: false });
    }
  }

  componentDidMount(){
    this.doFetch();
  }

  render(){
    let flDetails = this.state.result;
    if(this.state.hasErrored){
      return (
        <div>
          <Jumbotron forStyle="jumbotron-home away" search={true}/>
          <DisplayComponent message={"Sorry! Unable to load items"}/>
        </div>);
    } else if(this.state.isLoading){
      return (
        <div>
          <Jumbotron forStyle="jumbotron-home away" search={true}/>
           <DisplayComponent/>
        </div>);
    } else if(this.request===undefined && this.state.isLoading===false){
      return (
        <div>
          <Jumbotron forStyle="jumbotron-home away" search={true}/>
          <DisplayComponent message={"Something went wrong, please perform search again."}/>
        </div>
      );
    }else if(this.state.result!=={} && this.state.isLoading===false){
      if(this.state.result.content===[]){
        return(
          <div>
            <Jumbotron forStyle="jumbotron-home away" search={true}/>
            <DisplayComponent message={"No flight found"}/>
          </div>
        );
      }else{
        flDetails.request = this.request;
        flDetails.type = "search";
        flDetails.oneWay = flDetails.request.oneWay;
        return(
          <div className='Results-Component'>
            <Jumbotron forStyle="jumbotron-home away" search={true} searchHandler={this.doFetch}/>
            <ResultPane flDetails={flDetails}/>
          </div>
        )
      }
    }
  }
}

export default ResultsScreen;

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

//https://easyflight-logistics.herokuapp.com
