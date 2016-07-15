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
        <p>heres the same damn form, but not as a component</p>

        <form className='form-inline' onSubmitQuery={this.handleSubmitQuery.bind(this)}>
        <h1>Get the weather</h1>
        <p>Enter a city and state</p>
          <div className="form-group">
            <input
              type="textarea"
              className="form-control"
              placeholder="City, State"
              onChange={this.handleInputChange.bind(this)}>
            </input>
          </div>
          <button
            type="submit"
            className="btn btn-default btn-success">
            Get Weather
          </button>
        </form>
      </div>
    );
  }
}

module.exports = Main;
