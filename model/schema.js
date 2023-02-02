const mongoose = require("mongoose");

// Schema permite definir el esquema de los datos
const TodoSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String },
  ano: { type: String },
  tiempo: { type: String },
  lenguaje: { type: String },
  fechalanzamiento: { type: String },
  pais: { type: String }
});

// Se define el nombre del modelo "pelicula" para poder reutilizar y como estructura o esquema se tomará a TodoSchema
module.exports = mongoose.model("pelicula", TodoSchema);
