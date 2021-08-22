var courses = ["Php", "Javascript", "Nodejs", "HTML&CSS"];
var [a, , ...rest] = courses;
console.log(a, rest)
var course = {
  name: "Javascript",
  price: 1000,
  image: 'image',
  children: {
      name: 'ReactJS'
  }
};
var {name: parentName, children: { name: childName }} = course;

console.log(parentName)
console.log(childName)

var course = {
  name: "Javascript",
  price: 1000,
  image: 'image'
};
var {name, description = 'Default value'} = course;
console.log(name, description)
function Logger(...params) {
  return params;
}
console.log(Logger(1, 2, 3, 4, 5, 6, 7, 8));
