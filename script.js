/* Desenvolva seu código abaixo */

function playRockPaperScissor(player1, player2) {
  const jogadasValidas = ["Pedra", "Papel", "Tesoura"];

  //Caso de Empate
  if (player1 === player2) {
    return "Empate!";
  }
  //Determina o Vencedor
  else if (
    (player1 === "Pedra" && player2 === "Tesoura") ||
    (player1 === "Papel" && player2 === "Pedra") ||
    (player1 === "Tesoura" && player2 === "Papel")
  ) {
    return "Jogador 1 venceu!";
  }

  return "Jogador 2 venceu!";
}
const resultado = playRockPaperScissor("Pedra", "Tesoura");
console.log(resultado); // Saída: "Jogador 1 venceu!"