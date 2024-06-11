Atividade 1 

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

Atividade 2

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// SUBI NUM ÔNIBUS EM MIRROCOS 30

Atividade 3

const nomeDoUsuario = prompt("Digite seu nome:");
const emailDoUsuario = prompt("Digite seu e-mail:");

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`);


Atividade 4 

const comidasPreferidas = ["Lasanha", "Sushi", "Hambúrguer", "Pizza", "Churrasco"];

// a) Imprimindo o array completo
console.log("a) Array completo:", comidasPreferidas);

// b) Imprimindo as comidas uma embaixo da outra
console.log("b) Essas são as minhas comidas preferidas:");
for (const comida of comidasPreferidas) {
    console.log(comida);
}

// c) Substituindo a segunda comida pelo input do usuário, se fornecido
const novaComida = prompt("Digite sua comida preferida:");
if (novaComida) {
    comidasPreferidas[1] = novaComida;
}
console.log("c) Nova lista de comidas preferidas:", comidasPreferidas);

Atividade 5 

// a) Criando um array vazio e guardando em uma variável chamada listaDeTarefas
const listaDeTarefas = [];

// b) Perguntando ao usuário 3 tarefas e armazenando-as no array
for (let i = 0; i < 3; i++) {
    listaDeTarefas.push(prompt(`Digite a tarefa ${i + 1}:`));
}

// c) Imprimindo o array no console
console.log("Tarefas:", listaDeTarefas);

// d) Pedindo ao usuário que digite o índice de uma tarefa realizada
const indiceRealizada = parseInt(prompt("Digite o índice da tarefa realizada (0, 1 ou 2):"));

// e) Removendo a tarefa escolhida pelo usuário, se o índice fornecido for válido
listaDeTarefas.splice(indiceRealizada, 1);

// f) Imprimindo o array atualizado no console
console.log("Lista de Tarefas Atualizada:", listaDeTarefas);

