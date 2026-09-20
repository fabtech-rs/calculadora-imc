# Calculadora de IMC

Projeto simples desenvolvido com HTML, CSS e JavaScript para calcular o Índice de Massa Corporal (IMC).

## Funcionalidades

- Cálculo do IMC.
- Classificação automática do resultado.
- Exibição da faixa de peso saudável conforme a altura informada.
- Validação dos campos.
- Botão para limpar os dados.
- Interface responsiva para desktop e dispositivos móveis.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## Estrutura do projeto

```text
calculadora-imc/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Como executar

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` em qualquer navegador moderno.

Não é necessário instalar dependências ou executar servidor local.

## Fórmula utilizada

O IMC é calculado pela fórmula:

```text
IMC = peso / altura²
```

## Classificação utilizada

| IMC | Classificação |
| --- | --- |
| Abaixo de 18,5 | Abaixo do peso |
| 18,5 a 24,9 | Peso normal |
| 25,0 a 29,9 | Sobrepeso |
| 30,0 a 34,9 | Obesidade grau I |
| 35,0 a 39,9 | Obesidade grau II |
| 40,0 ou mais | Obesidade grau III |

## Observação

Esta aplicação possui finalidade educacional e demonstrativa. O IMC é apenas um indicador geral e não substitui avaliação profissional de saúde.
