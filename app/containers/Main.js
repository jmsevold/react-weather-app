import React from 'react'
import Form from '../components/Form'
import * as weatherHelper from '../utils/openWeatherMapHelpers'
import { Router } from 'react-router';



class Main extends React.Component {
  constructor(props,context) {
    super(props)
    context.router
    this.handleSubmitQuery = this.handleSubmitQuery.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      query: ''
    }
  }

  handleSubmitQuery(e){
    e.preventDefault();
    let query = this.state.query;
    //browserHistory.push(`/forecast/${query}`);
    this.context.router.push({pathname: `/forecast/${query}`})
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
          onSubmitQuery={this.handleSubmitQuery}
          onInputChange={this.handleInputChange}/>
      </div>
    );
  }
}

Main.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = Main;
