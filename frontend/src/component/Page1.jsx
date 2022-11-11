import React, { useState } from 'react';
import HomePage from './HomePage';
import {useEffect} from 'react';
import Axios from 'axios';

export default function Page1() {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3000/movies/').then((response) => {
            setMovieList(response.data);
        });
    }, []);
    const arr = movieList.map((val) => {
        return (
            <div className="card" style={{width: "18rem"}}>
                <div class="card-body">
                    <h5 class="card-title">{val.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{val.Year}</h6>
                    <p class="card-text">{val.Rating}</p>
                    <p class="card-text">{val.Genre}</p>
                    <p class="card-text">{val.Director}</p>
                </div>
                <div class="card-footer">
                <small class="text-muted">{val.Actors}</small>
                </div>
            </div>
        );
    });

  return (
    <div>
    <HomePage />
        <div className="container mt-2">
            <p className="text-uppercase h1">Movies</p>
            <div className="card-group">
                {arr}
             </div>
        </div>
    </div>  
)
}
