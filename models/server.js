const express = require ("express");

class Server{
    constructor(){
        this.app= express();
        this.port= 8080;
    }

    Route(){
      


    }

    Listen(){
        this.app.listen(this.port,()=>{
            console.log("server online port:",this.port);
        })
    }
}

module.exports= Server;
