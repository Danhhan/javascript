var courses = [
  {
    id: 1,
    name: "PHP",
    coin: 0,
  },
  {
    id: 2,
    name: "JS",
    coin: 1,
  },
  {
    id: 3,
    name: "React js",
    coin: 2,
  },
  {
    id: 4,
    name: "Vue js",
    coin: 3,
  },
];

Array.prototype.map2 = function (callback) {
  var arrayLength = this.length;
  var output = [];
  for (let i = 0; i < arrayLength; i++) {
    var result = callback(this[i], i);
    output.push(result);
  }
  return output;
};
var newCourses = courses.map2(function (course) {
  return course;
});
console.log(newCourses);
