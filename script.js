const contactBlock = document.querySelector('.contactButtonsBlock');
const button = document.querySelector('.contactButton');

button.addEventListener('click', () => {
    contactBlock.classList.toggle('active');
});


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', function () {

        const isActive = this.classList.contains('active');

        // Сначала закрываем все карточки
        cards.forEach(c => c.classList.remove('active'));

        // Если карточка НЕ была открыта — открываем её
        if (!isActive) {
            this.classList.add('active');
        }

    });
});

















