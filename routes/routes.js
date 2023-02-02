// Se llama al metodo express.Router() que va a devolver un objeto en el se podran ingresar metodos.
const router = require("express").Router();
const Todo  = require("../model/schema");

// se definen las rutas para el servidor con el manejador de eventos de Node.js
// El metodo get nos trae los datos que esten el la db
router.get("/get/pelicula", async (req, res) => {
  try{
    // con find se busca en los datos de la base de datos, el await indica que la tarea puede tardar entonces deberá esperar
    const allTodoPeliculas = await Todo.find();
    // generalmente retorna archivos tipo JSON, entonces se especifica el tipo de dato
    res.status(200).json(allTodoPeliculas);
  } catch (error){
    res.json(error);
  }
  });

  router.get("/get/pelicula/:id", async (req, res) =>{
    try {
      const oneMovie = await Todo.findOne(req.params.id)
      res.status(200).json(oneMovie)
    } catch (error) {
      res.json(error)
    }
  })

  // metodo post utilizado para agregar datos a la db
  // req es un objeto que almacena los datos que envia el navegador
  router.post("/new/pelicula", async (req, res) => {
    try{
      
      // Se especifican los datos que se van a obtener del cliente para una nueva pelicula
      const newPelicula = new Todo({
        
        id: req.body.id,
        titulo: req.body.titulo,
        ano: req.body.ano,
        tiempo: req.body.tiempo,
        lenguaje: req.body.lenguaje,
        fechalanzamiento: req.body.fechalanzamiento,
        pais: req.body.pais
      });

      // Ahora que se han recibido se deben guardar
      const savePelicula = await newPelicula.save();
      res.status(200).json(savePelicula);
    } catch (error){
      console.log(error);
    }
    });

    // Para actualizar peliculas se requiere el id de la pelicula a actualizar
    router.put("/new/pelicula/:id", async (req, res) => {
      try{
        const updatePelicula = await Todo.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json("Pelicula actualizada");
      } catch (error){
        res.json(error);
      }
      });

      // Para eliminar peliculas se requiere el id de la pelicula
      router.delete("/new/pelicula/:id", async (req, res) => {
        try{
          const deletePelicula = await Todo.findByIdAndRemove(req.params.id);
          res.status(200).json("Pelicula eliminada");
        } catch (error){
          res.json(error);
        }
        });


  module.exports = router;
