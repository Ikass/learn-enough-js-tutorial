const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
   If this be error and upon me proved,
   I never writ, nor no man ever loved.`;

// initialize empty Object to hold unique words.
// let uniques = {};

// refactor using Map object
let uniques = new Map();

// all words.
// let words = sonnet.match(/\w+/g);
// this only counts words with an `'` inbetween
// let words = sonnet.match(/\w+('\w+)/g);
// this appears to count both words, and words with an apostrophe in them
let words = sonnet.match(/\w+('\w+)?/g);

// loop over 'words' and make an array of all unique words.
for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (uniques[word]){
        uniques[word] += 1;
    } else {
        uniques[word] = 1;
    }
}

console.log(uniques);
console.log(words.length);
