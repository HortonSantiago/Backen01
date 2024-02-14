const express = require("express");
const router = express.Router();

const arrayProductos = [
  { nombre: "fideos", descripcion: "el mejor", precio: 100 },
  { nombre: "arroz", descripcion: "el peor", precio: 10 },
];

// desarrollamos la ruta

router.get("/", (req, res) => {
  let usuario = {
    nombre: "santiago",
    apellido: "horton",
    mayorEdad: true,
  };

  res.render("home", { usuario, arrayProductos, titulo: "Home" });
});

router.get("/contacto", (req, res) => {
  res.render("contacto", { titulo: "Contacto" });
});

module.exports = router;
