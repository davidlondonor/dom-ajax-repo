// Write code here to communicate with Github
fetch("https://api.github.com/users/davidlondonor/repos")
  .then(myGithub => myGithub.json())
  .then(jsonTransformado =>
    jsonTransformado.forEach(element => {
      const llamadoaUl = document.querySelector("#repos-list"); // Seleccionamos con query el ID de mi html
      const creacionEtiquetasLi = document.createElement("li"); // Acá estamos creando los Li, pongo lo que necesite, div, img
      const linkAmisRepos = document.createElement("a");
      const numerodeRepos = document.querySelector("#repos-count"); // para llamar al número de repos que necesito

      numerodeRepos.innerHTML = jsonTransformado.length;
      linkAmisRepos.className = "urls";
      linkAmisRepos.href = element.html_url;

      creacionEtiquetasLi.appendChild(linkAmisRepos);
      creacionEtiquetasLi.className = "etiquetasLi";
      llamadoaUl.appendChild(creacionEtiquetasLi); // AppendChild me sirve para poner dentro de mi etiqueta principal. esto aparece al interior de UL, en este caso.
      linkAmisRepos.innerHTML = element.name;
    })
  );

// Para llamar al Json debo llamar a mi variable y .nombre ejemplo: creaciónEtiquetasLi.carousel-innerHTML ELEMENT.NOMBRE (NOMBRE CORRESPONDE )
// console.log(myGithub);
//llamar a los elementos que voy a necesitar editar lo hacemos con document.
