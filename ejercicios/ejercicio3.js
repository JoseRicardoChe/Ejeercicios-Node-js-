const tiempo = (sec) => {
    var result="";
    result+="\nTiempo en horas "+sec/3600+"\n";
    result+="Tiempo en minutos "+sec/60+"\n";
    result+="Tiempo en segundos "+sec/1+"\n";
    return result;
};
console.log(tiempo(60));