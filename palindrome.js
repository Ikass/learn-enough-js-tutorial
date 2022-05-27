// reverse a string
function reverse(string) {
    // does not work with emojis
    // return string.split("").reverse().join("");
    // works with emojis
    return Array.from(string).reverse().join("");
}

// returns true for palindrome, false otherwise
function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}

// return array of username and domain from email address
function emailParts(email) {
    return email.toLowerCase().split("@");
}