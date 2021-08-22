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

function myFunc(params) {
  if(typeof params === 'function') {
    params(123);
  }
}
function callback(value) {
  console.log(value)
}
myFunc(callback);

