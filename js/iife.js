// Immediately Invoked Function
(function name(name) {
    console.log(`my name is ${name}`);
}) ("sumon"); // If we use two iife then it is compulsary to use a (;) after the first iife

((name) => {
    console.log(`my name is ${name}`) // we can use iife in arrow function too
})("Islam")