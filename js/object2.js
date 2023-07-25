let user1 = {
    name: "sumon",
    userId: "sonnom145",
    email: "some@gmail.com",
    isloggedIn: false,
    loggedOut:true
}
let user2 = {
    name: "rohiy",
    userId: "domr988",
    email: "someonr@gmail.com",
    isloggedIn: true,
}
let newcombinedobj = {...user1, ...user2} // best way of merging two or more object or array
let combinedUser = Object.assign({}, user1, user2)// merge the objects and override the value
console.log(newcombinedobj);

let keys = Object.keys(user1) // store the keys in an array and we can apply all the array medthod to it
let values = Object.values(user1) // same as keys
console.log(keys)
