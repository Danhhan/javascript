// function Course(name, price) {
//   this.name = name;
//   this.price = price;
// }

class Course {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getName = function () {
    return this.name;
  };
  getPrice = function () {
    return this.price;
  };
}
var phpCourse = new Course("Php", "1000");
var jsCourse = new Course("JS", "1000");
console.log(phpCourse);
console.log(jsCourse);
console.log(phpCourse.getName());
