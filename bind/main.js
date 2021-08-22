// this.firstName = "Minh";
// this.lastName = "Thu";
// const teacher = {
//   firstName: "Minh",
//   lastName: "Thao",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// const student = {
//   firstName: "Danh",
//   lastName: "Han",
// }
// // cach 1
// console.log(teacher.getFullName());
// // cach 2
// let getFullName = teacher.getFullName.bind(teacher);
// let getFullName1 = teacher.getFullName.bind(student);
// console.log(getFullName());
// console.log(getFullName1());

// handle dom
const teacher = {
  firstName: "Minh",
  lastName: "Thao",
  getFullName() {
    console.log(this.firstName, this.lastName);
  },
};
const button = document.querySelector("button");

button.onclick = function () {
  teacher.getFullName();
};
