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
        dataLoaded: true,
        weather: data
      })
    })
  }


  render(){
    return(
      this.state.dataLoaded
      ?
      <div>
        {JSON.stringify(this.state.weather, null, ' ')}
      </div>
      :
      <p>Loading</p>

    );
  }
}

module.exports = CityForecast;
