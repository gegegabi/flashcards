function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container');

    // Estrutura do card
    const card = document.createElement('div');
    card.classList.add('card');

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    cardFront.innerHTML = `<strong>${categoria}</strong><br><br>${pergunta}`;

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    cardBack.innerHTML = resposta;

    // Monta a estrutura
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    container.appendChild(card);

    // Evento para virar o card
    card.addEventListener('click', () => {
        cardInner.classList.toggle('flip');
    });
}
