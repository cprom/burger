const React = require('react')
const Html = require('./layouts/default.jsx')

const Home = () => {
  return (
    <Html>
      <div className="container">
        <div>
          <h3>Eat-Da-Burger!</h3>
        </div>

        <div class="row">
          <div class="input-field col s6">
            <input value=" " id="first_name2" type="text" class="validate" />
            <label class="active" for="first_name2">Enter Burger Name</label>
          </div>
        </div>

        <button class="btn waves-effect orange accent-3" type="submit" name="action">Submit
        <i class="material-icons right">send</i>
        </button>


      </div>
    </Html>


  )
}

module.exports = Home

