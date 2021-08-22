// const iphone7 = {
//   name: "Iphone7",
//   color: "Pink",
//   weight: 300,
//   takePhone() {
//     console.log("take photo");
//   },
//   childObject: {
//     name: 'child',
//     methodChild() {
//       console.log(this)
//     }
//   }
// };
// iphone7.childObject.methodChild();

// function Car(name, color) {
//   this.name = name;
//   this.color = color;
//   this.run = function () {
//     console.log("runing", this);
//   };
// }
// const honda = new Car("Honda", "Black");
// console.log(honda.run());

const button = document.querySelector("button");

button.onclick = function () {
  console.dir(this);
};
