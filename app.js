// шоо хаях тоглоомонд шаардлагатай хувьсагчдыг зарлая

var activePlayer = 0;
var scores = [0, 0];
var roundScore = 0;
var dice = Math.floor(Math.random(1, 6) * 6) + 1;

console.log(dice);

//<div class="player-score" id="score-0">43</div>
console.log((document.getElementById("score-0").textContent = dice));
console.log((document.getElementById("score-1").textContent = dice));
console.log(document.querySelector(".dice"));

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random(1, 6) * 6) + 1;
  document.querySelector(".dice").src = "dice-" + diceNumber + ".png";
  console.log("shoo buuulaa " + diceNumber);

  if (diceNumber != 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
    console.log(roundScore);
  } else {
    // if (activePlayer == 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }
    document.getElementById("current-" + activePlayer).textContent = 0;
    activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.add("active");
  }
});
