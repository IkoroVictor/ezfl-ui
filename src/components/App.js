import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Utils/components/Header';
import HomeScreen from './HomeScreen';
import ResultsScreen from './ResultsScreen';
import ManagerScreen from './ManagerScreen';
import Footer from './Utils/components/Footer';
import Routes from '../config/routes';
import UserApi from '../api/UserApi';
import {store} from '../store';
import {LOGIN, LOGOUT} from "./Utils/actions/user";
import './App.css';
import './AppQueries.css';
import '../css/ionicons.min.css';
import 'rodal/lib/rodal.css';


class App extends Component {

  componentDidMount(){
    UserApi.getUser()
    .then((response)=>{
      debugger
      store.dispatch({type : LOGIN, user:  response.data})
    }).
    catch((error) =>{
      if(error.status === 401){
        store.dispatch({type : LOGOUT})
      }
      console.log(error);
    })
  }
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path={Routes.BASE}component={HomeScreen}/>
          <Route path={Routes.SEARCH} component={ResultsScreen}/>
          <Route exact path={Routes.MANAGER}component={ManagerScreen}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
