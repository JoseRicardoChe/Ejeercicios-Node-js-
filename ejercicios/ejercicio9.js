var impar = (num)=>{
    if (num==1)
    return 1;
    else
    return (num+impar(num-2));
}
console.log(impar((5*2)-1));
console.log(impar((4*2)-1));
console.log(impar((7*2)-1));