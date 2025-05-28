const metricBtn = document.getElementById('metric-btn');
const imperialBtn = document.getElementById('imperial-btn');
const heightUnit = document.getElementById('height-unit');
const weightUnit = document.getElementById('weight-unit');
const calculateBtn = document.getElementById('calculate-btn');
const bmiResult = document.getElementById('bmi-result');
const bmiMessage = document.getElementById('bmi-message');
const resultBox = document.querySelector('.result-box');

// Default is metric
let isMetric = true;

// Toggle units on click
metricBtn.addEventListener('click', () => {
    isMetric = true;
    metricBtn.classList.add('active');
    imperialBtn.classList.remove('active');
    heightUnit.textContent = 'cm';
    weightUnit.textContent = 'kg';
});

imperialBtn.addEventListener('click', () => {
    isMetric = false;
    imperialBtn.classList.add('active');
    metricBtn.classList.remove('active');
    heightUnit.textContent = 'in';
    weightUnit.textContent = 'lbs';
});

// Calculate BMI
calculateBtn.addEventListener('click', () => {
    // Read required inputs
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    let bmi;

    // Enforce all fields have data
    if (!height || !weight) {
        bmiMessage.textContent = 'Please enter all fields.';
        resultBox.style.backgroundColor = '#ffffff'; // Reset color
        bmiResult.textContent = '';
        return;
    }

    // Different BMI calculation based on metric/imperial
    // Reference: https://en.wikipedia.org/wiki/Body_mass_index#History
    if (isMetric) {
        bmi = weight / ((height / 100) ** 2);
    } else {
        bmi = (weight / (height ** 2)) * 703;
    }

    bmi = bmi.toFixed(1);
    bmiResult.textContent = bmi;

    // Set result box colour and text depending on BMI result
    if (bmi < 18.5) {
        bmiMessage.textContent = "Your BMI indicates that you are underweight.";
        resultBox.style.backgroundColor = "#fff4e5"; // Light orange
    } else if (bmi < 25) {
        bmiMessage.textContent = "This is within the HEALTHY range for your height and weight.";
        resultBox.style.backgroundColor = "#e6fff2"; // Light green
    } else if (bmi < 30) {
        bmiMessage.textContent = "Your BMI indicates that you are overweight.";
        resultBox.style.backgroundColor = "#fffce6"; // Light yellow
    } else {
        bmiMessage.textContent = "Your BMI indicates that you are in the obese range.";
        resultBox.style.backgroundColor = "#ffe6e6"; // Light red
    }
});