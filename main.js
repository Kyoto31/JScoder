function promedioDeNotas(total, cantidadDeNotas){
    return total/cantidadDeNotas;
}

let ruta = ""
let notasIngresadas = 0
let total = 0
let nombre = ""


do{

    let valorIngresado = Number(prompt("Ingrese su nota n° "+(notasIngresadas+1)))
    

total = total + valorIngresado

    notasIngresadas++;
    

    ruta = prompt("Escriba ¨ESC¨ para terminar o presione Enter para continuar").toUpperCase()
} while(ruta !="ESC")



alert("Su promedio de notas es de: "+promedioDeNotas(total,notasIngresadas))