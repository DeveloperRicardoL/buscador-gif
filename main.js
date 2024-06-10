import "./style.css";

const boton = document.querySelector("#btn-buscar");
const mostrar = document.getElementById("mostrar-gif");

const buscarGif = async () => {
  let busqueda = document.getElementById("txt-buscar").value;
  const apiKey = "HgWIlXViCM2fS8qqXgF68g1WTjaad0Q2";
  const urlGif = `https://api.giphy.com/v1/gifs/search?api_key=HgWIlXViCM2fS8qqXgF68g1WTjaad0Q2&q=${busqueda}&limit=6&offset=0&rating=g&lang=es&bundle=messaging_non_clips`;
  const requestData = await fetch(urlGif);
  const data = await requestData.json();

  mostrar.innerHTML = "";

  data.data.forEach((gif) => {
    const img = document.createElement("img");
    img.src = gif.images.fixed_height.url;
    mostrar.appendChild(img);
  });
};

boton.addEventListener("click", async () => {
  await buscarGif();
  document.getElementById("txt-buscar").value = "";
});
