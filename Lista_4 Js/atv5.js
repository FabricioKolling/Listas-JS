//5) Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), faça a média e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado!" e a média. Caso seja menor que 7, mostre uma mensagem "Reprovado!" e a média. (DESAFIO: Incluir "Recuperação", sendo a média entre 5 e 7, e "Reprovado" apenas para médias abaixo de 5)

notaUm = Number(prompt('Digite sua primeira nota: '))
notaDois = Number(prompt('Digite sua segunda nota: '))
notaTres = Number(prompt('Digite sua terceira nota: '))

media = ((notaUm + notaDois + notaTres)/3)

if(media >= 7){
    alert('Aprovado! Sua média: '+ media)
}
else if(media < 7){
    alert("Reprovado! Sua média: "+ media)
}
