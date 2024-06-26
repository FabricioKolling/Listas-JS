/*17) Em uma máquina de cassino, ao jogar o jogador sempre ganha. Em cada 'partida' o jogador pode formar sequências de frutas que rendem valores em dinheiro. Criar um programa que pergunte ao jogador as três frutas sorteadas e mostre o valor ganho de acordo com a tabela a seguir.

   CEREJA - CEREJA - CEREJA -> R$100
   LARANJA - LARANJA - LARANJA -> R$80
   CEREJA - LARANJA - CEREJA -> R$50
   LARANJA - CEREJA - LARANJA -> R$25 */

frutaUm = prompt('Digite a primeira fruta sorteada (laranja ou cereja): ').toUpperCase()
frutaDois = prompt('Digite a segunda fruta sorteada (laranja ou cereja): ').toUpperCase()
frutaTres = prompt('Digite a terceira fruta sorteada (laranja ou cereja): ').toUpperCase()

if (frutaUm == 'CEREJA' && frutaDois == 'CEREJA' && frutaTres == 'CEREJA'){

    alert('Você recebeu R$100!')
}
else if (frutaUm == 'LARANJA' && frutaDois == 'LARANJA' && frutaTres == 'LARANJA'){

    alert("Você recebeu R$80!")
}
else if (frutaUm == 'CEREJA' && frutaDois == 'LARANJA' && frutaTres == 'CEREJA'){

    alert("Você recebeu R$50!")
}
else if (frutaUm == 'LARANJA' && frutaDois == 'CEREJA' && frutaTres == 'LARANJA'){

    alert("Você recebeu R$25!")
}

