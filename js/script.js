const ageInput = document.getElementById('age');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const submitBtn = document.querySelector('.form__submit-button');
const resetBtn = document.querySelector('.form__reset-button');
const maleBtn = document.getElementById('gender-male');
const container = document.querySelector('.counter__result');

// Управление атрибутами кнопок в зависимости от заполненных полей
function handleInputChange() {
  let ageValue = Number(ageInput.value);
  let weightValue = Number(weightInput.value);
  let heightValue = Number(heightInput.value);
  
  const inputFilled = ageValue !== 0 && weightValue !== 0 && heightValue !== 0;
  const inputEmpty = ageValue === 0 && weightValue === 0 && heightValue === 0;

  if (inputFilled) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', 'true');
  }

  if (!inputEmpty) {
    resetBtn.removeAttribute('disabled');
  } else {
    resetBtn.setAttribute('disabled', 'true');
  }
}

ageInput.addEventListener('change', handleInputChange);
weightInput.addEventListener('change', handleInputChange);
heightInput.addEventListener('change', handleInputChange);

// При клике на сброс все элементы приложения сбрасываются до состояния по умолчанию
function handleResetButtonClick () {
  ageInput.value = 0;
  weightInput.value = 0;
  heightInput.value = 0;
  handleInputChange();
  minBtn.checked = true;
  maleBtn.checked = true;
  container.classList.add('counter__result--hidden');
}

resetBtn.addEventListener('click', handleResetButtonClick);

// Cостояние по умолчанию при перезагрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  const reloaded = sessionStorage.getItem('reloaded');
  
  if (reloaded) {
    handleResetButtonClick();
  } 
});
