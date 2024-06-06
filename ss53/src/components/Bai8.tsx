import React, { useEffect } from 'react';

// Định nghĩa kiểu cho phần tử của mảng và callback function
type Element = number;
type Callback = (element: number) => boolean;

// Hàm myFind
function myFind(array: number[], value: number, callback: Callback): [number | null, number[]] {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return [array[i], array];
        }
    }
    return [null, array];
}

// Component sử dụng hàm myFind
const App: React.FC = () => {
    useEffect(() => {
        // Mảng ví dụ
        const array = [1, 3, 5, 7, 9];

        // Gọi hàm myFind với mảng, giá trị và callback function
        const [result, originalArray] = myFind(array, 5, (element) => element === 5);

        if (result !== null) {
            console.log(`Phần tử ${result} đã được tìm thấy trong mảng [${originalArray.join(', ')}]`);
        } else {
            console.log(`Không tìm thấy phần tử trong mảng [${originalArray.join(', ')}]`);
        }
    }, []);

    return (
        <div>
        </div>
    );
};

export default App;
