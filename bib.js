export const bib = {
  lista: [
    {
      anime: "Horimiya",
      estudio: "CloverWorks",
      genero: "Comédia, Romance, Slice of Life",
      capa: "https://cdn.myanimelist.net/images/anime/1611/111915.jpg",
      link: "https://myanimelist.net/anime/42897/Horimiya"
    }
  ],
  addAnime(obj) {
    this.lista.push(obj);
  }
};
