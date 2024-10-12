import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = 'http://www.omdbapi.com?apikey=14546103';

const MovieDetail =()=>{
    const {id}=useParams();
    const [moviedata,setMovieData]= useState(null);
    
useEffect(()=>{
    const moviedetails = async () => {
        const response = await fetch(`${API_URL}&i=${id}`);
        const data = await response.json();
        setMovieData(data);
        console.log(data);
    }
    moviedetails();
},[id]);
return(
    <div>
        {moviedata?(
            <div>
                <p>{moviedata.Year}</p>
                <p>{moviedata.Title}</p>
                <p>{moviedata.Type}</p>
                <p>{moviedata.imdbID}</p>
                <p>{moviedata.Plot}</p>
                <img 
             src={moviedata.Poster !== "N/A" ? moviedata.Poster : 'https://via.placeholder.com/400'} 
             alt={moviedata.Title} 
                 />
            </div>
        ):(
            <h1>no movie data found</h1>
        )
    }

    </div>
);
};


export default MovieDetail;
