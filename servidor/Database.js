var Database = function(){

  const { Client } = require('pg')

  this.connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'users',
    password: 'root',
    port: 5432,
  }

  this.client = null;

  this.init = function(){
    console.log("Conecting to ---> "+this.DATABASE_URL);
    this.cliente = new Client(this.connectionData);
    this.cliente.connect();
  };

  this.query = function(sql,params,cbError,cbSuccess){
    let consulta = {
      text: sql,
      values: params,
      rowMode: 'object',
    };
    this.cliente.query(
      consulta,
      (err,res) =>{
        if(err){
          console.log(err);
          cbError();
        }else{
          cbSuccess(res.rows);
        }
      }
    );
  }

  this.crearpersona = function(nombre,nickname,fecha, cb) {
    console.log('crear persona');
    var sql = 'INSERT INTO persona(nombre, nickname, fecha) VALUES($1, $2, $3) RETURNING id_persona';
    this.query(
      sql,
      [nombre,nickname,fecha],
      () => {
        cb(true,null);
      },
      (res) => {
        console.log(JSON.stringify(res));
        cb(null,res);
      }
    );
  };

  this.crearusuario = function(email, pass, id_persona, cb) {
    console.log('crear usuario');
    var sql = 'INSERT INTO usuario(email, password, id_persona) VALUES($1, $2, $3)';
    this.query(
      sql, 
      [email, pass, id_persona],
      () => {
        cb(true,null);
      },
      (res) => {
        cb(null,res);
      }
    );
  };

  this.loguear = function(email, pass, cb){
    console.log('Revisando usuario');
    var sql = "SELECT * FROM usuario WHERE email = $1 and password = $2";
    this.query(
      sql,
      [email,pass],
      () => {
        console.log('datos erroneos');
        cb(true,null);
      },
      (res) => {
        console.log(JSON.stringify(res));
        console.log('Datos correctos');
        cb(null,res);
      }
    );
  }

  this.consultaEmail = function (email, cb){
    console.log(' ... ');
    var sql = "SELECT * FROM usuario WHERE email = $1";
    this.query(
      sql,
      [email],
      () => {
        console.log('');
        cb(true,null)
      },
      (res) => {
        console.log('');
        cb(null,res);
      }
    );
  }

  this.cambiarContraseña = function (pass, email, cb){
    console.log(' ... ');
    var sql = "UPDATE usuario SET password = $1 WHERE email = $2";
    this.query(
      sql,
      [pass],
      () => {
        console.log(' ');
        cb(true,null);
      },
      (res) => {
        console.log(' ');
        cb(null,res);
      }
    );
  }

};

module.exports = function(){
  var instancia = new Database();
  instancia.init();
  return instancia;
};
