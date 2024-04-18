const reverseWords = function(s) {
    const words = s.trim().split(/\s+/)
    const reversedWords = words.reverse().join(" ")
    return reversedWords
};

// Test cases
s1 = "the sky is blue"
console.log(reverseWords(s1)); //Output: "blue is sky the"

s2 = "  hello world  "
console.log(reverseWords(s2)); //Output: "world hello"

s3 = "a good   example"
console.log(reverseWords(s3)); //Output: "example good a"