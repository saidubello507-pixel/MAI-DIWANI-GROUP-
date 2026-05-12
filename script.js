// script.js
let count = 0;

// Select elements from the DOM 
const display = document       .getElementById('display');
const btnInc = document      .getElementById('increment');
const btnDec = document        .getElementById('decrement');
const btnReset = document     .getElementById('reset');

// Function to update the color based on value
function updateColor() {
    if (count > 0) display.style.color = "green";
    else if (count < 0) display.style.color = "red";
    else display.style.color = "#333";
}

// Event Listeners
btnInc.addEventListener('click', () => {
    count++;
    display.textContent = count;
    updateColor();
});

btnDec.addEventListener('click', () => {
    count--;
    display.textContent = count;
    updateColor();
});

btnReset.addEventListener('click', () => {
   count = 0;
   display.textContent = count;
   updateColor();
});