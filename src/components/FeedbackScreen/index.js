import React from 'react';
import '../App.css';
import Jumbotron from '../Utils/Jumbotron';
import FilterPane from './FilterPane';
import ResultPane from './ResultPane';

const ResultsScreen = () =>(
  <div className='Results-Component'>
    <Jumbotron forStyle="jumbotron-away"/>
    <ResultPane/>
  </div>
);

export default ResultsScreen;
