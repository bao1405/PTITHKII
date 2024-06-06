import React, { useEffect } from 'react';

// Hàm task1
function task1() {
    console.log('Task 1 được thực thi');
}

// Hàm task2
function task2() {
    console.log('Task 2 được thực thi');
}

// Hàm task3
function task3() {
    console.log('Task 3 được thực thi! Hoàn thành');
}

const App: React.FC = () => {
    useEffect(() => {
        // Thực thi task1 sau 1 giây
        setTimeout(task1, 1000);

        // Thực thi task2 sau 1.5 giây
        setTimeout(task2, 1500);

        // Thực thi task3 sau 2 giây
        setTimeout(task3, 2000);
    }, []);

    return (
        <div>
            <h1>Thực thi các task</h1>
            <p>Kiểm tra console để xem kết quả của các task.</p>
        </div>
    );
};

export default App;
