import { bib } from "./bib.js";

const form = document.forms[0];

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   article.appendChild(main);
// });

// const main = document.createElement('main');

// const cover = document.createElement('img');
// cover.src = 'https://cdn.myanimelist.net/images/anime/1611/111915.jpg';
// cover.classList.add('cover');

// const fav = document.createElement('img');
// fav.src = 'heart.png';
// fav.classList.add('fav');
// let value = document.createAttribute('value');
// value.value = 0;
// fav.setAttributeNode(value);

// const container = document.createElement('section');
// container.classList.add('container');

// const info = document.createElement('section');
// info.classList.add('info');

// const a = document.createElement('a');
// a.src = 'https://myanimelist.net/anime/42897/Horimiya';
// a.target = '_blank';

// const h1 = document.createElement('h1');
// h1.innerHTML = 'Horimiya';

// const est = document.createElement('p');
// est.innerHTML = 'Estúdio: CloverWorks';

// const gen = document.createElement('p');
// gen.innerHTML = 'Comédia, Romance, Slice of Life';

// const user = document.createElement('section');
// user.classList.add('user');

// const button = document.createElement('button');
// button.value = 0;
// button.classList.add('status');
// button.innerHTML = 'AAA';

// const rating = document.createElement('section');
// rating.classList.add('rating');

// const star = document.createElement('img');
// star.src = 'star.png';
// star.classList.add('star');
// value = document.createAttribute('value');
// value.value = 0;
// star.setAttributeNode(value);

// rating.appendChild(star);
// user.appendChild(button);
// user.appendChild(rating);
// a.appendChild(h1);
// info.appendChild(a);
// info.appendChild(est);
// info.appendChild(gen);
// container.appendChild(info);
// container.appendChild(user);
// main.appendChild(cover);
// main.appendChild(fav);
// main.appendChild(container);

const article = document.querySelector('article');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let main = document.createElement('main');
  main.innerHTML = `<img src="https://cdn.myanimelist.net/images/anime/1611/111915.jpg" class="cover">
      <img src="heart.png" class="fav" value="0">
      <section class="container">
        <section class="info">
          <a href="https://myanimelist.net/anime/42897/Horimiya" target="_blank"><h1>Horimiya</h1></a>
          <p>Estúdio: CloverWorks</p>
          <p>Gênero: Comédia, Romance, Slice of Life</p>
        </section>
        <section class="user">
          <button value="0" class="status">AAA</button>
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
