import React from 'react'
import Form from './Form'

const HomePage = (props) =>{
  return (
    <div className="jumbotron">
      <h1>Get the weather</h1>
      <p>Enter a city and state</p>
      <Form alignment='form-inline' onGetWeather={props.onGetWeather}/>
    </div>
  )
}

module.exports = HomePage;
