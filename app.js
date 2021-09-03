const Express = require('express')
const App = Express()
const PORT = 7000
const Morgan = require('morgan')
const DotEnv = require('dotenv')

const mysql = require('mysql')

App.use(Morgan('dev'))

App.listen(PORT, () => console.log('Server is running : ${ PORT }'))

const ConnectionToMysql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'binar',
})

//connect to database
// ConnectionToMysql.connect( (err, ResponseConnect) => {
//     if ( err ) console.log(err)
//     if ( ResponseConnect ) {
//         console.log('Sukses Connect to database')

//         let QueryCreateDatabase = "CREATE DATABASE binar"
//         ConnectionToMysql.query(QueryCreateDatabase, (err, ResultCreate) => {
//            if (err) console.log('Cant Create Database')
//             if ( ResultCreate ) {
//                console.log(ResultCreate)
//             }
//         }) 
//        }
// })

//creat table users game
let QueryCreateTableUsers = "CREATE TABLE users_game ( id VARCHAR(255), username varchar(255), password varchar(255) )"
ConnectionToMysql.query(QueryCreateTableUsers, (err, ResultTable) => {
    if (err) {
        console.log(err)
        console.log('Cant Creat Table To Database')
    }
    if ( ResultTable ) {
        console.log('Sukses Create Table Users Game')
    }
})

//creat table users game biodata
let QueryCreateTableBiodata = "CREATE TABLE users_game_biodata ( id VARCHAR(255), username varchar(255), password varchar(255), email varchar(255), address varchar(255) )"
ConnectionToMysql.query(QueryCreateTableBiodata, (err, ResultTable) => {
    if (err) {
        console.log(err)
        console.log('Cant Creat Table To Database')
    }
    if ( ResultTable ) {
        console.log('Sukses Create Table Users Game Biodata')
    }
})


//creat table users game history
let QueryCreateTableHistory = "CREATE TABLE users_game_hidtory ( id VARCHAR(255), score varchar(255) )"
ConnectionToMysql.query(QueryCreateTableHistory, (err, ResultTable) => {
    if (err) {
        console.log(err)
        console.log('Cant Creat Table To Database')
    }
    if ( ResultTable ) {
        console.log('Sukses Create Table Users Game History')
    }
})

// mas, saya sudah nonton record kelasnya tapi masih belum paham banget dan baru paham sampe bikin table seperti ini
// maaf kalau terlalu pendek karena saya udah coba tapi masih bingung banget
// terima kasih untuk pengertiannya mas enricho