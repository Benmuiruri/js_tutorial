This is a sample NPM module created by Michael Hartl.

The module can be used as follows:

$ npm install --global bkiarie-palindrome
$ vim test.js
let Phrase = require("bkiarie-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
