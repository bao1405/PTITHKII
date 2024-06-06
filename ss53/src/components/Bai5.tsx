import React, { useState, useEffect } from 'react';

// Định nghĩa kiểu cho condition và callback
type Condition = () => boolean;
type Callback = (result: boolean) => void;

// Hàm checkCondition
function checkCondition(condition: Condition, callback: Callback) {
    setTimeout(() => {
        const result = condition();
        callback(result);
    }, 1000);
}

// Component sử dụng hàm checkCondition
const App: React.FC = () => {
    const [conditionResult, setConditionResult] = useState<boolean | null>(null);

    useEffect(() => {
        // Điều kiện là một hàm kiểm tra một số ngẫu nhiên có lớn hơn 0.5 hay không
        const condition = () => Math.random() > 0.5;

        // Callback function để xử lý kết quả
        const handleResult = (result: boolean) => {
            setConditionResult(result);
        };

        // Gọi hàm checkCondition với điều kiện và callback
        checkCondition(condition, handleResult);
    }, []);

    return (
        <div>
            <h1>Kiểm tra điều kiện sau 1 giây</h1>
            {conditionResult === null ? (
                <p>Đang kiểm tra...</p>
            ) : conditionResult ? (
                <p>Điều kiện đúng!</p>
            ) : (
                <p>Điều kiện sai!</p>
            )}
        </div>
    );
};

export default App;
