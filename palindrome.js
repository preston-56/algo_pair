const firstPalindrome = function (words) {
  const isPalindrome = (word) => {
    const len = word.length;
    for (let i = 0; i < len / 2; i++) {
      if (word[i] !== word[len - 1 - i]) {
        return false;
      }
    }
    return true;
  };

  for (const word of words) {
    if (isPalindrome(word)) {
      return word;
    }
  }
  return "";
};

// Test cases
const words1 = ["abc", "car", "ada", "racecar", "cool"];
console.log(firstPalindrome(words1)); // Output: "ada"

const words2 = ["notapalindrome", "racecar"];
console.log(firstPalindrome(words2)); // Output: "racecar"

const words3 = ["def", "ghi"];
console.log(firstPalindrome(words3)); // Output: ""
