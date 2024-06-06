// src/components/Student.js
import React from 'react';

export default function Student({ student, onDelete, onEdit }) {
  const statusClass = student.status === 'active' ? 'status-active' : 'status-inactive';

  return (
    <div className="student">
      <h2>{student.name}</h2>
      <p>Mã SV: {student.studentId}</p>
      <p>Date of Birth: {student.dob}</p>
      <p>Email: {student.email}</p>
      <p className={statusClass}>Status: {student.status}</p>
      <button onClick={() => onEdit(student)}>Edit</button>
      <button onClick={() => onDelete(student.studentId)}>Delete</button>
    </div>
  );
}
