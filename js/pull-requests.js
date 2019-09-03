let listadePullRequest = "";

fetch("https://api.github.com/repos/codeyourfuture/js-exercises/pulls")
  .then(nombreJson => nombreJson.json())
  .then(jsonTransformado => {
    listadePullRequest = jsonTransformado;
    cargarLista(listadePullRequest);
  });

const input = document.querySelector("#userInput");
// input is a DOM element we already have using "querySelector"
input.addEventListener("keyup", function(event) {
  const value = event.target.value;
  console.log(value);
  const listFiltered = listadePullRequest.filter(item => {
    return item.user.login == value;
  });
  cargarLista(listFiltered);
  console.log("lista filtrada", listFiltered);
  // "value" will be the last value of the input field, and will be updated everytime the user types a new letter
});

let child = listadePullRequest.lastElementChild;
while (child) {
  listadePullRequest.removeChild(child);
  child = listadePullRequest.lastElementChild;
}

function cargarLista(objJSON) {
  objJSON.forEach(element => {
    const listaDelPull = document.querySelector("#pull-requests-list"); //Con este seleccionamos del html
    const elementoLista = document.createElement("li");
    const etiquetaHref = document.createElement("a");

    etiquetaHref.href = element.html_url;
    elementoLista.className = "urls";
    elementoLista.appendChild(etiquetaHref);
    listaDelPull.appendChild(elementoLista);
    etiquetaHref.innerHTML = element.title;
  });
}
