var lista = [1, 3, 10, 30, 100, 300];
var lista2 = [1, 3, 30, 10, 100, 300];
var lista3 = [1, 3, 10, 30, 100, 300];

var same = (list1,list2)=>{
    if (list1.length==list2.length && list1.every((list,i)=> list === list2[i])){
        return ("las listas son iguales");
    }else{
        return ("las listas no son iguales");
    }
}

console.log(same(lista,lista2));
console.log(same(lista,lista3));