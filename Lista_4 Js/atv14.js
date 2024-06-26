//14) Elabore um programa que leia a idade e o tempo de serviço de um trabalhador e escreva se ele pode ou nao se aposentar. As condições para aposentadoria são: a) Ter pelo menos 65 anos b) Ter trabalhado pelo menos 30 anos c) Ter pelo menos 60 anos e ter trabalhado pelo menos 25 anos

idadePessoa = Number(prompt('Digite sua idade: '))
tempoServico = Number(prompt('Digite seu tempo de serviço: '))

if(idadePessoa >= 65){
    alert('Pode se aposentar!')
}
else if(tempoServico >= 30){
    alert('Pode se aposentar!')
}
else if(idadePessoa >= 60 && tempoServico >= 25){
    alert('Pode se aposentar!')
}
else{
    alert('Não pode se aposentar!')
}