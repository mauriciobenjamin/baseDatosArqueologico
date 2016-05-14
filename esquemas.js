var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sitioArqueologico = new Schema({ //tipos de datos String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array
  nombre: String,
  claveINAH: String,
  coordenadas: {
    type: [Number], // [<longitud>, <latitud>]
    index: '2d'
  }
  estado: String,
  municipio: String,
  localidad: String,
})

var estructuras = new Schema({
  nombre: String,
  descripcion: String,
  fecha_captura: Date,
  fecha_registro: Date,
  fecha_modificacion_ {
    type: Date,
  }
})

var elemento = new Schema({
  nombre: String,
  tipo: 
});