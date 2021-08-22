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
Array.prototype.filter2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index], index);
    }
  }
};

var filterCourses = courses.filter2(function (course, index) {
  console.log(course)
  // return course.coin > 1;
});
// console.log(filterCourses);
