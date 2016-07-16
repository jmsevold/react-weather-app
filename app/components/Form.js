import React from 'react'

const Form = (props) =>{
  return (
    <div>
      <form className={props.alignment} onSubmit={props.onGetWeather}>
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
