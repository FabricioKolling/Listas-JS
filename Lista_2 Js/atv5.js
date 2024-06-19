//5) Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela. 

peso = Number(prompt('Digite seu peso: '))
altura = Number(prompt('Digite sua altura: '))

imc = (peso / altura * altura)

alert('Aqui esta seu IMC: '+ imc)