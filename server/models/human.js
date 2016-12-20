'use strict';

module.exports = class Human {
  constructor(name, second_name, img_src, age, country, club, stars, id) {
    this.name = name;
    this.second_name = second_name;
    this.img_src = img_src;
    this.age = age;
    this.country = country;
    this.club = club;
    this.stars = stars;
    this.id = id;
  }


  get info() {
      return `name : ${this.second_name}, second_name : ${this.second_name}, img_src : ${this.img_src}, age : ${this.age},
              country : ${this.country}, club : ${this.club}, stars : ${this.stars}, id : ${this.id}`;
  }

  addStars(count) {
    if (this.stars < 100)
      this.stars += count;

    return this.stars;
  }

  changeImg(img_src) {
    if(img_src != '')
      this.img_src = img_src;

    return this.img_src;
  }


}
