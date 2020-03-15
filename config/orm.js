const connection = require('./connection.js')

const orm = {
  selectAll = (cb) => {
    db.query(
      "SELECT * FROM burgers",
      function (err, data) {
        if (err) throw err

        cb(data)
      }
    )
  }
insertOne = (newBurger, cb) => {
    var q = db.query(
      "INSERT INTO burgers (burger_name) VALUES (?)",
      [
        newBurger
      ],
      function (err, data) {
        if (err) throw err

        cb(data)
      }
}


updateOne = (burger, cb) => {
    db.query(
      "UPDATE burgers SET ? WHERE ?",
      [
        {
          eaten: burger.eaten
        }, {
          id: burger.id
        }
      ],
      function (err, data) {
        if (err) throw err

        cb(data)
      }
}


}