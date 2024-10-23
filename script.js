(function(){

         "use strict";

    document.getElementById('calorieForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const gender = document.getElementById('gender').value;
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const age = parseFloat(document.getElementById('age').value);
        const activity = parseFloat(document.getElementById('activity').value);

        // BMR Berechnung basierend auf Geschlecht
        let bmr;
        if (gender === 'male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;  // Männer
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161; // Frauen
        }

        const calories = bmr * activity;

        document.getElementById('result').textContent = `Ihr täglicher Kalorienbedarf beträgt: ${Math.round(calories)} Kalorien.`;
    });
})();