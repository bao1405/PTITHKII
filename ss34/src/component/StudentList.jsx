// src/components/StudentList.js
import React from 'react';
import Student from './Student';

function StudentList({ students, onDelete, onEdit, onBlock }) {
  return (
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>Mã Sinh viên</th>
          <th>Tên Sinh viên</th>
          <th>Ngày sinh</th>
          <th>Trạng thái</th>
          <th>Email</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={student.studentId}>
            <td>{index + 1}</td>
            <td>{student.studentId}</td>
            <td>{student.name}</td>
            <td>{student.dob}</td>
            <td>{student.status}</td>
            <td>{student.email}</td>
            <td>
              <button onClick={() => onBlock(student.studentId)}>Chăn</button>
              <button onClick={() => onEdit(student)}>Sửa</button>
              <button onClick={() => onDelete(student.studentId)}>Xoá</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;
