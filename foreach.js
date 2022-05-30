let a = ["ant", "bat", "cat", 42];
// a.forEach(function(element) {
//     console.log(element);
// });

// refactor as an arrow function
a.forEach((element) => {
    console.log(element);
})

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
    console.log(character);
});

// number comparison
function numberCompare(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

let b = [8, 17, 42, 99];

// refactor with forEach loop
b.forEach((elem) => {
    console.log(elem);
})