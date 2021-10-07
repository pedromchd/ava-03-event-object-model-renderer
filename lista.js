import { bib } from "./bib.js";

const form = document.forms[0];
const article = document.querySelector('article');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  bib.addAnime({
    anime: form.anime.value,
    estudio: form.estudio.value,
    genero: form.genero.value,
    capa: form.capa.value,
    link: form.link.value
  });

  let main = document.createElement('main');
  main.innerHTML = `
    <img src="${form.capa.value}" class="cover">
    <img src="heart.png" class="fav" value="0">
    <section class="container">
      <section class="info">
        <a href="${form.link.value}" target="_blank"><h1>${form.anime.value}</h1></a>
        <p>Estúdio: ${form.estudio.value}</p>
        <p>Gênero: ${form.genero.value}</p>
      </section>
      <section class="user">
        <button value="0" class="status">Na lista</button>
        <section class="rating">
          <img src="star.png" class="star" value="0">
          <img src="star.png" class="star" value="0">
          <img src="star.png" class="star" value="0">
          <img src="star.png" class="star" value="0">
          <img src="star.png" class="star" value="0">
        </section>
      </section>
    </section>`;
  article.appendChild(main);
});

