// Guessing Game

var user = prompt("What is your name?");
console.log("The user's name is " + user);
var counter = 0;
alert("Hi " + user + "! See if you can guess some things about Lex.");

// Question 1
function question1() {
  var answer1 = prompt("Does Lex live with his brother? ('Y' or 'N', please...)");
  console.log("The user answered " + answer1 + " to the first question");
  if(answer1.toLowerCase() === "n" || answer1.toLowerCase() === "no") {
    alert("Bingo! Lex lives with his sister, Cheri.");
    counter++;
  } else {
    alert("BZZZT. Lex doesn't have a brother, only sisters.");
  }
}

// Question 2
function question2() {
  var answer2 = prompt("Does Lex have a cat named Murphy? (Again. please answer 'Y' or 'N'.)");
  console.log("The user answered " + answer2 + " to the second question");
  if(answer2.toLowerCase() === "n" || answer2.toLowerCase() === "no") {
    alert("You're right! Lex's cat is named Thumbles.");
    counter++;
  } else {
    alert("No way! Murphy is his sister's dog. (Murphy doesn't exactly get along with the Lex's cat.)");
  }
}

// Question 3
function question3() {
  var answer3 = prompt("Does Lex watch 'Masterchef Junior' with is sister? ('Y' or 'N')");
  console.log("The user answered " + answer3 + " to the third question");
  if(answer3.toLowerCase() === "y" || answer3.toLowerCase() === "yes") {
    alert("Yes, and sometimes with his mother as well. (When he's by himself he prefers 'The Blacklist')");
    counter++;
  } else {
    alert("Wrong. (It's her TV.)");
  }
}

// Question 4
function question4() {
  var answer4 = prompt("Now guess how many sisters Lex has. (Hint: it's a number greater than 0)");
  console.log("The user gave " + answer4 + "  as their first answer to the fourth question");
  for(var correct = false; correct === false;) {
    if(answer4 == 3) {
      alert("Right on! Three is the magic number!");
      correct = true;
    } else if(answer4 < 3) {
      answer4 = prompt("No, his Mom kept going after that. Try a larger number.");
      console.log("The user gave " + answer4 + "  as another answer to the fourth question");
    } else if(answer4 > 3){
      answer4 = prompt("No, if that was the case he'd be even loopier than he is already. try lower.");
      console.log("The user gave " + answer4 + "  as another answer to the fourth question");
    } else {
      answer4 = prompt("Are you sure that's even a number?");
      console.log("The user gave " + answer4 + "  as another answer to the fourth question");
    }
  }
}

// Function Call

question1();
question2();
question3();
alert("You got " + counter + " out of 3 questions correct!");
question4();
