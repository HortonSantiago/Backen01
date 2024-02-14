console.log("funciona la conexion");

const socket = io();
socket.emit("mensaje", "hola mundo!");

socket.on("saludito", (data) => {
  console.log(data);
});
