import React from 'react'
import * as weatherHelper from '../utils/openWeatherMapHelpers'



class CityForecast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: null,
      dataLoaded: false
    }
  }

  componentDidMount(){
    const query = this.props.params.city;
    weatherHelper.getCurrentWeather(query)
    .then((data) =>{
      console.log(data);
      this.setState({
        dataLoaded: true
      })
    })
  }


  render(){
    return(
      this.state.dataLoaded
      ?
      <div>
        Forecast
      </div>
      :
      <p>Loading</p>

    );
  }
}

module.exports = CityForecast;
