const Sybase = require('sybase')

class SybasePromised {
  constructor ({ host, port, dbname, username, password }) {
    this.sybase = new Sybase(host, port, dbname, username, password)
  }

  connect () {
    return new Promise((resolve, reject) => {
      this.sybase.connect(err => {
        if (err) reject(err)

        resolve(this)
      })
    })
  }

  query (sql) {
    return new Promise((resolve, reject) => {
      this.sybase.query(sql, (err, data) => {
        if (err) reject(err)

        resolve(data)
      })
    })
  }

  disconnect () {
    this.sybase.disconnect()
  }
}

module.exports = SybasePromised
