import "./style.css";

const boton = document.querySelector("#btn-buscar");
const mostrar = document.getElementById("mostrar-gif");

const buscarGif = async () => {
  let busqueda = document.getElementById("txt-buscar").value;
  let cant = document.getElementById("txt-cantidad").value;
  const apiKey = "HgWIlXViCM2fS8qqXgF68g1WTjaad0Q2";
  const urlGif = `https://api.giphy.com/v1/gifs/search?api_key=HgWIlXViCM2fS8qqXgF68g1WTjaad0Q2&q=${busqueda}&limit=${cant}&offset=0&rating=g&lang=es&bundle=messaging_non_clips`;
  const requestData = await fetch(urlGif);
  const data = await requestData.json();

  mostrar.innerHTML = "";

  data.data.forEach((gif) => {
    const img = document.createElement("img");
    img.src = gif.images.fixed_height.url;
    mostrar.appendChild(img);
  });
};

const validarCantidad = () => {
  const cantIngresada = document.getElementById("txt-cantidad");
  let cant = cantIngresada.value;
  if (cant < 3) {
    cantIngresada.value = 3;
  }
};

boton.addEventListener("click", async () => {
  validarCantidad();
  await buscarGif();
  document.getElementById("txt-buscar").value = "";
  document.getElementById("txt-cantidad").value = "";
});
