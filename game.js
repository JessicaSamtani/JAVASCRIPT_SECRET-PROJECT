const squares = document.querySelectorAll(".square");
const nigoni = document.querySelector(".nigoni");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 60;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("nigoni");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("nigoni");

  hitPosition = randomSquare.id;
  console.log(Math.floor(Math.random() * 9));
}

squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveNigoni() {
  let timerId = null;
  timerId = setInterval(randomSquare, 500);
}
function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    alert(`GAME OVER BABUSH JAANU! YOUR FINAL SCORE IS  ${result}`);
  }
}

randomSquare();

let countDownTimerId = setInterval(countDown, 700);
