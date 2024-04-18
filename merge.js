function mergeAlternately(word1, word2) {
    let merged = [];
    let i = 0, j = 0;
    
    while (i < word1.length && j < word2.length) {
        merged.push(word1[i]);
        merged.push(word2[j]);
        i++;
        j++;
    }
    
    // Append remaining characters of word1 or word2, if any
    merged = merged.concat(word1.slice(i), word2.slice(j));
    
    return merged.join('');
}

// Test cases
console.log(mergeAlternately("abc", "pqr"));  // Output: "apbqcr"
console.log(mergeAlternately("ab", "pqrs"));  // Output: "apbqrs"
console.log(mergeAlternately("abcd", "pq"));  // Output: "apbqcd"
