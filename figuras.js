// Codigo cuadrado
console.group("Cuadrados");
// const LadosCuadro = 5;
// console.log("Los lados del cuadrados miden: " + LadosCuadro + "CM");

// const perimetroCuadrado = LadosCuadro * 4;
// console.log("el perimetro del cuadrados miden: " + perimetroCuadrado + "CM");

function perimetroCuadrado (lado) {
    return lado * 4;
} 


function areaCuadrado(lado) {
  
    return lado * lado;
} 


// console.log("el perimetro del cuadrados miden: " + areaCuadrado + "CM*2");
console.groupEnd();
// Codigo Triangulo
console.group("Triangulos");
// const ladoTriangulo1 = 5;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 8;
// const alturaTriangulo = 5.1;
// console.log(
//     "Los lados del Triangulo miden: "
//     + ladoTriangulo1
//     + "CM, "
//     + ladoTriangulo2 
//     +"CM, "
//     + baseTriangulo
//     + "CM"
//     );
// console.log("La altura del triangulo es de: " + alturaTriangulo + "CM*2");
function   perimetroTriangulo (lado1, lado2, base)  {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// function   areaTriangulo ( base, altura)  {
//     return (base * altura) /  2;
// }
// console.log("El area del triangulo es igual a : " + areaTriangulo + "CM*2");
console.groupEnd();

//Area Circunferencia
console.group("Circulos");


//Radio
// const radioCirculo = 4;
//Diamitro
// const diametroCirculo = radioCirculo * 2; 
function diametroCirculo(radio) {
    return radio * 2;
}

//Pi
const Pi = Math.PI;
//Circunferencia
// const perimetroCirculo = diametroCirculo * Pi;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * Pi; 
}
//area
// const areaCirculo = (radioCirculo * radioCirculo) * Pi;

function areaCirculo(radio) {
    return (radio * radio) * Pi;
    
}





// console.log("El radio del circulo es: " + radioCirculo + "CM");
// console.log("EL diametro del circulo es igual a: " + diametroCirculo + "CM");
// console.log("EL perimetro del circulo es igual a: " + perimetroCirculo + "CM");
// console.log("EL area del circulo es igual a: " + areaCirculo + "CM");


console.groupEnd();


//Aqui empiesa la magia lol para el cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(params) {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const area = areaCuadrado(value);
    alert(area);
    
}

//Aqui empiesa la magia lol para el triangulo

function calcularPerimetroTriangulo(params) {
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    
    const perimetro = perimetroTriangulo(value);
    alert(perimetro);

}

function calcularAreaTriangulo(params) {
    const input = document.getElementById("InputTriangulo");
    const value = input.value; 

    const area = areaTriangulo(value)
    alert(area);
}


function calcularPerimetroCircu(params) {
    const input = document.getElementById("InputCircunferencia");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro)
    
}

function calcularAreaCircu(params) {
    const input = document.getElementById("InputCircunferencia");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area)
    
}

function calcularDiametroCircu(params) {
    const input = document.getElementById("InputCircunferencia");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro)
    
}

