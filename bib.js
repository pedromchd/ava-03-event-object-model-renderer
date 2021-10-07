export const bib = {
  list: [],
  new(obj) {
    this.list.push(obj);
  },
  favorite(v, i) {
    this.list[i].fav = v;
  },
  rate(v, i) {
    this.list[i].stars = v;
  },
  update(i) {
    this.list[i].status = ++this.list[i].status%3;
  }
};
