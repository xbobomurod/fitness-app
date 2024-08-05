const sports = {
    "Yugurish": { calories: 11.67, water: 0.0125 },
    "Velosipedda yurish": { calories: 10, water: 0.0117 },
    "Suzish": { calories: 8.33, water: 0.0133 },
    "Futbol": { calories: 10, water: 0.015 },
    "Basketbol": { calories: 10.83, water: 0.0142 },
    "Tennis": { calories: 10, water: 0.0125 },
    "Stol tennisi": { calories: 5, water: 0.0083 },
    "Badminton": { calories: 6.67, water: 0.01 },
    "Voleybol": { calories: 5.83, water: 0.0108 },
    "Golf": { calories: 4.17, water: 0.0067 },
    "Yoga": { calories: 3.33, water: 0.005 },
    "Pilates": { calories: 4.17, water: 0.0058 },
    "Zumba": { calories: 6.67, water: 0.0117 },
    "Aerobika": { calories: 7.5, water: 0.0125 },
    "Boks": { calories: 11.67, water: 0.015 },
    "Karate": { calories: 10, water: 0.0133 },
    "Judo": { calories: 10.83, water: 0.0142 },
    "Taekvondo": { calories: 10, water: 0.0133 },
    "Qilichbozlik": { calories: 6.67, water: 0.01 },
    "Qayiqda eshkak eshish": { calories: 8.33, water: 0.0125 },
    "Kanoe": { calories: 7.5, water: 0.0117 },
    "Kajak": { calories: 6.67, water: 0.0108 },
    "Qorli chang'i": { calories: 10, water: 0.0142 },
    "Snoubord": { calories: 8.33, water: 0.0125 },
    "Skating": { calories: 5.83, water: 0.01 },
    "Raqs": { calories: 5, water: 0.0083 },
    "Cheerleading": { calories: 6.67, water: 0.0108 },
    "Gimnastika": { calories: 5.83, water: 0.01 },
    "Triatlon": { calories: 13.33, water: 0.0167 },
    "Marafon": { calories: 15, water: 0.02 }
};

const colors = {
    "Yugurish": "#FF5733",
    "Velosipedda yurish": "#33FF57",
    "Suzish": "#3357FF",
    "Futbol": "#FF33A1",
    "Basketbol": "#FF8C33",
    "Tennis": "#33FF8C",
    "Stol tennisi": "#8C33FF",
    "Badminton": "#FF338C",
    "Voleybol": "#33A1FF",
    "Golf": "#A1FF33",
    "Yoga": "#FF5733",
    "Pilates": "#33FF57",
    "Zumba": "#3357FF",
    "Aerobika": "#FF33A1",
    "Boks": "#FF8C33",
    "Karate": "#33FF8C",
    "Judo": "#8C33FF",
    "Taekvondo": "#FF338C",
    "Qilichbozlik": "#33A1FF",
    "Qayiqda eshkak eshish": "#A1FF33",
    "Kanoe": "#FF5733",
    "Kajak": "#33FF57",
    "Qorli chang'i": "#3357FF",
    "Snoubord": "#FF33A1",
    "Skating": "#FF8C33",
    "Raqs": "#33FF8C",
    "Cheerleading": "#8C33FF",
    "Gimnastika": "#FF338C",
    "Triatlon": "#33A1FF",
    "Marafon": "#A1FF33"
};

function calculateCalories(sport, duration) {
    return sports[sport].calories * duration;
}

function calculateWaterIntake(sport, duration) {
    return sports[sport].water * duration;
}

function calculate() {
    const sport = document.getElementById('sport').value;
    const duration = parseFloat(document.getElementById('duration').value);
    if (isNaN(duration) || duration <= 0) {
        alert('Iltimos, to\'g\'ri mashg\'ulot vaqtini kiriting.');
        return;
    }
    const caloriesBurned = calculateCalories(sport, duration);
    const waterIntake = calculateWaterIntake(sport, duration);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        Siz ${caloriesBurned.toFixed(2)} kaloriya yoqdingiz va ${waterIntake.toFixed(2)} litr suv ichishingiz kerak.
    `;
    resultDiv.style.backgroundColor = colors[sport];
    resultDiv.style.color = '#fff';
    resultDiv.style.fontSize = '1.5em';
    resultDiv.style.padding = '20px';
    resultDiv.style.borderRadius = '10px';
}
