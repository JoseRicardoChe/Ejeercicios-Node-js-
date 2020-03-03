var lista = [1, 3, 10, 30, 100, 300];
var lista2 = [1, 3, 30, 10, 100, 300];
var ascOrder = (listas)=> {
    return (
        listas.join("") ===listas.sort((a, b) => a - b).join("")
    );
};
  console.log(ascOrder(lista));
  console.log(ascOrder(lista2));