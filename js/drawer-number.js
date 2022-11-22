function drawer() {
  const min = Math.ceil(document.getElementById("min").value);
  const max = Math.floor(document.getElementById("max").value);

  const drawer = Math.floor(Math.random() * (max - min) + min);

  document.location.href = `/paginas/result_num.html?winner=${drawer}`;
}
