// import mysql from 'mysql2'
const mysql = require('mysql2')


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "zakonKirhgofa",
    database: 'course_aqa_hillel'
})

connection.connect(function (err) {
    if (err) {
        console.error('error during connection to DB' + err.message)
    } else {
        console.log('successfully connected to DB')
    }
})

// create DB
// connection.query('CREATE DATABASE course_aqa_hillel',
//     function (err) {
//         if (err) console.error(err.message)
//         else console.log('Database created')
//     })


// create table
// connection.query(`CREATE TABLE my_group (
//     PersonID int primary key auto_increment,
//     LastName varchar(255),
//     FirstName varchar(255),
//     Address varchar(255),
//     City int(255) 
// )`, function(err) {
//     if(err) console.error(err.message)
//     else console.log('Table created')
// })

connection.query(`INSERT INTO my_group(LastName, FirstName) VALUES('BB', 'LL')`, function(err) {
    if (err) console.error(err.message)
    else console.log('Data added')
})

connection.query('SELECT * FROM my_group',
function(err, results) {
    if (err) console.error(err.message)
    else console.log(results)
})


// in the end need to close connection 
connection.end()