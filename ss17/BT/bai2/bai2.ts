interface SwapElements {
    <T>(arr: T[], index1: number, index2: number): T[];
}

const swapElements: SwapElements = <T>(arr: T[], index1: number, index2: number): T[] => {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error("Chỉ số nằm ngoài giới hạn");
    }

    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

    return arr;
}

const arr1: number[] = [1, 2, 3, 4, 5];
console.log(swapElements(arr1, 1, 3));

const arr2: string[] = ["apple", "banana", "orange"];
console.log(swapElements(arr2, 0, 2));