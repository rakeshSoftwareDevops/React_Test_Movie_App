import Header from '../assets/Header';
import Content from '../assets/Content';
import Footer from '../assets/Footer';
import Data from '../Sample.json';
import React, {useState,useEffect } from 'react';
import './Movies.css';

function Movies() {
  const [moviesStateData,setMoviesData]=useState([]);
  const [seriesStateData,setSeriesData]=useState([]);

  useEffect(()=>{
     var count=0,moviesData=[];
     Data.entries.sort((a, b)=>(a.title>b.title)?1:-1);
     for(var i=0;i<Data.entries.length;i++){
       if(count>20){
         break;
       }
       if(Data.entries[i].releaseYear>=2010 && Data.entries[i].programType=="movie"){
         count=count+1;
         moviesData.push(Data.entries[i]);
       }
     }
     setMoviesData(moviesData);

    },[Data.entries]);
  return (
    <div>
      <Header  headingTitle="Popular Movies"/>
      {
        moviesStateData.length<22?(
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

export default Movies;