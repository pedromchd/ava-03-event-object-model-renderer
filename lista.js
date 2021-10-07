import { bib } from "./bib.js";

const form = document.forms[0];
const article = document.querySelector("article");

form.addEventListener("submit", e => {
  e.preventDefault();
  bib.new({
    anime: form.anime.value,
    estudio: form.estudio.value,
    genero: form.genero.value,
    capa: form.capa.value,
    link: form.link.value,
    fav: 0,
    stars: 0,
    status: 0
  });
  display(bib);
});

article.addEventListener('click', e => {
  let value = Number(e.target.attributes.value.value);
  let index = Number(e.target.parentElement.attributes.value.value);
  if (e.target.classList.contains('fav')) {
    let val = (value) ? 0 : 1;
    bib.favorite(val, index);
  }
  if (e.target.classList.contains('star')) {
    bib.rate(value, index);
  }
  if (e.target.classList.contains('status')) {
    bib.update(index);
  }
  display(bib);
});

function display(obj) {
  article.innerHTML = '';
  obj.list.forEach((anime, index) => {
    let rating = `
      <img src="star.png" class="star" value="1">
      <img src="star.png" class="star" value="2">
      <img src="star.png" class="star" value="3">
      <img src="star.png" class="star" value="4">
      <img src="star.png" class="star" value="5">`;
    for (let i = 0; i < anime.stars; i++) {
      rating = rating.replace("star\"", "star color\"");
    }
    let main = document.createElement("main");
    main.innerHTML = `
      <img src="${anime.capa}" class="cover">
      <section class="container">
        <section class="info">
          <a href="${anime.link}" target="_blank"><h1>${anime.anime}</h1></a>
          <p>Estúdio: ${anime.estudio}</p>
          <p>Gênero: ${anime.genero}</p>
        </section>
        <section class="user" value="${index}">
          <img src="heart.png" class="fav" value="${anime.fav}">
          <button value="${anime.status}" class="status">
            ${["Na lista", "Assistindo", "Finalizado"][anime.status]}
          </button>
          <section class="rating" value="${index}">
            ${rating}
          </section>
        </section>
      </section>`;
    article.appendChild(main);
  });
}
