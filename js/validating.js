let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let alert = document.querySelector(".alert");

  let no_card = document.getElementById("no_card");

  if(no_card.value.length == 0){
    no_card.classList.add("is-invalid");
    alert.style.display = "block";
  }else{
    no_card.classList.remove("is-invalid");
    no_card.classList.add("is-valid");
    alert.style.display = "none";
  }

  let key = document.getElementById("key");

  if(key.value.length == 0){
    key.classList.add("is-invalid");
    alert.style.display = "block";
  }else{
    key.classList.remove("is-invalid");
    key.classList.add("is-valid");
    alert.style.display = "none";
  }

  let total = document.getElementById("total");

  if(total.value.length == 0){
    total.classList.add("is-invalid");
    alert.style.display = "block";
  }else{
    total.classList.remove("is-invalid");
    total.classList.add("is-valid");
    alert.style.display = "none";
  }

  let nombre = document.getElementById("nombre");

  if(nombre.value.length == 0){
    nombre.classList.add("is-invalid");
    alert.style.display = "block";
  }else{
    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");
    alert.style.display = "none";
  }

  let apellidos = document.getElementById("apellidos");

  if(apellidos.value.length == 0){
    apellidos.classList.add("is-invalid");
    alert.style.display = "block";
  }else{
    apellidos.classList.remove("is-invalid");
    apellidos.classList.add("is-valid");
    alert.style.display = "none";
  }

  let ciudad = document.getElementById("ciudad");

  if(ciudad.value.length == 0){
    ciudad.classList.add("is-invalid");
    alert.style.display = "block";
  }else{
    ciudad.classList.remove("is-invalid");
    ciudad.classList.add("is-valid");
    alert.style.display = "none";
  }

  let state = document.getElementById("estado");

  if(state.value.length == 0){
    state.classList.add("is-invalid");
    alert.style.display = "block";
  }else{
    state.classList.remove("is-invalid");
    state.classList.add("is-valid");
    alert.style.display = "none";
  }

  let postal = document.getElementById("postal");

  if(postal.value.length == 0){
    postal.classList.add("is-invalid");
    alert.style.display = "block";
  }else{
    postal.classList.remove("is-invalid");
    postal.classList.add("is-valid");
    alert.style.display = "none";
  }

  //let medio = document.getElementById("medio");

  //if(medio.value.length == 0){
  //   medio.classList.add("is-invalid");
  //   alert.style.display = "block";
  // }else{
  //   medio.classList.remove("is-invalid");
  //   medio.classList.add("is-valid");
  //   alert.style.display = "none";
  // }
  

  

});