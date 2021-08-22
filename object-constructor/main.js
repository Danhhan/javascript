function Course(name, price) {
  this.name = name;
  this.price = price;
  this.getName = function () {
    return `Name course: ${this.name}`;
  };
}
const phpCourse = new Course("Php", 1000);
const JSCourse = new Course("JS", 1000);
JSCourse.coin = 1;
console.log(phpCourse);
console.log(JSCourse.getName());
console.log(JSCourse);
