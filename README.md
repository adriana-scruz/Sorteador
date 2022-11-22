
# Projeto - FullStack - Sorteador


Um sistema FullStack que faz sorteio de números e nomes, conforme abaixo:







![App Screenshot](https://codandoaos30.com.br/wp-content/uploads/2022/11/Home.png)


## Demonstração

![App Screenshot](https://codandoaos30.com.br/wp-content/uploads/2022/11/Sorteador_Funfando.gif)

https://codandoaos30.com.br/wp-content/uploads/2022/11/Sorteador_Funfando.gif

## Stack utilizada

**Front-end:** HTML, CSS

**Back-end:** JavaScript


## Uso/Exemplos

```javascript
function sortear() {
  let names = document.getElementById("nomes").value;

  const people = names.split(", ");

  let numPeople = people.length;
  let drawer = Math.floor(Math.random() * numPeople);

  const winner = people[drawer];

  document.location.href = `/paginas/result_nomes.html?vencedor=${winner}`;
}
```


## Referência

 - [JS](https://www.javascript.com/)
 - [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/)
 - [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)

