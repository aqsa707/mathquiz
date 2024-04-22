// Aqsa's Math QUiz
// HTML Variables
let answerE1 = document.getElementById("answerE1");
let answerE2 = document.getElementById("answerE2");
let answerE3 = document.getElementById("answerE3");
let answerE4 = document.getElementById("answerE4");
let btnE1 = document.getElementById("btn");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");
let span4 = document.getElementById("span4");
// Event Listeners
document.getElementById("btn").addEventListener("click", btnClicked);
// Declare Function
function btnClicked() {
  let X = 0;
  if (
    answerE1.value === "2(2x-3)" ||
    answerE1.value === "2 (2x-3)" ||
    answerE1.value === "2 (2X-3)" ||
    answerE1.value === "2 ( 2X - 3 )"
  ) {
    span1.innerHTML = "Correct!";
    span1.style.color = "green";
    X = X + 1;
  } else {
    span1.innerHTML =
      "Incorrect! Explanation: 1. Determine the GMF. In this case, it's a constant of 2. 2. Divide the numbers inside of the brackets by 2. 3. Place the 2 outside of the brackets";
    span1.style.color = "red";
  }
  if (
    answerE2.value === "180 degrees" ||
    answerE2.value === "180" ||
    answerE2.value === "180." ||
    answerE2.value === "180 degrees."
  ) {
    span2.innerHTML = "Correct!";
    span2.style.color = "green";
    X = X + 1;
  } else {
    span2.innerHTML =
      "Incorrect! Explanation:1. Multiply pi by a fraction of 180/pi. 2. Cross the pi's out. 180 will be your answer.";
    span2.style.color = "red";
  }
  if (
    answerE3.value === "975" ||
    answerE3.value == "975 cells" ||
    answerE3.value == "975." ||
    answerE3.value == "975 cells."
  ) {
    span3.innerHTML = "Correct!";
    span3.style.color = "green";
    X = X + 1;
  } else {
    span3.innerHTML =
      "Incorrect! Explanation:1. Use the formula y=ab^t/p.2. Input the Values: a = 387 ||b = 2||t = 8||p = 6||we are solvig for y. 3. Input the values into your calculator. You will get an answer of 975.178. 4. Because we're given the a value as a whole number, the y value should also be expressed as an whole number";
    span3.style.color = "red";
  }
  if (
    answerE4.value === "100 trillion" ||
    answerE4.value === "101 trillion" ||
    answerE4.value === "102 trillion" ||
    answerE4.value === "103 trillion" ||
    answerE4.value === "104 trillion" ||
    answerE4.value === "105 trillion" ||
    answerE4.value === "100 trillion." ||
    answerE4.value === "101 trillion." ||
    answerE4.value === "102 trillion." ||
    answerE4.value === "103 trillion." ||
    answerE4.value === "104 trillion." ||
    answerE4.value === "105 trillion."
  ) {
    span4.innerHTML = "Correct!";
    span4.style.color = "green";
    X = X + 1;
  } else {
    span4.innerHTML =
      "Incorrect! Explanation:Although the estimation varries, the numbers of pi are in between the range of 100 - 105 trillion digits.";
    span4.style.color = "red";
  }
  let score = document.getElementById("score");
  let phrase = document.getElementById("score2");
  if (X === 4) {
    score.innerHTML = "4/4 (100%)";
    score2.innerHTML = "Good Job!";
  } else if (X === 3) {
    score.innerHTML = "3/4 (75%)";
    score2.innerHTML = "Almost there!";
  } else if (X === 2) {
    score.innerHTML = "2/4 (50%)";
    score2.innerHTML = "Yikes.";
  } else if (X === 1) {
    score.innerHTML = "1/4 (25%)";
    score2.innerHTML = "Thanks for getting at least one right!";
  } else {
    score.innerHTML = "0/4 (0%)";
    score2.innerHTML = "Oh no.";
  }
}
