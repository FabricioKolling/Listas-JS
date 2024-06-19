//9) Criar um programa que simule o login de um roteador. O nome de usuário (username) é "admin" e a senha (password) "123". Pedir ao usuário para digitar username e password. Caso os dados estejam corretos, mostrar uma mensagem "Login efetuado!", caso contrário "Login falhou!". (DESAFIO: Mostrar mensagens específicas para erro de username, de password ou de ambos).

let user = 'admin'
let senha = 123

username = prompt('Digite seu username: ')
senhaUser = Number(prompt('Digite sua senha:'))

if(username == user && senhaUser == senha){
    alert('Login efetuado!')
}
else if(username != user && senhaUser == senha){
    alert('Username não encontrado!')
}
else if(username == user && senhaUser != senha){
    alert('Senha incorreta!')
}
else if(username != user && senhaUser != senha){
    alert('Login falhou!')
}