function objectHandler(anyobject) {
    console.log(`user id ${user.userId} is logged in ${user.isLoggedIn}`);
}
let user = {
    userId: "sumon52",
    isLoggedIn: true
}
objectHandler(user);