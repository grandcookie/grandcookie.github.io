const metricBtn = document.getElementById('metric-btn');
const imperialBtn = document.getElementById('imperial-btn');
const weightUnit = document.getElementById('weight-unit');
const calcBtn = document.getElementById('calc-energy');
const kJResult = document.getElementById('kJ-result');
const proteinMsg = document.getElementById('protein-msg');

// Default option
let isMetric = true;

// Toggle units on click
metricBtn.addEventListener('click', () => {
    isMetric = true;
    metricBtn.classList.add('active');
    imperialBtn.classList.remove('active');
    weightUnit.textContent = 'kg';
});

imperialBtn.addEventListener('click', () => {
    isMetric = false;
    imperialBtn.classList.add('active');
    metricBtn.classList.remove('active');
    weightUnit.textContent = 'lbs';
});

// Calculate caloric intake
calcBtn.addEventListener('click', () => {
    // Read required inputs
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    let weight = parseFloat(document.getElementById('weight').value);
    const activity = document.getElementById('activity').value;

    // Enforce all fields have data
    if (!gender || !age || !weight || !activity) {
        kJResult.textContent = '--';
        proteinMsg.textContent = 'Please enter all fields.';
        return;
    }

    // Convert if required
    if (!isMetric) {
        weight = weight * 0.45359; // lbs to kg conversion
    }

    // Set activity multiplier
    let multiplier = 1.2; // sedentary
    if (activity === "moderate") multiplier = 1.5;
    if (activity === "active") multiplier = 1.75;

    // Different formula depending on male or female. Assumed 175cm height
    // Reference: https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation
    const BMR = (gender === "male") ?
        10 * weight + 6.25 * 175 - 5 * age + 5 :
        10 * weight + 6.25 * 175 - 5 * age - 161;

    const kJ = BMR * multiplier * 4.184;
    const protein = Math.round(weight * 1.5); // grams/day

    kJResult.textContent = Math.round(kJ).toLocaleString() + " kJ";
    proteinMsg.textContent = `Try to aim for ${protein} grams of protein per day!`;
});