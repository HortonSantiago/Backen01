const express = require("express");
const app = express();
const PORT = 8080;
const productsRouter = require("./routes/products.router.js");
const cartsRouter = require("./routes/carts.router.js");
const viewsRouter = require("./routes/views.router.js");

const exphbs = require("express-handlebars");
const multer = require("multer");

// Para guardar correctamente los archivos podemos configurar el storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/public/img");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// La constante upload va a tener la configuración de multer
const upload = multer({ storage });

// Configurar la ruta
app.post("/upload", upload.single("imagen"), (req, res) => {
  res.send("lo envie con exito");
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

// Rutas:
app.use("/api", productsRouter);
app.use("/api", cartsRouter);
app.use("/api", viewsRouter);

// Lo utilizamos para conectar el CSS y JS
app.use(express.static("./src/public"));

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
