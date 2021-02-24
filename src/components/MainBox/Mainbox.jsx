import { Slide } from '@material-ui/core';
import React from 'react';
import MainList from '../Body/MainCards/MainList';
import Header from '../Header/Header';
import SearchSection from '../MainBox/SearchSection';
import Offers from './Offers';
import SlideBox from '../MainBox/Slider'


const Mainbox = () => {
  return (
        <div className="Mainbox">
           <Header />
            {/* <SearchSection/> */}
       
            <MainList />
            <Offers/>
            {/* <SlideBox/> */}

        </div>
    );
};

export default Mainbox;