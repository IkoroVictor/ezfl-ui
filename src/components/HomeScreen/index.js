import React from 'react';
import Jumbotron from '../Utils/components/Jumbotron';
import About from './About';
import Destinations from './Destinations';
import Services from './Services';
import Contact from './Contact';
import DownloadMobileApp from './DownloadMobileApp';

const HomeScreen = (screenClass, props) => (
  <div className='Home-Component'>
    <Jumbotron forStyle="jumbotron-home"/>
    <About/>
    <Destinations/>
    <Services/>
    <DownloadMobileApp/>
    <Contact/>
  </div>
);

export default HomeScreen;
