let a = ["ant", "cat", "bat", 42];

a.forEach( test = (element) => {
  console.log(element);
});

let soliloquy = "To be or not to be, that is the question";
Array.from(soliloquy).forEach( tester = (character) => {
  console.log(character);
});

let b = [5, 14, 52, 99, 32];
b.sort(function(c, d) {
  return c - d;
});
console.log(b);

b.forEach(function (element) {
  console.log(element);
});
