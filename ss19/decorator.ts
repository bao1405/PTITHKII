function findMostFrequentNumber(numbers: number[]): number | null {
    if (numbers.length === 0) {
        return null;
    }

    let countMap: Map<number, number> = new Map<number, number>();

    numbers.forEach(num => {
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num)! + 1);
        } else {
            countMap.set(num, 1);
        }
    });

    let maxCount = 0;
    let mostFrequentNumber: number | null = null;
    countMap.forEach((count, num) => {
        if (count > maxCount) {
            maxCount = count;
            mostFrequentNumber = num;
        }
    });

    return mostFrequentNumber;
}

// Mảng ví dụ
const numbers: number[] = [1, 2, 3, 4, 2, 2, 4, 5, 2, 5, 2, 2];

const mostFrequent = findMostFrequentNumber(numbers);
console.log("Số xuất hiện nhiều nhất trong mảng là:", mostFrequent);