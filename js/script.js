const formImc = document.getElementById('formImc');
const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const btnLimpar = document.getElementById('btnLimpar');

const valorImc = document.getElementById('valorImc');
const classificacao = document.getElementById('classificacao');
const mensagem = document.getElementById('mensagem');
const pesoSaudavel = document.getElementById('pesoSaudavel');
const indicador = document.getElementById('indicador');

formImc.addEventListener('submit', function (event) {
    event.preventDefault();

    const peso = Number(pesoInput.value);
    const altura = Number(alturaInput.value);

    if (!peso || !altura || peso <= 0 || altura <= 0) {
        exibirErro('Informe um peso e uma altura válidos.');
        return;
    }

    const imc = peso / (altura * altura);
    const resultado = obterClassificacao(imc);

    const pesoMinimo = 18.5 * (altura * altura);
    const pesoMaximo = 24.9 * (altura * altura);

    valorImc.textContent = imc.toFixed(2).replace('.', ',');
    classificacao.textContent = resultado.titulo;
    mensagem.textContent = resultado.mensagem;
    pesoSaudavel.textContent = `${formatarNumero(pesoMinimo)} kg a ${formatarNumero(pesoMaximo)} kg`;

    indicador.className = `indicador ${resultado.classe}`;
});

btnLimpar.addEventListener('click', function () {
    formImc.reset();
    valorImc.textContent = '--';
    classificacao.textContent = 'Preencha os dados acima';
    mensagem.textContent = 'O resultado aparecerá aqui.';
    pesoSaudavel.textContent = '--';
    indicador.className = 'indicador';
    pesoInput.focus();
});

function obterClassificacao(imc) {
    if (imc < 18.5) {
        return {
            titulo: 'Abaixo do peso',
            classe: 'baixo',
            mensagem: 'Seu IMC está abaixo da faixa considerada adequada para adultos.'
        };
    }

    if (imc < 25) {
        return {
            titulo: 'Peso normal',
            classe: 'normal',
            mensagem: 'Seu IMC está dentro da faixa considerada adequada para adultos.'
        };
    }

    if (imc < 30) {
        return {
            titulo: 'Sobrepeso',
            classe: 'sobrepeso',
            mensagem: 'Seu IMC está acima da faixa considerada adequada para adultos.'
        };
    }

    if (imc < 35) {
        return {
            titulo: 'Obesidade grau I',
            classe: 'obesidade',
            mensagem: 'Seu IMC está na faixa classificada como obesidade grau I.'
        };
    }

    if (imc < 40) {
        return {
            titulo: 'Obesidade grau II',
            classe: 'obesidade',
            mensagem: 'Seu IMC está na faixa classificada como obesidade grau II.'
        };
    }

    return {
        titulo: 'Obesidade grau III',
        classe: 'obesidade',
        mensagem: 'Seu IMC está na faixa classificada como obesidade grau III.'
    };
}

function formatarNumero(valor) {
    return valor.toFixed(1).replace('.', ',');
}

function exibirErro(texto) {
    valorImc.textContent = '--';
    classificacao.textContent = 'Dados inválidos';
    mensagem.textContent = texto;
    pesoSaudavel.textContent = '--';
    indicador.className = 'indicador obesidade';
}
