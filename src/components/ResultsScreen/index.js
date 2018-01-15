import React, {Component} from 'react';
import Jumbotron from '../Utils/components/Jumbotron';
import FilterPane from './FilterPane';
import ResultPane from './ResultPane';
import {getCity} from '../Utils/strings';
import {store} from '../../store';
import {Hidden} from 'react-grid-system';
import FlightCard from '../Utils/components/FlightCard';
import FlightApi from '../../api/FlightApi';
import moment from 'moment';
import axios from 'axios';
import { StickyContainer} from 'react-sticky';

class ResultsScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoading: false,
      hasErrored: false,
      isLoadingMore:false,
      canLoadMore:false,
      moreHasErrored: false,
      flights:[],
      numberOfFlights:0,
      pageNumber:1,
	  timeTo:null,
	  timeFrom:null,
	  airlineSelect:''
    }
    this.fetchData = this.fetchData.bind(this);
    this.doFetch = this.doFetch.bind(this);
    this.loadMore = this.loadMore.bind(this);
	this.onTimeToUpdate = this.onTimeToUpdate.bind(this);
	this.onTimeFromUpdate = this.onTimeFromUpdate.bind(this);
	this.onTimePickerClose = this.onTimePickerClose.bind(this);
	this.onAirlineUpdate = this.onAirlineUpdate.bind(this);
    this._handleWaypointEnter = this._handleWaypointEnter.bind(this);
  }

  componentDidMount(){
    this.doFetch();
  }
	
  onAirlineUpdate(e) {
	 this.setState({
		 airlineSelect:e.target.value,
		 pageNumber:1
	 }, this.doFetch);
  }	
  onTimeToUpdate(e) {
	  this.setState({timeTo: e})
		  
  }
	
  onTimeFromUpdate(e) {
	  this.setState({timeFrom: e})
  }
	
  onTimePickerClose() {
	  if (this.state.timeTo && this.state.timeFrom) {
		  this.setState({
			  pageNumber:1
		  }, this.doFetch);
	  }
  }

  doFetch(){
      this.request = store.getState().request.request;
	  
	  if (!this.request) {
		  return;
	  }
	  
	  let from = getCity[this.request.from];
	  let to = getCity[this.request.to];
	  let departure = moment(this.request.departure).format("DD/MM/YYYY");

	  let fetchData = {
		  pageNumber: this.state.pageNumber, 
		  pageSize : 10,
		  from, 
		  to, 
		  date: departure
	  }
      
	  if (this.state.timeTo && this.state.timeFrom) {
		  fetchData = {
			  ...fetchData,
			  startTime: this.state.timeFrom.format('HH:mm'),
			  endTime: this.state.timeTo.format('HH:mm')
		  }
	  }
	  
	  if (this.state.airlineSelect){
		   fetchData = {
			  ...fetchData,
			  airline: this.state.airlineSelect
		  }
	  }
	  
	  this.setState({ isLoading: true, hasErrored: false });
	  
      this.fetchData(fetchData);
   
  }

  fetchData(params) {
    FlightApi.getOneWayFlights(params)
    .then(response => {
      let newFlights = this.load(response.data.content);
      let currentFlights = this.state.flights;
      let flights = this.state.pageNumber === 1 ? newFlights : currentFlights.concat(newFlights);

      let canLoadMore = !(response.data.last);
      let totalNumOfFlights = response.data.numberOfElements;
      let totalPages = response.data.totalPages;
      let currentPage = this.state.pageNumber;

      if(this.state.isLoadingMore){
        this.setState({
          flights, isLoadingMore: false, canLoadMore, numberOfFlights:totalNumOfFlights, totalPages, pageNumber:(currentPage+1)
        });
      }else{
        this.setState({
          flights, isLoading: false, canLoadMore, numberOfFlights:totalNumOfFlights, pageNumber:(currentPage+1)
        });
      }

    })
    .catch(error => {
      if(error.message==="Network Error"){
        this.state.message="Pls check your internet connection";
        alert("Pls check your internet connection");
      }
      if(this.state.isLoadingMore){
        this.setState({moreHasErrored: true });
      }else{
        this.setState({hasErrored: true });
      }
    });
  }

  load(flights){
      return flights.map((data)=>{
        let prices = data.prices;
        data.selectedClassId=prices.length-1;
        data.NumberOfClasses=prices.length;
        data.validPrices = prices;
        data.type = "search";
        data.oneWay = this.request.oneWay;
        let key = data.id+Math.random();
        return <FlightCard key={key} type={"search"} oneWay={data.oneWay} data={data}/>;
        }
      );
  }

  loadMore(){
     this.fetchData();
  }

  _handleWaypointEnter(){
    if(this.state.canLoadMore){
      this.setState({isLoadingMore:true});
      this.loadMore();
    }
  }

  render(){
    if(this.state.hasErrored){
      return (
        <div>
          <JumbotronHider/>
          <DisplayComponent message={"Sorry! Unable to load flights"}/>
        </div>);
    } else if(this.state.isLoading){
      return (
        <div>
          <JumbotronHider/>
           <DisplayComponent/>
        </div>);
    } else if(this.request===undefined && this.state.isLoading===false){
      return (
        <div>
          <JumbotronHider/>
          <DisplayComponent message={"Something went wrong, please perform search again."}/>
        </div>
      );
    }else if(this.state.flights!==[] && this.state.isLoading===false){
        return(

            <div className='Results-Component'>
              <StickyContainer>
                <JumbotronHider/>
                <ResultPane 
                  flights={this.state.flights} 
                  canLoadMore={this.state.canLoadMore} 
                  moreHasErrored={this.state.moreHasErrored} 
                  _handleWaypointEnter={this._handleWaypointEnter} 
                  request={this.request}
			      onTimeFromUpdate={this.onTimeFromUpdate}
			      onTimeToUpdate={this.onTimeToUpdate}
			      onTimePickerClose={this.onTimePickerClose}
				  timeTo={this.state.timeTo}
			      timeFrom={this.state.timeFrom}
				  onAirlineUpdate={this.onAirlineUpdate}
				  airlineSelect={this.state.airlineSelect}
                  numberOfFlights={this.state.numberOfFlights}/>
              </StickyContainer>
          </div>

        );
    }
  }
}

export default ResultsScreen;
const JumbotronHider = () => (
  <div>
    <Hidden xs sm>
      <Jumbotron forStyle="jumbotron-home away" search={true} searchHandler={this.doFetch}/>
    </Hidden>
    <Hidden md lg xl>
      <div style={{width:"100%",height:"50px"}}></div>
    </Hidden></div>
);

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
