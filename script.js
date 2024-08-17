const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

const start = document.getElementById("start");
const reset = document.getElementById("reset");
const disp = document.getElementById("disp");

let interval = null;
let total = 0;

// Fonction pour calculer le total en secondes
function totalValue() {
  if (second.value >= 60) {
    alert("transformation automatique des secondes en minutes");
    let extraMinutes = Math.floor(second.value / 60);
    minute.value = Number(minute.value) + extraMinutes;
    second.value = second.value % 60;
  }
  total = Number(minute.value) * 60 + Number(second.value);
}

// Fonction pour gérer le timer
function Timer() {
  total--; // On décrémente le temps restant

  if (total >= 0) {
    let mt = Math.floor(total / 60);
    let sc = total % 60;

    // Ajouter un zéro devant les minutes si elles sont inférieures à 10
    if (mt < 10) {
      mt = "0" + mt;
    }

    // Ajouter un zéro devant les secondes si elles sont inférieures à 10
    if (sc < 10) {
      sc = "0" + sc;
    }

    minute.value = mt; // Mise à jour des minutes
    second.value = sc; // Mise à jour des secondes
  } else {
    disp.innerHTML = `<h1>Time Over</h1>`;
    clearInterval(interval); // Arrêter le timer lorsque le temps est écoulé
  }
}

// Événement pour démarrer le timer
start.addEventListener("click", () => {
  totalValue(); // Initialiser le total
  if (interval) {
    clearInterval(interval); // Réinitialiser l'intervalle s'il était déjà en cours
  }
  interval = setInterval(Timer, 1000); // Lancer le timer chaque seconde
  disp.innerHTML = `<h1>Timer Started</h1>`;
});

// Événement pour réinitialiser le timer
reset.addEventListener("click", () => {
  clearInterval(interval); // Arrêter le timer
  disp.innerHTML = `<h1>Timer</h1>`;
  minute.value = "00"; // Réinitialiser les minutes à 00
  second.value = "00"; // Réinitialiser les secondes à 00
});
