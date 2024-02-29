const ratingButtons = document.querySelectorAll('.rating-buttons .btn');
const submitButton = document.getElementById('submit-btn');
const selectedRating = document.getElementById('selected-rating');
const boxOne = document.querySelector('.box-one');
const boxTwo = document.querySelector('.box-two');

let selectedValue = null;

ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedValue = button.getAttribute('data-value');
    selectedRating.textContent = selectedValue;
    submitButton.style.display = 'block'; // Mostra o botão de submit após selecionar um valor
  });
});

submitButton.addEventListener('click', () => {
  if (selectedValue !== null) {
    boxOne.style.display = 'none';
    boxTwo.style.display = 'block';
    console.log('Rating submitted:', selectedValue);
    // Aqui você pode enviar o valor selecionado para onde quiser
    // Exemplo: enviar para um servidor via AJAX
  } else {
    alert('Please select a rating before submitting.');
  }
});


function toggleTheme() {
  const element = document.getElementById('toggle-theme');
  document.body.classList.toggle('dark-theme');

  if (element.textContent === 'Dark') {
    element.textContent = 'Light';
  }
  else {
    element.textContent = 'Dark';
  }
}