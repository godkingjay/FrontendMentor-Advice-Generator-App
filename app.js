const adviceDisplay = [document.querySelector('.advice-id'), document.querySelector('.advice-text')];
const adviceGeneratorBtn = document.querySelector('.btn-advice-generator');

async function generatAdvice(){
  let advice = await fetch('https://api.adviceslip.com/advice');
  let result = await advice.json().then(data => data.slip);
  advice = null;
  return result;
}

async function setAdvice(){
  let advice = await generatAdvice();
  console.log(advice);
  adviceDisplay[0].textContent = advice.id;
  adviceDisplay[1].textContent = `"${advice.advice}"`;
};

setAdvice();
adviceGeneratorBtn.addEventListener('click', setAdvice);