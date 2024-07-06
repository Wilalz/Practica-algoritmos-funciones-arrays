// 1. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let title = document.querySelector('h1');
title.innerHTML = "Hora del desafío";

// 2. Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function botonClikeado() {
    console.log("Botón clikeado")
};


// 3. Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function mensajeCiudad() {
    let city = prompt("Dime un nombre de una ciudad de Brasil");
    alert (`Estuve en ${city} y me acordé de ti!`);
};

// 4. Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function yoAmoJs () {
    alert ("Yo amo Js");
}

// 5. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function suma () {
    let primerNumero = parseInt(prompt ("Ingresa el primer número:"));
    let segundoNumero = parseInt(prompt ("Ingresa el segundo número:"));
    alert(primerNumero + segundoNumero);
}


// 8. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function doble(){
    let num = parseInt(prompt("Ingresa un numero para duplicarlo"));
    let doble = num * num
    alert(`El doble de ${num} es: ${doble}`);
}

// 9. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedioDeTres() {
    let primero = parseInt(prompt("Ingresa el primer número"));
    let segundo = parseInt(prompt("Ingresa el segundo número"));
    let tercero = parseInt(prompt("Ingresa el tercer número"));
    let prom = ((primero + segundo + tercero)/3).toFixed(2);
    alert(`El promedio entre ${primero}, ${segundo} y ${tercero} es: ${prom}`); 
}

// 10. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayor() {
    let primero = parseInt(prompt('Ingrese el primer número'));
    let segundo = parseInt(prompt('Ingrese elsegundo número'));
    if (primero === segundo){
        alert(`Los dos números son iguales`);
    } else if (primero > segundo){
        alert(`El número mayor es: \n${primero}`);
    } else {
        alert(`El número mayor es: \n${segundo}`);
    }
}

// 11. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo
// MODIFICADA - Cree una funcion que recibe 2 parametros y devuelve el resultado de su multimpliación

function multiplicarNumeros (multiploUno, multiploDos) {
    return multiploUno * multiploDos;
}

function multiplicar (){
    let primero = parseInt(prompt('Ingrese el primer número'));
    let segundo = parseInt(prompt('Ingrese el segundo número'));
    let resultado = multiplicarNumeros(primero, segundo);
    alert(`El resultado de multiplicar ${primero} por ${segundo} es:\n ${resultado}`);
}

// 12. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function indiceMasaCorporal(){
    
    let altura = parseInt(prompt(`Vamos a calcular tu índice de masa corporal (IMC)\n Ingresa tu altura en centimetros`));
    let peso = parseInt(prompt(`Ahora ingresa tu peso en kilogramos`))
    let imc = 0.0
    let alturaMetrosAlCuadrado = (altura/100)*(altura/100)
    let evaluacionImc = '';

    imc = (peso/alturaMetrosAlCuadrado).toFixed(1);
    if(imc <18.5){
        evaluacionImc = 'IMC menor a 18.5\nEstás en el rango de delgadez o bajo peso'
    } else if(imc<24.9){
        evaluacionImc = 'IMC entre 18.5 y 24.9\nTienes un peso saludable'
    } else if(imc <29.9){
        evaluacionImc = 'IMC entre 25 y 29.9\nTienes sobrepeso'
    } else {
        evaluacionImc = 'IMC mayor a 30\nTienes sobrepeso'
    }

    alert(`Tu índice de masa corporal es ${imc}\n${evaluacionImc}`)
}

// 13. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial () {
    let numero = parseInt(prompt('Dame un número para calcular su factorial'));
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i
    }
    alert(`El factorial de ${numero} es ${factorial}`);
}

// 14. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function copToUsd() {
    let pesosCo = parseInt(prompt('Ingresa la cantidad de dinero en pesos colombianos'))
    let pesosCoFormateado = new Intl.NumberFormat().format(pesosCo);
    let valorDolar = 3928.56;
    let valorDolarFormateado = new Intl.NumberFormat().format(valorDolar);
    let dolares = new Intl.NumberFormat().format(((pesosCo / valorDolar).toFixed(2)));
    alert(`${pesosCoFormateado} pesos colombianos son ${dolares} USD aproximadamente\nTasa de cambio dolar ${valorDolarFormateado}`);
}

function usdToCop() {
    let usd = parseInt(prompt('Ingresa la cantidad de dinero en dolares'))
    let usdFormateado = new Intl.NumberFormat().format(usd);
    let valorDolar = 3928.56;
    let valorDolarFormateado = new Intl.NumberFormat().format(valorDolar);
    let pesos = new Intl.NumberFormat().format(((usd * valorDolar).toFixed(0)));
    alert(`${usdFormateado} USD son ${pesos} pesos colombianos aproximadamente\nTasa de cambio dolar ${valorDolarFormateado}`);
}

// 15. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function cuadrado() {
    let longitud = parseInt(prompt(`Vamos a calcular el área y perimetro de un cuadrado\nDime la medida de uno de sus lados en metros`));
    let area = longitud*longitud
    let perimetro = longitud*4
    alert(`El area es ${area} m2 y perimetro es ${perimetro} metros`);
}

function rectangulo() {
    let ladoUno = parseInt(prompt(`Vamos a calcular el área y perimetro de un rectangulo\nDime la medida de uno de sus lados en metros`));
    let ladoDos = parseInt(prompt(`Dime la medida del otro lado en metros`));
    let area = ladoUno*ladoDos
    let perimetro = (ladoUno*2)+(ladoDos*2);
    alert(`El area es ${area} m2 y perimetro es ${perimetro} metros`);
}
// 16. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function circulo() {
    let radio = parseInt(prompt(`Vamos a calcular el área y perimetro de una figura circular\nDime la medida de su radio en metros`));
    let area = (Math.PI*radio*radio).toFixed(1);
    let perimetro = (2*Math.PI*radio).toFixed(1);
    alert(`El area es ${area} m2 y perimetro es ${perimetro} metros`);
}

// 17. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaMultiplicar() {
    let numero = parseInt(prompt(`Te mostraré la tabla de multiplicar\nDame un numero`))
    let resultados = []
    for (let i = 0; i < 10; i++) {
        resultados[i] = `${numero} * ${i+1} = ${numero*(i+1)}`
    }
    alert(`La tabla de multimplicar del ${numero} es:\n
        ${resultados[0]}\n
        ${resultados[1]}\n
        ${resultados[2]}\n
        ${resultados[3]}\n
        ${resultados[4]}\n
        ${resultados[5]}\n
        ${resultados[6]}\n
        ${resultados[7]}\n
        ${resultados[8]}\n
        ${resultados[9]}\n`    
    )
}