function User(firstName, lastName, Avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Avatar = Avatar;
}
var author = new User('Danh', 'Han', 'this avatar')
var author1 = new User('Danh1', 'Han1', 'this avatar1')
User.prototype.className = 'F8'
User.prototype.getClassName = function() {
    return this.className
}
console.log(author.className)
console.log(author1.getClassName())