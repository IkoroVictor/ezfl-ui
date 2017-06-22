import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Utils/components/Header';
import HomeScreen from './HomeScreen';
import ResultsScreen from './ResultsScreen';
import ManagerScreen from './ManagerScreen';
import UserScreen from './UserScreen';
import Footer from './Utils/components/Footer';
import './App.css';
import './AppQueries.css';
import '../css/ionicons.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomeScreen}/>
          <Route path='/search' component={ResultsScreen}/>
          <Route exact path='/manage' component={ManagerScreen}/>
          <Route exact path='/profile' component={UserScreen}/>
          {/*<Route exact path='/feedback' component={FeedbackScreen}/>*/}
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
