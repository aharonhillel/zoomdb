const { Pool, Client } = require('pg')
const client = new Client({
  user: 'aaron',
  host: process.env.DATABASE_URL,
  database: 'zoomdb',
  password: '6/8/97',
  port: 5432,

})

module.exports = client;


// require('dotenv/config') //enviornmental variables
// const { Pool, Client } = require('pg')
// console.log(process.env.PORT)
// const client = new Client({
 
//   user: process.env.USER,
//   host: process.env.HOST,
//   database: process.env.DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: process.env.PORT,
// })

// module.exports = client;

