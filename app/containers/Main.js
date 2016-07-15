import React from 'react'
import Form from '../components/Form'
import * as weatherHelper from '../utils/openWeatherMapHelpers'



class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  handleSubmitQuery(e){
    e.preventDefault();
    console.log('handling query');
    let query = this.state.query;
    console.log(query);
    weatherHelper.getCurrentWeather(query)
    .then((data) =>{
      console.log(data);
    })
  }

  handleInputChange(e){
    let query = e.target.value;
    this.setState({
      query: query
    })
    console.log(this.state.query);
  }

  handleClick(e){
    console.log('clicked')
  }


  render(){
    return(
      <div>
        <Form
          onSubmitQuery={() => this.handleSubmitQuery}
          onInputChange={() => this.handleInputChange}/>

        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

module.exports = Main;
