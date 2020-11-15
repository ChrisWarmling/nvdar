const {dbConfig} = require('./dbConfig')
const Pool = require('pg').Pool
const db = new Pool(dbConfig)

db.connect(function(error){
    if(error){console.log('error')
    console.log(error)
}
    else{console.log('connect!!')}
})

module.exports = db