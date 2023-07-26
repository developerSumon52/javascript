//++++++++ arrow and regular function we use this +++++++++++++//

function regular() {
    console.log(this);
}
regular();

let arrowFunction = () => {
    console.log(this)}
arrowFunction()