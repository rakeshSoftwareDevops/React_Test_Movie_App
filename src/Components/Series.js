import Header from '../assets/Header';
import Content from '../assets/Content';
import Footer from '../assets/Footer';
import Data from '../Sample.json';
import React, {useState,useEffect } from 'react';
import './Series.css';

function Series() {
  const [seriesStateData,setSeriesData]=useState([]);
  const [moviesStateData,setMoviesData]=useState([]);

  
  useEffect(()=>{
    var count=0,seriesData=[];
    Data.entries.sort((a, b)=>(a.title>b.title)?1:-1);
    for(var i=0;i<Data.entries.length;i++){
      if(count>20){
        break;
      }
      if(Data.entries[i].releaseYear>=2010 && Data.entries[i].programType=="series"){
        count=count+1;
        seriesData.push(Data.entries[i]);
      }
    }
    setSeriesData(seriesData);

   },[Data.entries]);

  return (
    <div>
      <Header headingTitle="Popular Series"/>
      {
        seriesStateData.length<22?(
          <Content 
            moviesData={moviesStateData}
            seriesStateData={seriesStateData}
          />
         ):
         (
           
             <div>
               <p>Loading...</p>
             </div>
          
         )

      }
      <Footer/>
    </div>
  );
}

export default Series;