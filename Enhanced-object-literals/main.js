var name = "javascript";
var price = 1000;
var course = {
    name,
    price,
    getName() {
        return name
    }
}
console.log(course)
console.log(course.getName())
var filedName = "name";
var filedPrice = "price";

const course = {
    [filedName]: 'js',
    [filedPrice]: 1000
}
console.log(course)