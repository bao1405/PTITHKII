import React, { useState } from 'react';

export default function Bai1() {
    const [name, setName] = useState<string>('Nguyễn Văn A');

    return (
        <div>
            <h1>Bài 1</h1>
            <h1>Họ và tên: {name}</h1> 
        </div>
    );
}
