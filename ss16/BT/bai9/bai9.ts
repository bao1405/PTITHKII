function flattenArray<T>(arr: (T | T[])[]): T[] {
    const flattenedArray: T[] = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            flattenedArray.push(...flattenArray(item));
        } else {
            flattenedArray.push(item as T);
        }
    });

    return flattenedArray;
}

const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); 