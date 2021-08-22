// let a = 1;
// let b = a;
// b = 2;
// console.log(a);
// console.log(b);

/**
 * reference type
 */
const a = {
  name: "Danh Han",
};
const b = a;
b.name = "Test";
console.log(a);
