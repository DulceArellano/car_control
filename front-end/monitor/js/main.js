let respuesta = document.getElementById("Respuesta");

function callApiRequest() {
  // Hacer una petición para un usuario con ID especifico
  axios
    .get("http://18.130.242.8/iot-car-control/back-end/apis/getRegistro.php")
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response);

      let respuestaServidor = "";
      // Mapear la respuesta a valores legibles
      switch (response.data) {
        case 'f':
          respuestaServidor = "Adelante";
          break;
        case 'b':
          respuestaServidor = "Atrás";
          break;
        case 'l':
          respuestaServidor = "Izquierda";
          break;
        case 'r':
          respuestaServidor = "Derecha";
        break;
        default:
          respuestaServidor = "Detener";
          break;          
      }

      respuesta.innerHTML = "Última respuesta: <strong>" + respuestaServidor + "</strong>";
    })
    .catch(function (error) {
      // manejar error
      console.log(error);
    })
    .finally(function () {
      // siempre sera ejecutado
    });
}

setInterval(callApiRequest, 2000);
