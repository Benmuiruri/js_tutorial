let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// returns a url friendly version of the string
function urlify(string) {
  return `https://example.com/${string.toLowerCase().split(/\s+/).join("-")}`;
}
//urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

//urls: functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));


//singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}

console.log(functionalSingles(states));

function includeFilter(elements) {
  return elements.filter(element => element.includes("Dakota"));
}
console.log(includeFilter(states));

function regexFilter(elements) {
  return elements.filter(element => element.match(/\w\s+\w/));
}
console.log(regexFilter(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

//sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => {
    return total += n;}, 0);
}
console.log(functionalSum(numbers));

//lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
}
console.log(functionalLengths(states));
