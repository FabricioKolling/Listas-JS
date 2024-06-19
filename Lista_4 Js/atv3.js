//3) Desenvolva um programa que peça dois números ao usuário e informe qual é o maior e qual é o menor, ou se são iguais.

numeroUm = Number(prompt('Digite um numero:'))
numeroDois = Number(prompt('Digite outro numero:'))

if(numeroUm > numeroDois){
    alert(numeroUm +' é maior que '+ numeroDois)
}
else if(numeroDois > numeroUm){
    alert(numeroDois +' é maior que '+ numeroUm)
}
else if(numeroUm == numeroDois){
    alert('Estes numeros sao iguais.')
}