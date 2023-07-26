let course = {
    instructorName: "Hitesh",
    Id: "abc123",
    courseName: "Js"
}

let {courseName,Id,instructorName:instructor} = course
console.log(instructor);