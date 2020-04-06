const React = require('react')
const Html = require('./layouts/default.jsx')

const Home = () => {
  return (
    <Html>
      <div className="container">
        <div>
          <h3>Eat-Da-Burger!</h3>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input value=" " id="first_name2" type="text" className="validate" />
            <label className="active" for="first_name2">Enter Burger Name</label>
          </div>
        </div>

        <button className="btn waves-effect orange accent-3" type="submit" name="action">Submit
        <i className="material-icons right">control_point</i>
        </button>


      </div>
    </Html>


  )
}

module.exports = Home

