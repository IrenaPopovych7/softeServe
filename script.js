// Task 2
alert("Popovych");
// Task 3
let first = 45;
let second = "summer";
let box = "";
console.log(first, second);
// box = first;
// first = second;
// second = box;
// console.log(first, second);
// OR
first = [second, (second = first)][0];
console.log(first, second);
// Task 4
let obj = {
  String: "window",
  Number: 150,
  Boolean: false,
  Undefined: undefined,
  Null: null,
};
console.log(obj);
// Task 5
let isAdult = confirm("Are you at least 18 years of age?");
console.log(isAdult);
// Task 6
let firstName = "Iryna";
let lastName = "Popovych";
let studyGroupe = 1;
let yearOfBirth = 1994;
let familyStatus = confirm("Are you meried?");
if (familyStatus == true) {
  console.log("You are merried.");
} else {
  console.log("You are single.");
}
let emptyBox = null;
let notDefined = undefined;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof studyGroupe);
console.log(typeof yearOfBirth);
console.log(typeof familyStatus);
console.log(typeof emptyBox);
console.log(typeof notDefined);
// Task 7
let login = prompt("Dear User, enter your's login, please");
let email = prompt(`Dear ${login}, enter your's email, please`);
let password = prompt(`Dear ${login}, enter your's email, please`);
alert(`Dear ${login}, your email is ${email}, your password is ${password}.`);
// Task 8
let hour = 1;
function countScond(hour) {
  let secondInHour = hour * 60 * 60;
  let secondInDay = secondInHour * 24;
  let secondInMonth = secondInDay * 30;
  console.log(secondInHour);
  console.log(secondInDay);
  console.log(secondInMonth);
}
countScond(hour);
