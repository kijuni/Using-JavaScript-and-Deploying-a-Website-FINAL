/********* create variables *********/
const dayButtons = document.querySelectorAll('.day-selector li');
const halfButton = document.getElementById('half');
const fullButton = document.getElementById('full');
const clearButton = document.getElementById('clear-button');
const calculatedCostElement = document.getElementById('calculated-cost');

let dailyRate = 35;
let selectedDays = [];

/********* colour change days of week *********/
dayButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('clicked')) {
            button.classList.add('clicked');
            selectedDays.push(button.id);
        } else {
            button.classList.remove('clicked');
            selectedDays = selectedDays.filter(day => day !== button.id);
        }
        calculateCost();
    });
});

/********* clear days *********/
clearButton.addEventListener('click', () => {
    dayButtons.forEach(button => {
        button.classList.remove('clicked');
    });
    selectedDays = [];
    calculateCost();
});

/********* change rate *********/
halfButton.addEventListener('click', () => {
    dailyRate = 20;
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    calculateCost();
});

fullButton.addEventListener('click', () => {
    dailyRate = 35;
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    calculateCost();
});

/********* calculate *********/
function calculateCost() {
    const totalCost = dailyRate * selectedDays.length;
    calculatedCostElement.innerHTML = totalCost;
}


