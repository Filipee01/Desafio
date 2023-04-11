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
  nameValidate()
  ageValidate()
  locateValidate()
  bioValidate()

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


function previewProfileImage(event) {
  const input = event.target;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const previewImage = document.getElementById("preview-profile-image");
      previewImage.src = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
  }
}


const form1 = document.querySelector('form')
const inputss = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')


function setError(index) {
    inputss[index].style.border = '2px solid #e63636'
    spans[index].style.display = 'block'
}

function removeError(index) {
  inputss[index].style.border = ''
  spans[index].style.display = 'none'
}

function nameValidate() {
  if(inputss[0].value.length < 3) {
    setError(0)
  }
  else {
    removeError(0)
  }
}

function ageValidate() {
  if(inputss[1].value.length != 2) {
    setError(1)
  }
  else{
    removeError(1)
  }
}

function locateValidate() {
  if(inputss[2].value.length < 4 ) {
    setError(2)
  }
  else {
    removeError(2)
  }
}

function bioValidate() {
  if(inputss[3].value.length < 5 ) {
    setError(3)
  }
  else {
    removeError(3)
  }
}