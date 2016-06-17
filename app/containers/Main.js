import React from 'react'
import Form from '../components/Form'
import HomePage from '../components/HomePage'



class Main extends React.Component {
  constructor(props) {
    super(props)
    this.handleGetWeather = this.handleGetWeather.bind(this)
  }

  handleGetWeather(e){
    e.preventDefault();
    console.log('sdfds');
  }

  render(){
    return(
      <div>
        <Form alignment="navbar-form navbar-right" onGetWeather={this.handleGetWeather}/>
        <HomePage />
      </div>
    );
  }
}

module.exports = Main;
