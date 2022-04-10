const playerOne = document.getElementById("playerone");
const playerTwo = document.getElementById("playertwo");
const reset = document.getElementById("reset");
const winningScoreSelect = document.getElementById("winningscore");
const winnerAlert = document.getElementById("winneralert");

let playerOneScore = 0;
let playerTwoScore = 0;
let round = 0;
let winningScore = 3;

winningScoreSelect.addEventListener("change", function () {
    resetGame();
    winningScore = parseInt(this.value);

});


playerOne.addEventListener("click", () => {
    playerOneScore += 1;
    incrementRound();
    updateDisplays();
    checkWin();
});

playerTwo.addEventListener("click", () => {
    playerTwoScore += 1;
    incrementRound();
    updateDisplays();
    checkWin();
})

reset.addEventListener("click", () => {
    playerOneScore = 0;
    playerTwoScore = 0;
    resetGame();
})

function incrementRound() {
    const roundElement = document.getElementById("round");
    round += 1;
    roundElement.textContent = round;
}

function resetGame() {
    round = 0;
    playerOneScore = 0;
    playerTwoScore = 0;
    winnerAlert.style.display = "none";
    updateDisplays();
    enableButtons();
}

function updateDisplays() {
    const roundElement = document.getElementById("round");
    const playerOneDisplay = document.getElementById("playeronescore");
    const playerTwoDisplay = document.getElementById("playertwoscore");

    roundElement.textContent = round;
    playerOneDisplay.textContent = playerOneScore;
    playerTwoDisplay.textContent = playerTwoScore;
}

function checkWin() {
    if (playerOneScore >= winningScore) {
        disableButtons();
        winnerAlert.textContent = "Player One Wins!";
        winnerAlert.style.display = "";
    }
    if (playerTwoScore >= winningScore) {
        disableButtons();
        winnerAlert.textContent = "Player Two Wins!";
        winnerAlert.style.display = "";
    }
}

function disableButtons() {
    playerOne.classList.replace("btn-primary", "btn-secondary");
    playerTwo.classList.replace("btn-success", "btn-secondary");
    playerOne.classList.add("disabled");
    playerTwo.classList.add("disabled");
}

function enableButtons() {
    playerOne.classList.replace("btn-secondary", "btn-primary");
    playerTwo.classList.replace("btn-secondary", "btn-success");
    playerOne.classList.remove("disabled");
    playerTwo.classList.remove("disabled");
}


