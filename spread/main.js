// var array1 = ['JS', 'JSX', 'Nodejs', 'Php'];
// var array2 = ['Vue JS', 'React js'];
// var array = [...array1];
// console.log(array);
// var course1 = {name: 'Php'};
// var course2 = {price: 1000};
// var course = {...course1, ...course2};
// console.log(course);

var array = ["js", "ruby", "PHP"];
function logger(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
logger(...array);
