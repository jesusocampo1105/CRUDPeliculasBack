const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String },
  ano: { type: String },
  tiempo: { type: String },
  lenguaje: { type: String },
  fechalanzamiento: { type: String },
  pais: { type: String }
});

module.exports = mongoose.model("pelicula", TodoSchema);
