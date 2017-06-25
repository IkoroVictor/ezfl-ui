import React, {Component} from 'react';
import '../App.css';
import Jumbotron from '../Utils/components/Jumbotron';
import FilterPane from './FilterPane';
import ResultPane from './ResultPane';
import {sampleData, getCity} from '../Utils/strings';
import {store} from '../../store';
import moment from 'moment';

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
  }

  constructURL(data){
    //25/06/2017
    return `https://easyflight-api.herokuapp.com/easyflight/flights/flight?from=${data.from}&to=${data.to}&date=${data.toDate}&pageNumber=1&pageSize=30`
  }

  fetchData(url) {
    this.setState({ isLoading: true, hasErrored: false });
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            this.setState({hasErrored: false });
            return response;
        })
        .then((response) => response.json())
        .then((result) => {
          this.setState({ result, isLoading: false})
        })
        .catch(() => this.setState({hasErrored: true }));
  }

  componentDidMount(){
    console.log(getCity);
    this.request = store.getState().request.request;
    console.log(this.request);
    debugger;
    let from = getCity[this.request.from];
    let to = getCity[this.request.to];
    let departure = moment(this.request.departure).format("DD/MM/YYYY");
    this.fetchData(`https://easyflight-api.herokuapp.com/easyflight/flights/flight?from=${from}&to=${to}&date=${departure}&pageNumber=1&pageSize=10`);
  }

  render(){
    let flDetails = this.state.result;
    if(this.state.hasErrored){
      return (
        <div>
          <Jumbotron forStyle="jumbotron-home away"/>
          <p>Sorry! There was an error loading the items</p>
        </div>);
    }
    if(this.state.isLoading){
      return (
        <div>
          <Jumbotron forStyle="jumbotron-home away"/>
          <p>Loading…</p>
        </div>);
    }
    if(this.state.result==={} && this.state.isLoading===false){
      return (
        <div>
          <Jumbotron forStyle="jumbotron-home away"/>
          <div>Something went Wrong</div>
        </div>
      );
    }else if(this.state.result!=={} && this.state.isLoading===false){
      if(this.state.result.content===[]){
        return(
          <div>
            <Jumbotron forStyle="jumbotron-home away"/>
            <div>No flight found</div>
          </div>
        );
      }else{
        flDetails.request = {
          passenger: 1,
          class: "economy"
        };
        flDetails.type = "search";
        flDetails.oneWay = true;
        return(
          <div className='Results-Component'>
            <Jumbotron forStyle="jumbotron-home away"/>
            <ResultPane flDetails={flDetails}/>
          </div>
        )
      }
    }
  }
}

export default ResultsScreen;
