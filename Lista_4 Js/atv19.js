//19) Um nutricionista precisa controlar a dieta para pacientes celíacos (intolerantes à glúten) e pacientes com intolerância à lactose. Criar um programa onde o paciente deve digitar seu nome e em seguida responder se é celíaco (primeira pergunta) e se é intolerante à lactose (segunda pergunta). Validar as respostas de SIM e NÃO para letras maiúsculas e minúsculas. Em seguida coletar os dados de 3 alimentos, sendo digitado o nome do alimento, se ele contém glúten ou não e se ele contém lactose ou não. Ao final, informar se o paciente pode comer os 3 alimentos digitados "Dieta adequada!" ou não pode "Dieta inadequada, contém alimentos aos quais o paciente é intolerante!".

let gluten, lactose
let proibido = false

nome = prompt('Qual é seu nome?')
celiaco = prompt('Você se é celíaco? (SIM/NÃO)').toUpperCase()
intolerante = prompt('Você é intolerante à lactose? (SIM/NÃO)').toUpperCase()

alimento = prompt('Digite um alimento:')
gluten = prompt('Tem glúten? (SIM/NÃO)').toUpperCase()
lactose = prompt('Tem lactose? (SIM/NÃO)').toUpperCase()

if(gluten == 'SIM' && celiaco == 'SIM' || lactose == 'SIM' && intolerante == 'SIM' ){
   
    proibido = true
}

alimento = prompt('Digite um alimento:')
gluten = prompt('Tem glúten? (SIM/NÃO)').toUpperCase()
lactose = prompt('Tem lactose? (SIM/NÃO)').toUpperCase()

if(gluten == 'SIM' && celiaco == 'SIM' || lactose == 'SIM' && intolerante == 'SIM' ){
   
    proibido = true
}

alimento = prompt('Digite um alimento:')
gluten = prompt('Tem glúten? (SIM/NÃO)').toUpperCase()
lactose = prompt('Tem lactose? (SIM/NÃO)').toUpperCase()

if(gluten == 'SIM' && celiaco == 'SIM' || lactose == 'SIM' && intolerante == 'SIM' ){
   
    proibido = true
}

if(proibido == true){
    alert(' "Dieta inadequada, contém alimentos aos quais o paciente é intolerante!')
}

else{
    alert('Dieta adequada!')
}