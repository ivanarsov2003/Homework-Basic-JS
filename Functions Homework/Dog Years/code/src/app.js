console.log("====Dog Age ====");
let humanYear = parseInt(prompt("Calculate your dog's age"));

function calculateDogsAge(year){
    let dogAge = year * 7;
    console.log(`Your dog is ${dogAge} years old`)
    alert(`Your dog is ${dogAge}`);
}
calculateDogsAge(humanYear);

console.log("====Human Age ====");
let dogYear = parseInt(prompt("Calculate Human age"));
function calculateHumanAge(year){
    let humanAge = year / 7;
    console.log(`Human Age is ${humanAge} years old`);
    alert(`Human age is ${humanAge} years old`);
}
calculateHumanAge(dogYear);