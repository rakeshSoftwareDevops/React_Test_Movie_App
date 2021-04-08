import './Content.css';
import React, {useState,useEffect } from 'react';


function Content(props) {
  const [selectedCategory,setSelectedCategory]=useState('');

  useEffect(()=>{
    console.log("go here");
    console.log(window.location.pathname);
    if(window.location.pathname==='/movies'){
      setSelectedCategory('movies');
    }
    if(window.location.pathname==='/series'){
      setSelectedCategory('series');
    }
    console.log(selectedCategory);
   });
  
  return (
    <div className="ContentWrapper">
      <div className="inner-content">
        

        {selectedCategory==='movies'?(
           props.moviesData.map((image)=>{
            return (
             <div className="movieList">
               <img key={image.title} src={image.images.PosterArt.url} width="100" height="100"/>
               <p>{image.title}</p> 
             </div>
      
            )
            })

        ):(
          props.seriesStateData.map((image)=>{
            return (
             <div className="movieList">
               <img key={image.title} src={image.images.PosterArt.url} width="100" height="100"/>
               <p>{image.title}</p> 
             </div>
      
            )
            })
        ) 
      }

      </div>
    </div>
  );
}

export default Content;