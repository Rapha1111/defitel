let shuffledChallenges = [];
let currentChallengeIndex = 0;
let score = 0;
let startTime;

const challenges = [
  "Fais une blague très nulle",
  "Chante une chanson",
  "Imite l'intro de Michou",
  "Raconte une blague drôle",
  "Dis Quoicoubeh",
  "Fais le bruit d'un animal et laisse ton ami deviner lequel",
  "Improvise un discours sur pourquoi les cookies sont meilleurs que les brownies",
  "Dis \"attents 2 secondes j'ai reçu une notif\" puis \"Euh je viens de recevoir un virement de 500€\"",
  "Dis concombre 3 fois dans une phrase",
  "Récite l'alphabet",
  "Imite un accent étranger pendant 5 phrases",
  "Fais un rap improvisé sur le sujet que tu veux",
  "Chante une chanson populaire en chant d'opéra",
  "Donne des conseils inhabituels pour un problème de la vie quotidienne",
  "Parle une autre langue pendant 5 phrases",
  "Fais un jeu de devinettes avec ton ami, en donnant des indices farfelus",
  "Improvise une publicité hilarante pour un produit imaginaire",
  "Fais une interprétation dramatique d'une phrase simple",
  "Chante une chanson populaire en utilisant uniquement des sons d'animaux",
  "Imite un personnage de dessin animé pendant 30 secondes",
  "Fais une déclaration d'amour à un objet inanimé comme si c'était ton ami",
  "Parle en utilisant uniquement des mots qui commencent par la même lettre que ton prénom pendant 3 phrases",
  "Improvise une chanson sur un légume de ton choix",
  "Invente une histoire surréaliste impliquant un pingouin et un kangourou",
  "Chante la première chanson qui te vient à l'esprit avec un accent britannique",
  "Fais semblant d'être un animateur radio pendant 15 secondes",
  "Chante une berceuse à un objet de ton choix comme s'il était ton bébé",
  "Imite un animal marin et explique pourquoi tu as choisi celui-ci",
  "Raconte une histoire à rebours, en commençant par la fin et en remontant jusqu'au début",
  "Dis \"Attends deux secondes chaussure, je suis au téléphone là\"",
  "Parle en utilisant uniquement des rimes pendant 2 phrases",
  "Chante une chanson triste avec une voix très joyeuse",
  "Raconte une histoire imaginaire en utilisant uniquement des noms d'aliments",
  "Invente un slogan hilarant pour une brosse à dents"
  
];

const challengePoints = [3, 4, 5, 2, 3, 5, 7, 1, 6, 5, 3, 8, 6, 3, 5, 4, 6, 4, 7, 3, 5, 4, 5, 6, 3, 4, 7, 3, 5, 4, 6, 5, 5, 5]; // Points correspondants aux défis


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startGame() {
  document.getElementById("home").style.display = "none";
  shuffledChallenges = shuffleArray(challenges.slice());
  document.getElementById("game").style.display = "block";
  startTime = new Date();
  showChallenge();
}

function showChallenge() {
  if (currentChallengeIndex < shuffledChallenges.length) {
    document.getElementById("challenge").textContent = shuffledChallenges[currentChallengeIndex];
    document.getElementById("reward").textContent = "Récompense : "+challengePoints[currentChallengeIndex]+" points";
  } else {
    endGame();
  }
}

function nextChallenge(outcome) {
  if (outcome === "success") {
    score += challengePoints[currentChallengeIndex]; // Ajout des points selon l'indice
  }
  currentChallengeIndex++;
  showChallenge();
}

function endGame() {
  const endTime = new Date();
  const totalTime = Math.floor((endTime - startTime) / 1000);
  document.getElementById("game").style.display = "none";
  document.getElementById("end").style.display = "block";
  document.getElementById("totalScore").textContent = score;
  document.getElementById("totalTime").textContent = totalTime;
}
