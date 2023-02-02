// aqui se llaman los modulos para poder ejcutarlos despues
const express = require("express");
const mongoose = require("mongoose");
// Este modulo permite ejecutar React con el servidor
const cors = require("cors");

// se crea un objeto cuando se ejecute express y se almacena en app, que corresponde al servidor
const app = express();
const PORT = 3000;

// Se llama al archivo que contiene las rutas
const routes = require("./routes/routes");
const connectionOptions ={ useUnifiedTopology: true,
    useNewUrlParser: true, useFindAndModify: false};

// cada vez que llegue un dato al servidor va a pasar por esta funcion y esta comprueba si es formato JSON
app.use(express.json());
app.use(cors());

// Se especifica la dirección de la base de datos que se va a conectar
// mongoose.connect("mongodb+srv://DanikMonday:Data123@danikmachine.bmnuvy7.mongodb.net/test")
mongoose.connect("mongodb+srv://jesusocampo1105:Colombia2020**@peliculascrud.cefxvzm.mongodb.net/?retryWrites=true&w=majority")

// Envia un mensaje para saber si la conexion fue exitosa o error de lo contrario
.then(() => console.log("Connected successfully"))
.catch((err) => console.error(err));

// Se llama el archivo que contiene las rutas para que lo utilice la app
app.use("/", routes);

// aqui el servidor escuchará en el puerto que se determine y ejecutará la funcion, en este caso un mensaje por consola
app.listen(PORT, ()=>{
  console.log("mi puerto es " + PORT);
});
