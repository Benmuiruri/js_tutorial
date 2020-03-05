let Phrase = require("bkiarie-palindrome");

let string = prompt("Please enter a sting for palindrome testing:")
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`);
} else {
  alert(`"${phrase.content}" is not a palindrome`);
}
