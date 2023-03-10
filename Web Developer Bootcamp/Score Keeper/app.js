const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const winningScoreSelect = document.querySelector("#upTo");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      isGameOver = true;
      player1.classList.add("has-text-success");
      player2.classList.add("has-text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    player1.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      isGameOver = true;
      player2.classList.add("has-text-success");
      player1.classList.add("has-text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    player2.textContent = p2Score;
  }
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  player1.textContent = 0;
  player2.textContent = 0;
  player1.classList.remove("has-text-success", "has-text-danger");
  player2.classList.remove("has-text-success", "has-text-danger");
  p1Button.disabled = false;
  p2Button.disabled = false;
}
