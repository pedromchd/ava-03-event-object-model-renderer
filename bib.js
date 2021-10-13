export const bib = {
  list: [],
  add(e) {
    this.list.push(e);
  },
  remove(i) {
    this.list.splice(i, 1);
  },
  favorite(v, i) {
    this.list[i].fav = v;
  },
  rate(v, i) {
    if (this.list[i].stars === v) this.list[i].stars = 0;
    else this.list[i].stars = v;
  },
  update(i) {
    this.list[i].status = ++this.list[i].status%3;
  },
  clear() {
    this.list = [];
  }
};
