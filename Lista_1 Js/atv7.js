//7) Um festival de música está terceirizando a montagem da estrutura. A empresa contratada necessita saber uma estimativa de público para calcular a quantidade de bares e banheiros. O cálculo utilizado é de 1 banheiro para cada 50 pessoas e 1 bar para cada 150 pessoas. Criar um programa onde seja digitado o público esperado e mostrar na tela em média quantos banheiros e bares seriam necessários.

publico = Number(prompt('Digite a quantidade de pessoas que iram vir para o festival: '))

banheiros = (publico/50)
bares = (publico/150)

alert(`A media de banheiros será de ${Math.round(banheiros)} e de bares será de ${Math.round(bares)}.`)