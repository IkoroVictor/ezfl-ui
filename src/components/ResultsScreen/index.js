import React, {Component} from 'react';
import Jumbotron from '../Utils/components/Jumbotron';
import FilterPane from './FilterPane';
import ResultPane from './ResultPane';
import {getCity} from '../Utils/strings';
import {store} from '../../store';
import {Hidden} from 'react-grid-system';
import FlightCard from '../Utils/components/FlightCard';
import moment from 'moment';
import axios from 'axios';
import { StickyContainer} from 'react-sticky';

class ResultsScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
      hasErrored: false,
      isLoadingMore:false,
      canLoadMore:false,
      moreHasErrored: false,
      flights:[],
      numberOfFlights:0
    }
    this.fetchData = this.fetchData.bind(this);
    this.doFetch = this.doFetch.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this._handleWaypointEnter = this._handleWaypointEnter.bind(this);
  }

  componentDidMount(){
    this.doFetch();
  }

  doFetch(){
    try{
      this.request = store.getState().request.request;
      let from = getCity[this.request.from];
      let to = getCity[this.request.to];
      let departure = moment(this.request.departure).format("DD/MM/YYYY");
      this.setState({ isLoading: true, hasErrored: false });
      this.fetchData(`https://easyflight-logistics.herokuapp.com/flights/flight?from=${from}&to=${to}&date=${departure}&pageNumber=0&pageSize=1000`);
    }catch(err){
      this.setState({ isLoading: false, hasErrored: false });
    }
  }

  fetchData(url) {
    axios.get(url)
    .then(response => {
      let newFlights = this.load(response.data.content);
      let currentFlights = this.state.flights;
      let flights = currentFlights.concat(newFlights);

      let canLoadMore = !(response.data.last);
      let totalNumOfFlights = response.data.numberOfElements;
      let totalPages = response.data.totalPages;
      let currentPage = response.data.number;

      if(this.state.isLoadingMore){
        this.setState({
          flights, isLoadingMore: false, canLoadMore, numberOfFlights:totalNumOfFlights, totalPages, currentPage
        });
      }else{
        this.setState({
          flights, isLoading: false, canLoadMore:true, numberOfFlights:totalNumOfFlights, totalPages, currentPage
        });
      }

    })
    .catch(error => {
      if(this.state.isLoadingMore){
        this.setState({moreHasErrored: true });
      }else{
        this.setState({hasErrored: true });
      }
    });
  }

  load(flights){
      return flights.map((data)=>{
        let prices = data.prices.price;
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

      try{
        this.request = store.getState().request.request;
        let from = getCity[this.request.from];
        let to = getCity[this.request.to];
        let departure = moment(this.request.departure).format("DD/MM/YYYY");
        this.fetchData(`https://easyflight-logistics.herokuapp.com/flights/flight?from=${from}&to=${to}&date=${departure}&pageNumber=0&pageSize=1000`);
      }catch(err){
        this.setState({ isLoadingMore: false, moreHasErrored: false });
      }
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
                <ResultPane flights={this.state.flights} canLoadMore={this.state.canLoadMore} moreHasErrored={this.state.moreHasErrored} _handleWaypointEnter={this._handleWaypointEnter} request={this.request} numberOfFlights={this.state.numberOfFlights}/>
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
