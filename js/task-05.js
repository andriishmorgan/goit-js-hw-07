  const widget = document.querySelector('.widget');
  const colorSpan = document.querySelector('.color');
  const changeColorButton = document.querySelector('.change-color');

  changeColorButton.addEventListener('click', fixedChangeColor);

  function fixedChangeColor() {
    const whatEverColor = getRandomHexColor();

    document.body.style.backgroundColor = whatEverColor;
    colorSpan.textContent = whatEverColor;
  }

  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}