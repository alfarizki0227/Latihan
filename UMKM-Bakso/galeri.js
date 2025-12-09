const cards = document.querySelectorAll('.card');

const tampilkanNama = (card) => {
    const img = card.querySelector('img');
    const nama = card.querySelector('p');

   
    const { alt } = img;

    nama.textContent = `Nama Produk: ${alt}`;
};

const efekHover = (card) => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hover-aktif');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('hover-aktif');
    });
};

cards.forEach((card) => {
    card.addEventListener('click', () => tampilkanNama(card));
    efekHover(card);
});

export default cards;
