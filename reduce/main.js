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

var totalCoin = courses.reduce(function (total, course) {
  return total + course.coin;
}, 0);
// console.log(totalCoin);

var numbers = [100, 200, 300, 400, 500];
var totalCoin = numbers.reduce(function (total, number) {
  return total + number;
});
console.log(totalCoin);

var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function (flat, value) {
  return flat.concat(value);
}, []);
console.log(flatArray)