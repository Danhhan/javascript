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
function courseHanler(course, index) {
  return {
      id: course.id,
      name: `Khoa hoc: ${course.name}`,
      coin: course.coin,
      coinText: `Gia: ${course.coin}`,
      index: index
  }
}
var newCourses = courses.map(courseHanler);
console.log(newCourses);