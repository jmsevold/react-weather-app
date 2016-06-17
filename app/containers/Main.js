import React from 'react'
import Form from '../components/Form'
import HomePage from '../components/HomePage'



class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div>
        <Form alignment="navbar-form navbar-right"/>
        <HomePage />
      </div>
    );
  }
}

module.exports = Main;
