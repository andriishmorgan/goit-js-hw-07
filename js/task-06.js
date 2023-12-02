  const controls = document.getElementById('controls');
  const input = controls.querySelector('input');
  const createButton = controls.querySelector('[data-create]');
  const destroyButton = controls.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createButton.addEventListener('click', handleCreate);
  destroyButton.addEventListener('click', handleDestroy);

  function handleCreate() {
    const amount = input.value;

    if (amount < 1 || amount > 100) {
      alert('Please enter a number between 1 and 100.');
      return;
    }

    createBoxes(amount);
    input.value = '';
  }

  function handleDestroy() {
    boxesContainer.innerHTML = '';
  }

  function createBoxes(amount) {
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
      size += 10;
    }
  }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
