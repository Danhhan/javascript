// check if falsy (use ! operator)
if (!studentId) {
}
if (!isSelected) {
}
if (!isActive) {
}
// check if truthy
if (studentId) {
}
if (isSelected) {
}
if (isActive) {
}
// check lenth
if (name.length > 0) {
}
if (studentList.length) {
}
const name = "Danh Han";
console.log(!name) //false
console.log(!!name) // true
const hasStudent = Boolean(student?.id) // true