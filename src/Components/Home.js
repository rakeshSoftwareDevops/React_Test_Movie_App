import Footer from '../assets/Footer';
import Header from '../assets/Header';
import React, { useEffect,useState,useContext } from 'react';
import {Link} from "react-router-dom";
import Axios from 'axios';
import './Home.css';
import HomeContent from '../assets/HomeContent';

function Home() {
  return (
    <div>
      <Header headingTitle="Popular Titles"/>
      <HomeContent/>
      <Footer/>
    </div>
  );
}

export default Home;