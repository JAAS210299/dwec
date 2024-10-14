const getAvenger = function(nombre: string, poder?: string, arma: string = "arco"){
    if(arma === ""){
        arma = "arco";
    }
    var mensaje;
    if(poder){
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
        mensaje = nombre + " tiene el poder de: " + poder + "  y un arma: " + arma + " ";
    }
    else{
        mensaje =  nombre + " tiene un " + poder;
        mensaje =  nombre + " tiene un: " + poder;
    }
    return mensaje;
};
console.log(getAvenger("Mujer maravilla", "", ""));