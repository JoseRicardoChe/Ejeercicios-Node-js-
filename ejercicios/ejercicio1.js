

const power = function (base, exponente){
    let result = 1;
    for(let count=0; count < exponente; count++){
        result*=base;
    }
    return result;
};
console.log(power(2,4));
