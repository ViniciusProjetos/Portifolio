// Seleciona o botão pelo seu ID
const btnToggle = document.getElementById('btnToggle');
const btnToggle2 = document.getElementById('btnToggle2');
const btnToggle3 = document.getElementById('btnToggle3');
const btnToggle4 = document.getElementById('btnToggle4');

// Seleciona a div pelo seu ID
const minhaDiv = document.getElementById('minhaDiv');
const minhaDiv2 = document.getElementById('minhaDiv2');
const minhaDiv3 = document.getElementById('minhaDiv3');
const minhaDiv4 = document.getElementById('minhaDiv4');

// Adiciona um evento de clique para o botão
btnToggle.addEventListener('click', (event) => {
    event.preventDefault();
    // Alterna entre exibir e ocultar a div com apenas um clique
    minhaDiv.style.display = minhaDiv.style.display === 'none' ? 'block' : 'none';
    minhaDiv2.style.display = 'none'
    minhaDiv3.style.display = 'none'
    minhaDiv4.style.display = 'none'
});
// Adiciona um evento de clique para o botão
btnToggle2.addEventListener('click', (event) => {
    event.preventDefault();
    // Alterna entre exibir e ocultar a div com apenas um clique
    minhaDiv2.style.display = minhaDiv2.style.display === 'none' ? 'block' : 'none';
    minhaDiv.style.display = 'none'
    minhaDiv3.style.display = 'none'
    minhaDiv4.style.display = 'none'
});
// Adiciona um evento de clique para o botão
btnToggle3.addEventListener('click', (event) => {
    event.preventDefault();
    // Alterna entre exibir e ocultar a div com apenas um clique
    minhaDiv3.style.display = minhaDiv3.style.display === 'none' ? 'block' : 'none';
    minhaDiv.style.display = 'none'
    minhaDiv2.style.display = 'none'
    minhaDiv4.style.display = 'none'
});
// Adiciona um evento de clique para o botão
btnToggle4.addEventListener('click', (event) => {
    event.preventDefault();
    // Alterna entre exibir e ocultar a div com apenas um clique
    minhaDiv4.style.display = minhaDiv4.style.display === 'none' ? 'block' : 'none';
    minhaDiv.style.display = 'none'
    minhaDiv2.style.display = 'none'
    minhaDiv3.style.display = 'none'
});