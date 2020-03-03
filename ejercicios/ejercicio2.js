function validarRango(elemento){
    var numero = parseInt(elemento.value,10);
    //Validamos que se haya ingresado solo numeros
    if(isNaN(numero)){
      alert('Ingrese solo números.');
      elemento.focus();
      elemento.select();
      return false;
    }
    //Validamos que se cumpla el rango
    if(numero<4 || numero>20){
      alert('Solo se permite el siguiente rango: 4 - 20');
      elemento.focus();
      return false;
    }
    return true;
  }
  console.log(validarRango(5));