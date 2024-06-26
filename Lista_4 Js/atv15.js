//15) Uma feira está realizando promoção na compra de ovos. Os ovos custam 40 centavos cada, se forem comprados até 12 (uma dúzia), 30 centavos cada, se forem comprados de 13 a 24 (até duas dúzias) e 25 centavos cada, caso sejam comprados mais que duas dúzias. Faça um programa que leia o número de ovos comprados, calcule e mostre na tela o valor total da compra.

var valorOvo = 0

numOvos = Number(prompt('Digite quantos ovos você comprou: '))

if (numOvos <= 12 && numOvos > 0){

    valorOvo = 0.40
}
else if (numOvos >= 13 && numOvos <= 24){

    valorOvo = 0.30
}
else if (numOvos > 24){

    valorOvo = 0.25
}

calculo = (numOvos * valorOvo)

alert('Aqui está sua conta: \n\nTotal = ' + calculo)