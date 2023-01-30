const router = require("express").Router();
const Todo  = require("../model/schema");

router.get("/get/pelicula", async (req, res) => {
  try{
    const allTodoPeliculas = await Todo.find();
    res.status(200).json(allTodoPeliculas);
  } catch (error){
    res.json(error);
  }
  });

  router.post("/new/pelicula", async (req, res) => {
    try{
      const newPelicula = new Todo({
        id: req.body.id,
        titulo: req.body.titulo,
        ano: req.body.ano,
        tiempo: req.body.tiempo,
        lenguaje: req.body.lenguaje,
        fechalanzamiento: req.body.fechalanzamiento,
        pais: req.body.pais
      });
      const savePelicula = await newPelicula.save();
      res.status(200).json(savePelicula);
    } catch (error){
      console.log(error);
    }
    });


    router.put("/new/pelicula/:id", async (req, res) => {
      try{
        const updatePelicula = await Todo.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json("Pelicula actualizada");
      } catch (error){
        res.json(error);
      }
      });


      router.delete("/new/pelicula/:id", async (req, res) => {
        try{
          const deletePelicula = await Todo.findByIdAndRemove(req.params.id);
          res.status(200).json("Pelicula eliminada");
        } catch (error){
          res.json(error);
        }
        });


  module.exports = router;
