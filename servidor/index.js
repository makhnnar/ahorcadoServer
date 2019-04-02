const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'users',
  password: 'root',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'users',
  password: 'root',
  port: 5432,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})


const text1 = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *';
const text2 = 'SELECT * from "usuario" WHERE id = ? ';

// callback
client.query(text, values, (err, res) => {
  const consulta ={
    text: sql,
    values: params,
    rowsMode: 'object',
  };
  this.cliente.query(consulta,(err,res) =>{
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows[0])
    }
  };
};

this.crearpersona = function(nombre,nickname,fecha, cb) {
  var sql = 'INSERT INTO persona(nombre, nickname, fecha) VALUES($1, $2, $3)';
  query(sql, [nombre,nickname,fecha],function(err, result) {
    if (err){ 
      cb(err,null);
    }else{
      cb(null,result);
    }
  });
};

this.crearusuario = function(email, pass, cb) {
  var sql = 'INSERT INTO usuario(email, pass) VALUES($1, $2)';
  query(sql, [email, pass],function(err, result) {
    if (err){ 
      cb(err,null);
    }else{
      cb(null,result);
    }
  });
};

/*

const express = require('express');

var router = express.Router();

var pg =require('pg');
var db = pg "postgres://postgres:root@localhost/Users";

db.one("SELECT $1 AS value", 123)
    .then(function (data) {
        console.log("DATA:", data.value);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });




var pgp = require("pg-promise");
var db = pgp("postgres://username:password@host:port/database");

db.one("SELECT $1 AS value", 123)
    .then(function (data) {
        console.log("DATA:", data.value);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });



*/