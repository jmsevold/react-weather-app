import React from 'react'

const Form = (props) => {
  return (
    <div className="jumbotron">
      <h1>Get the weather</h1>
      <p>Enter a city and state</p>
      <form className="form-inline" onSubmit={props.onSubmitQuery}>
        <div className="form-group">
          <input
            type="textarea"
            className="form-control"
            placeholder="City, State"
            onChange={props.onInputChange}>
          </input>
        </div>
        <button
          type="submit"
          className="btn btn-default btn-success">
          Get Weather
          </button>
      </form>
    </div>
  )
}

module.exports = Form;
