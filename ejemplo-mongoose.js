//ejemplo de mongoose para esquemas

var mongoose = require('mongoose'); //Requiere a mongoose
mongoose.connect("mongod://localhost/test"); //se conecta a la base que corre en localhost/test

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'error de conección:'));
db.once('abierta', function() { //comprueba el estado de la conección con la base de datos
  var zonaArqEsquema = mongoose.Schema({ //se declara el esquema
    nombre: String,
    cultura: String
  })

  zonaArqEsquema.methods.cultura = function () {
    var pertenece = this.cultura
    ? "Pertenece a la cultura" + this.cultura
    : "No tienen cultura";
    console.log(pertenece);
  }

  var zonaArq = mongoose.model('zonaArq', zonaArqEsquema); //se compila el esquema en un modelo.
                                                          //El modelo es una clase con la que se construyen los documentos
  var teotihuacan = new zonaArq({ nombre: 'Teotihuacan', cultura: 'teotihuacana'});
  console.log(teotihuacan.name);
  teotihuacan.cultura();
});
