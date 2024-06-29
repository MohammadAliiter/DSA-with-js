function lengthOfLongestSubstring(s) {
    let n = s.length;
    let maxLength = 0;
    let charIndexMap = new Map();
    let start = 0;

    for (let end = 0; end < n; end++) {
        let char = s[end];
        
        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1;
        }
        
        charIndexMap.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage:
let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); // Output: 3 ("abc")
