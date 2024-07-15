document.addEventListener("DOMContentLoaded", () => {
  const choices = document.querySelectorAll(".choice");
  const result = document.getElementById("result");

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.id;
      const computerChoice = getComputerChoice();
      const winner = getWinner(userChoice, computerChoice);

      result.innerText = `You chose ${userChoice}, computer chose ${computerChoice}. ${winner}`;
    });
  });

  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function getWinner(user, computer) {
    if (user === computer) {
      return "It's a draw!";
    } else if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
});
