const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-text');
const adviceGeneratorBtn = document.querySelector('.btn-advice-generator');

window.onload = generateAdvice;

adviceGeneratorBtn.addEventListener('click', generateAdvice);

function generateAdvice(){
  fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => data.slip)
  .then(data => {
    adviceId.textContent = data.id;
    adviceText.textContent = data.advice;
  });
}