document.addEventListener('DOMContentLoaded', function () {
    const visor = document.querySelector('.visor');
    const botoes = document.querySelectorAll('.btn');

    let expressao = '';

    botoes.forEach((botao) => {
        botao.addEventListener('click', () => {
            if (botao.innerText === 'AC') {
                expressao = '';
            } else if (botao.innerText === '=') {
                try {
                    expressao = eval(expressao).toString();
                } catch (error) {
                    expressao = 'Erro';
                }
            } else {
                expressao += botao.innerText;
            }

            visor.innerText = expressao;
        });
    });
});
