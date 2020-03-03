var miMapa = new Map();
miMapa.set(0, "cero");
miMapa.set(1, "uno");
miMapa.set(2, "dos");
miMapa.set(3, "tres");
miMapa.set(4, "cuatro");
miMapa.set(5, "cinco");
miMapa.forEach(function(valor, clave) {
    console.log(clave + ' = ' + valor);
  });