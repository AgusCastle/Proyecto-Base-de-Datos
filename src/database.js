const mssql = require('mssql');

var config = {
    server: "DESKTOP-RGK0OPT",
    database: "puntodeventa"
}

const conection = mssql.connect(config, function(err, res){
    if(err){
        throw err;
    }else{
        console.log("Conexion establecida de SQL server");
    }
});

module.exports = app;