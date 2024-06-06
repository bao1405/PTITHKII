function longestWordWithoutDuplicatesDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(sentence: string): string {
        const words = sentence.split(' ');
        let longestWord = '';

        for (const word of words) {
            const uniqueCharacters = new Set(word);
            if (uniqueCharacters.size === word.length && word.length > longestWord.length) {
                longestWord = word;
            }
        }

        return longestWord;
    };

    return descriptor;
}

class WordAnalyzer {
    @longestWordWithoutDuplicatesDecorator
    findLongestWord(sentence: string): string {
        return '';
    }
}

const analyzer = new WordAnalyzer();
const sentence = "hello world apple banana orange pumpkin cucumber";
const longest = analyzer.findLongestWord(sentence);
console.log("chữ dài nhất trong đó không có kí tự lặp lại:", longest);