import React from 'react';
import '../App.css';
import Jumbotron from '../Utils/components/Jumbotron';
import ManagerPane from './ManagerPane';

const ManagerScreen = () =>(
  <div className='Results-Component'>
    <Jumbotron forStyle="jumbotron-manager" manager={true}/>
    <ManagerPane/>
  </div>
);

export default ManagerScreen;
