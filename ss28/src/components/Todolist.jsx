import React, { Component } from 'react';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                { 
                    id: 1, 
                    name: "Thiết kế giao diện header", 
                    assign: "Nguyễn Văn A", 
                    status: false, 
                    created_at: new Date() 
                },
                { 
                    id: 2, 
                    name: "Thiết kế giao diện footer", 
                    assign: "Nguyễn Văn B", 
                    status: true, 
                    created_at: new Date() 
                },
            ]
        };
    }

    formatDate(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }

    render() {
        return (
            <div>
                <h2>Bài 10</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{  color: 'black', border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>STT</th>
                            <th style={{  color: 'black', border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Tên Công việc</th>
                            <th style={{  color: 'black', border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Người Thực Hiện</th>
                            <th style={{  color: 'black', border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Trạng thái</th>
                            <th style={{  color: 'black', border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Thời gian tạo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tasks.map(task => (
                            <tr key={task.id}>
                                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{task.id}</td>
                                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{task.name}</td>
                                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{task.assign}</td>
                                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px', color: task.status ? 'green' : 'red' }}>{task.status ? "Hoàn Thành" : "Chưa hoàn thành"}</td>
                                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{this.formatDate(task.created_at)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        );
    }
}
