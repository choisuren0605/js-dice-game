// шоо хаях тоглоомонд шаардлагатай хувьсагчдыг зарлая

var activePlayer, scores, roundScore;
var diceDOM = document.querySelector(".dice");

newGame();

// Тоглоомыг шинээр эхлүүлэх эвент листенер
document.querySelector(".btn-new").addEventListener("click", newGame);

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random(1, 6) * 6) + 1;

  diceDOM.style.display = "block";
  document.querySelector(".dice").src = "dice-" + diceNumber + ".png";
  console.log("shoo buuulaa " + diceNumber);

  if (diceNumber != 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
    console.log(roundScore);
  } else {
    switchNextPlayer();
  }
});

// HOLD  товчны эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function () {
  scores[activePlayer] = scores[activePlayer] + roundScore;

  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  // Хожсон эсэхийг шалгах
  if (scores[activePlayer] >= 20) {
    document.getElementById("name-" + activePlayer).textContent = "Winner !!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    switchNextPlayer();
  }
});

// ALL function dice game

function newGame() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  document.getElementById("name-0").textContent = "player-1";
  document.getElementById("name-1").textContent = "player-2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.add("active");

  diceDOM.style.display = "none";
}

function switchNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);
  // улаан цэгийг шилжүүлэх
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // шоог түр алга болгох
  diceDOM.style.display = "none";
}
