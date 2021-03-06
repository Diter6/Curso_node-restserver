const express = require('express')
const cors = require('cors')

class Server {

   constructor(){
     this.app = express()
     this.port = process.env.PORT;
     this.usuariosPath = '/api/usuarios';
//Middlewares
this.middlewares();
//Rutas de mi app
     this.rutas();
   } 

   middlewares() {
     //directorio publico
    this.app.use(express.static('public') );


    //Parseo y lectura del body
    this.app.use(express.json());

    //cors
    this.app.use(cors());

   }

rutas(){

    this.app.use(this.usuariosPath, require('../routes/usuarios'))

}
listen(){

    this.app.listen(this.port, () => {
        console.log('Servidor corriendo en puerto', this.port);
    
    });
}


}


module.exports = Server;