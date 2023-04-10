const form = document.querySelector('#change-form');
const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const locationInput = document.querySelector('#location');
const bioInput = document.querySelector('#bio');
const cardTitle = document.querySelector('.card-title');
const ageText = document.querySelectorAll('.card-text')[0];
const locationText = document.querySelectorAll('.card-text')[1];
const bioText = document.querySelectorAll('.card-text')[2];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const age = ageInput.value;
  const location = locationInput.value;
  const bio = bioInput.value;
  
  cardTitle.textContent = name;
  ageText.textContent = `Idade: ${age} anos`;
  locationText.textContent = `Localização: ${location}`;
  bioText.textContent = `Biografia: ${bio}`;

  form.reset();
});