// шоо хаях тоглоомонд шаардлагатай хувьсагчдыг зарлая

var activePlayer = 1;
var scores = [0, 0];
var roundScore = 0;
var dice = Math.floor(Math.random(1, 6) * 6) + 1;

console.log(dice);

//<div class="player-score" id="score-0">43</div>
console.log((document.getElementById("#score-0").textContent = dice));
console.log(document.querySelector(".dice"));
