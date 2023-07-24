const Id = Symbol('kye1')

let student = {
    height:155,
    [Id]  : "52",
    Dept: "ECE",
    age :25,
    "full name": "Sumon Islam",
}

console.log(student.height);
console.log(student["full name"]); // square bracket diye access korte hobe r onno kono way nai jehetu space ache
console.log(student.Id); // aita Symbol tai dot diye access hobe na undefined dekhabe
console.log(student[Id]);// accessible karon square bracket use kora hoyeche

student.Dept = "CSE" // change kora jabe avabe
console.log(student.Dept);
student.greeting = function(){
    console.log(` I am ${this.age} years old`)
    console.log(`Hello ${this["full name"]}`);
}
console.log(student.greeting());
Object.freeze(student)
student.Dept = "EEE" ///// not changable karon freez kora hoyeche
console.log(student.Dept); // CSE i print korbe 