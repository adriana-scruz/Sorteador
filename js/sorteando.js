function sortear() {
  let names = document.getElementById("nomes").value;

  const people = names.split(", ");

  let numPeople = people.length;
  let drawer = Math.floor(Math.random() * numPeople);

  const winner = people[drawer];

  document.location.href = `/paginas/result_nomes.html?vencedor=${winner}`;
}
