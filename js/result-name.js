function winner() {
  const urlParams = new URLSearchParams(window.location.search);

  const winner = urlParams.get("vencedor");

  console.log(winner);
  document.getElementById("winner").innerHTML = winner;
}
