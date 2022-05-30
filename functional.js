// make URL-appropriate strings
let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// urls: Imperative version
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
        urls.push(urlify(element));
    });
    return urls;
}
console.log(imperativeUrls(states));

// [1, 2, 3, 4].map(n => n * n);

// urls: Functional version
function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// Return a URL-friendly version of a string
// e.g. "North Dakota" => "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

// exercise
// Return an array of domain+urlified-string
function urlArray(elements) {
    return elements.map(element => "https://example.com/"+element);
}
console.log(urlArray(functionalUrls(states)));

// singles: Imperative version
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function(element) {
        if (element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    })
    return singles;
};
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));


// exercise
// filters with String#includes for "Dakota"
function dakotaIncludes(elements) {
    return elements.filter(element => element.includes("Dakota"));
}
console.log(dakotaIncludes(states));

// filters with regex
function dakotaRegex(elements) {
    return elements.filter(element => element.split(/\s+/).length === 2);
};
console.log(dakotaRegex(states));

// summing up an array of integers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// sum: Imperative solution
function imperativeSum(elements) {
    let total = 0;
    elements.forEach(function(n) {
        total += n;
    // inital value is the first element, therofe can omit stating it explicitly
    });
    return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
    return elements.reduce((total, n) => {return total += n;});
}
console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
    let lengths = [];
    elements.forEach(function(element) {
        lengths[element] = element.length;
    });
    return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) { 
    return elements.reduce((lengths, element) => {
        lengths[element] = element.length;
        return lengths;
    // initial value of the `reduce` method is the empty object `{}`
    }, {});
}
console.log(functionalLengths(states)); 

// exercises
// Return product (times equals) of all elements in the array
function functionalProduct(elements){
    return elements.reduce((total, n) => {
        return total *= n;
    });
}
console.log(functionalProduct(numbers));