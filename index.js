// ## Quiz sobre JavaScript
// Este quiz testa seus conhecimentos básicos sobre JavaScript.
// ### Perguntas

const perguntas = [
    {
      pergunta: "Qual é a finalidade do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir uma mensagem de erro",
        "Imprimir dados no console",
        "Criar uma variável"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em comparações em JavaScript?",
      respostas: [
        "Comparação de valores sem considerar o tipo",
        "Atribuição de valores",
        "Comparação estrita de valores e tipos"
      ],
      correta: 2
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let myVar;",
        "const myVar = 10;",
        "ambas as opções acima estão corretas"
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um bloco de código reutilizável",
        "Uma variável global"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Nenhuma, são sinônimos",
        "let é usado para valores constantes, const para variáveis",
        "let permite reatribuição, const cria variáveis imutáveis"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um método de criptografia",
        "Um modelo de objeto para manipular documentos HTML",
        "Uma linguagem de programação"
      ],
      correta: 1
    },
    {
      pergunta: "Como se realiza uma iteração sobre os elementos de um array em JavaScript?",
      respostas: [
        "Usando a estrutura 'if-else'",
        "Com a declaração 'switch'",
        "Utilizando loops como 'for' ou 'forEach'"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Um método de formatação de texto",
        "Uma linguagem de estilização",
        "Um formato de dados leve e intercambiável"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
      respostas: [
        "São iguais, usados de forma intercambiável",
        "'null' representa a ausência de valor, 'undefined' é atribuído explicitamente",
        "Ambos representam valores vazios"
      ],
      correta: 1
    },
    {
      pergunta: "Como se adiciona um evento a um elemento HTML usando JavaScript?",
      respostas: [
        "Apenas com CSS",
        "Usando o atributo 'event'",
        "Através do método 'addEventListener'"
      ],
      correta: 2
    },
  ];
  
  // ### Código principal
  /// Cria as constantes para substituir os dados
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')

  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
 // Loop ou laço de repetição para colocar as perguntas na tela
  for(const item of perguntas) {
    // Cria um elemento HTML para a pergunta
    const quizItem = template.content.cloneNode(true)
    // Preenche o texto da pergunta
    quizItem.querySelector('h3').textContent = item.pergunta
    
    // Loop para colocar as respostas na tela
    for(let resposta of item.respostas){
        // Cria um elemento HTML para a resposta
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        // Preenche o texto da resposta
        dt.querySelector('span').textContent = resposta
        // Permitir a seleção de várias respostas no input, uma para cada pergunta, registrando o índice da pergunta no array "perguntas".
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta 
            
            corretas.delete(item)
            if (estaCorreta) {
               corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        // Adiciona o elemento da resposta à lista de respostas
        quizItem.querySelector('dl').appendChild(dt)
    }
    
    // Remove o elemento "Resposta A" (que é um placeholder)
    quizItem.querySelector('dl dt').remove()

    // Adiciona o elemento da pergunta ao quiz
    quiz.appendChild(quizItem)
  }