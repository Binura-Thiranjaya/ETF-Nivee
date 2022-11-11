import React, { Component } from 'react'
import HomePage from './HomePage'
import { useState} from 'react'
import Axios from 'axios'

export default function Page2() {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  function Search() {
    if(category === 'Title') {
      Axios.get('http://localhost:3000/movies/title/' + value).then((response) => {
        alert(response.data.Title);
      });
    }
    else if(category === 'Genre') {
      Axios.get('http://localhost:3000/movies/genre/' + value).then((response) => {
        alert(response.data.Title);
      });
    }
    else if(category === 'Director') {
      Axios.get('http://localhost:3000/movies/director/' + value).then((response) => {
        alert(response.data.Title);
      });
    }
    else if(category === 'Actor') {
      Axios.get('http://localhost:3000/movies/actor/' + value).then((response) => {
        alert(response.data.Title);
      });
    }
    else if(category === 'Year') {
      Axios.get('http://localhost:3000/movies/year/' + value).then((response) => {
        alert(response.data.Title);
      });
    }
    else if(category === 'Rating') {
      Axios.get('http://localhost:3000/movies/rating/' + value).then((response) => {
        alert(response.data.Title);
      });
    }
    else if(category === 'MID')
    {
      Axios.get('http://localhost:3000/movies/mid/' + value).then((response) => {
        alert(response.data.Title);
      });
    }
  
  
  }
  
  
  
  return (

    <div>
       <div>
      <HomePage />
      <div className="container mt-2">
        <input type="text"  className="form-control" onChange={(e)=>setValue(e.target.value)}/>
        <div class="form-group">
        <label for="exampleFormControlSelect2">Search By</label>
        <select  class="form-control" id="exampleFormControlSelect2" onChange={(e)=>setCategory(e.target.value)}>
          <option default>Select Item</option>
          <option value="MID">MID</option>
          <option value="Title">Title</option>
          <option value="Year">Year</option>
          <option value="Rating">Rating</option>
          <option value="Genre">Genre</option>
          <option value="Director">Director</option>
          <option value="Actor">Actor</option>
        </select>
      </div>
        <button type="button" className="btn btn-primary m-3" onClick={Search}>Search</button>
      </div>
  
    </div>
    </div>
  )
}