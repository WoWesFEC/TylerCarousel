const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'wowescarousel.crg6wckxsyhk.us-east-2.rds.amazonaws.com',
  user: 'rhodetyl000',
  password: 'Nonewpassword',
  port: 3306,
  database: 'Wowes'
});



connection.connect(err => {
  console.log('now connected to your database')
});

const getAllData = (callback) => {
  connection.query(`select * from items`, (err, data) => {
    if(err){
      console.log('something went wrong in db trying to get all data')
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
}

const getCategories = (id, callback) => {
  connection.query(`select * from items where category = (select category from items where id =${id})`, (err, data) => {
    if(err){
      console.log('something went wrong with getting categories in db')
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
}
const getItem = (id, callback) => {
  connection.query(`select * from items where id =${id}`, (err, data) => {
    if(err){
      console.log('something went wrong with getting categories in db')
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
}

module.exports = {getAllData, getCategories, getItem}


