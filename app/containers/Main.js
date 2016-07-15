import React from 'react'
import Form from '../components/Form'
import HomePage from '../components/HomePage'
import * as weatherHelper from '../utils/openWeatherMapHelpers'




class Main extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmitQuery = this.handleSubmitQuery.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state ={
      query: ''
    }
  }

  handleSubmitQuery(e){
    e.preventDefault();
    let query = this.state.query;
    console.log(query);
    weatherHelper.fiveDayForecast(query)
    .then((data) =>{
      console.log(data);
    })
  }

  handleInputChange(e){
    let query = e.target.value;
    this.setState({
      query: query
    })
  }

  render(){
    return(
      <div>
        <Form
          alignment="navbar-form navbar-right"
          onInputChange={this.handleInputChange}
          onGetWeather={this.handleSubmitQuery}/>
        <HomePage
          onGetWeather={this.handleSubmitQuery}
          onInputChange={this.handleInputChange}/>
      </div>
    );
  }
}

module.exports = Main;
