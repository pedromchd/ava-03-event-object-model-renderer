import { bib } from "./bib.js";

document.addEventListener('DOMContentLoaded', () => {
  JSON.parse(localStorage.lista).forEach(anime => {
    bib.new(anime);
  });
  display(bib);
});

const form = document.forms[0];
const article = document.querySelector('article');

form.addEventListener('submit', e => {
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
  // localStorage.lista = JSON.stringify(bib.list);
  display(bib);
});

article.addEventListener('click', e => {
  let value = Number(e.target.dataset.value);
  let index = Number(e.target.parentElement.dataset.value);
  if (e.target.classList.contains('fav')) {
    value = (value) ? 0 : 1;
    bib.favorite(value, index);
  } else
  if (e.target.classList.contains('star')) {
    bib.rate(value, index);
  } else
  if (e.target.classList.contains('status')) {
    bib.update(index);
  } else
  if (e.target.classList.contains('clear')) {
    if(confirm('Limpar lista?')) {
      bib.clear();
      localStorage.clear();
    }
  } else return;
  display(bib);
});

function display(obj) {
  article.innerHTML =
    '<button class="clear"><i class="fa fa-trash clear"></i></button>';
  obj.list.forEach((anime, index) => {
    let rating = `
      <img src="star.png" class="star" data-value="1">
      <img src="star.png" class="star" data-value="2">
      <img src="star.png" class="star" data-value="3">
      <img src="star.png" class="star" data-value="4">
      <img src="star.png" class="star" data-value="5">`;
    for (let i = 0; i < anime.stars; i++) {
      rating = rating.replace('star\"', 'star color\"');
    }
    let main = document.createElement('main');
    main.innerHTML = `
      <img src="${anime.capa}" class="cover">
      <section class="container">
        <section class="info">
          <a href="${anime.link}" target="_blank"><h1>${anime.anime}</h1></a>
          <p>Estúdio: ${anime.estudio}</p>
          <p>Gênero: ${anime.genero}</p>
        </section>
        <section class="user" data-value="${index}">
          <img src="heart.png" class="fav" data-value="${anime.fav}">
          <button data-value="${anime.status}" class="status">
            ${["Na lista", "Assistindo", "Finalizado"][anime.status]}
          </button>
          <section class="rating" data-value="${index}">
            ${rating}
          </section>
        </section>
      </section>`;
    article.appendChild(main);
  });
  localStorage.lista = JSON.stringify(obj.list);
}
