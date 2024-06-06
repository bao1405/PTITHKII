import React, { useEffect } from 'react';

// Định nghĩa kiểu cho phần tử của mảng và callback function
type Element<T> = T;
type Callback<T> = (element: T, index: number, array: T[]) => void;

// Hàm myForEach
function myForEach<T>(array: T[], callback: Callback<T>): void {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

// Component sử dụng hàm myForEach
const App: React.FC = () => {
    useEffect(() => {
        // Mảng ví dụ
        const array = [1, 2, 3, 4, 5 ,6];

        // Gọi hàm myForEach với mảng và callback function
        myForEach(array, (element, index, arr) => {
            console.log(`vị trí: ${index}, phần tử: ${element}, mảng: [${arr.join(', ')}]`);
        });
    }, []);

    return (
        <div>
            
        </div>
    );
};

export default App;
