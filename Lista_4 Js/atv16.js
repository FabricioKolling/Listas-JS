//16) Elabore um programa que leia três lados de um triângulo e mostre na tela se ele é equilátero, isósceles ou escaleno. Quando os três lados forem iguais trata-se de um triângulo equilátero, dois lados iguais é um triângulo isósceles e os três lados diferentes é um triângulo escaleno.

ladoUm = Number(prompt('Digite o lado 1 do triangulo: '))
ladoDois = Number(prompt('Digite o lado 2 do triangulo: '))
ladoTres = Number(prompt('Digite o lado 3 do triangulo: '))

if (ladoUm == ladoDois && ladoDois == ladoTres){
    alert("É um triângulo equilátero!")
}
else if (ladoUm != ladoDois && ladoUm != ladoTres && ladoDois != ladoTres){
    alert("É um triângulo escaleno!")
}
else{
    alert("É um triângulo isósceles")
}