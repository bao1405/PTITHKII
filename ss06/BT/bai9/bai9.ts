const removeDuplicates = (str: string): string => {
    const charMap: { [key: string]: boolean } = {};
    let result = '';

    for (const char of str) {
        if (!charMap[char]) {
            result += char;
            charMap[char] = true;
        }
    }

    return result;
};

// Example usage:
const input1: string = "banana";
const input2: string = "hello world";

const filtered1: string = removeDuplicates(input1);
const filtered2: string = removeDuplicates(input2);

console.log(filtered1); // Output: "ban"
console.log(filtered2);