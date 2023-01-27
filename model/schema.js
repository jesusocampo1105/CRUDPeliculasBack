const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String },
  año: { type: String },
  tiempo: { type: String },
  lenguaje: { type: String },
  fechaLanzamiento: { type: String },
  pais: { type: String }
});

module.exports = mongoose.model("todo", TodoSchema);
