const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

inputName.addEventListener('input', updateName);

function updateName() {
    const inputValue = inputName.value.trim();

    if (inputValue === "") {
        outputName.textContent = "Anonymus";
    } else {
        outputName.textContent = inputValue;
    } 
}