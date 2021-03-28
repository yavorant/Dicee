function player(playerNumber) {
  const randomNumber1 = Math.floor(Math.random() * Math.floor(6)) + 1; //random number from 1 to 6
  const attribute = document.querySelector(`.img${playerNumber}`);
  attribute.setAttribute("src", `img/dice${randomNumber1}.png`);
  return randomNumber1;
}

function game() {
  let result = "";
  if (firsrPlayerResult === secondPlayerResult) {
    result = "Draw";
  } else if (firsrPlayerResult > secondPlayerResult) {
    result = "First Player Wins";
  } else {
    result = "Second Player Wins";
  }
  let elementH1 = document.querySelector("h1");
  return elementH1.innerHTML = result;
}

player(1);
player(2);
const firsrPlayerResult = player(1);
const secondPlayerResult = player(2);
game();
