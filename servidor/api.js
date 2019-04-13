const express = require('express');

const cors = require('cors');

const DB = require('./Database');

const restApi = express();

const bodyParser = require('body-parser');

//restApi.use(express.json());

const manager = DB();

restApi.use(express.static('imagenes'));
restApi.use(bodyParser.json());
restApi.use(bodyParser.urlencoded({ extended: true }));

restApi.use(cors());

restApi.options('*', cors());

var server = require('http').createServer(restApi);

server.listen(3005,()=>console.log('Listening in port 3005'));

restApi.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

restApi.post('/crear_nuevo_usuario',(req,res) => {
    console.log(' ');
    console.log('Valores: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    manager.crearpersona(
      valor.nombre,
      valor.nickname,
      valor.fecha,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'no created data'
          });
        }else{
          
          manager.crearusuario(
            valor.email,
            valor.pass,
            result[0].id_persona,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'no created data'
                });
              }else{
                res.send({
                  status:'success',
                  data:'data created'
                });
              }
            }
          );
        }
      }
    );
    //manager.crearusuario(valor.email,valor.pass)
  });

  /*
  
  restApi.post('/post_detalle',(req,res)=>{
    console.log(' ');
    console.log('Estare recibiendo el id????: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let id_detalle = req.body.id_detalle;
    if(
      id_detalle!==null&&
      id_detalle!==undefined
    ){
      res.send({
        status:'success',
        data:data.detalles[id_detalle-1]
      });
    }else{
      res.send({status:'No Params for Query'});
    }
  });
  
  */