//7) Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N). Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade. Caso contrário, mostrar mensagem "Não pode se vacinar!".

nomePessoa = prompt('Digite seu nome: ')
idadePessoa = Number(prompt('Digite sua idade: '))
temComorbidade = prompt('Você possui comorbidade? (S ou N)')

if(idadePessoa >= 60 || temComorbidade == 'S'){
    alert('Pode se vacinar!')
}
else{
    alert('Não pode se vacinar!')
}
