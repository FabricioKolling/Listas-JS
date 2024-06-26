//13) Em um jogo o seu personagem tem 100 de HP (vida). Criar um programa onde o usuário digite o valor de um dano (ataque sofrido pelo personagem). Caso a vida do personagem chegue a zero ou negativo, mostrar na tela "Game Over". Se a vida ficar de 1 a 20, mostrar "Dano crítico, quase sem vida", se a vida ficar de 21 a 50, mostrar "Dano moderado, vida estável" e se a vida ficar entre 51 a 100, mostrar "Dano leve, vida boa!".

var hpPersonagem = 100

atkSofrido = Number(prompt('Digite quanto de dano você fará no personagem: '))

hpPersonagem = (hpPersonagem - atkSofrido)

if (hpPersonagem <= 0){
    alert('Game Over')
}
else if (hpPersonagem >= 1 && hpPersonagem <= 20){
    alert('Dano crítico, quase sem vida')
}
else if (hpPersonagem >= 21 && hpPersonagem <= 50){
    alert('Dano moderado, vida estável')
}
else if (hpPersonagem >= 51 && hpPersonagem <= 100){
    alert('Dano leve, vida boa!')
}