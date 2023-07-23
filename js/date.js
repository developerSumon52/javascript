let newDate = new Date()
let weekday = newDate.toLocaleString('default',{
    weekday: "long",
})
console.log(weekday);

const valentines = new Date("1995-02-14");
const month = valentines.getMonth();     // get function use kore day,month,year ber kora jay
const monthNames = ["January", "February", "March" /* , … */];

console.log(monthNames[month]); // "February"
